#!/usr/bin/env node
/**
 * Pre-generate Sarvam TTS audio for all static hint strings.
 * Requires SARVAM_API_KEY in .env (never bundled in the app).
 *
 * Usage: npm run generate-audio
 */
import { mkdir, readFile, writeFile, access } from 'fs/promises';
import { constants } from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

function hashText(text) {
  const s = text.trim();
  let h1 = 0x811c9dc5;
  let h2 = 0x01000193;
  for (let i = 0; i < s.length; i++) {
    const c = s.charCodeAt(i);
    h1 = Math.imul(h1 ^ c, 0x01000193);
    h2 = Math.imul(h2 ^ c, 0x01000199);
  }
  return (h1 >>> 0).toString(16).padStart(8, '0') + (h2 >>> 0).toString(16).padStart(8, '0');
}

async function loadEnv() {
  try {
    const envPath = path.join(ROOT, '.env');
    const raw = await readFile(envPath, 'utf8');
    for (const line of raw.split('\n')) {
      const m = line.match(/^([^#=]+)=(.*)$/);
      if (m) process.env[m[1].trim()] = m[2].trim().replace(/^["']|["']$/g, '');
    }
  } catch {
    /* no .env */
  }
}

async function fileExists(p) {
  try {
    await access(p, constants.F_OK);
    return true;
  } catch {
    return false;
  }
}

async function sarvamTts(text, lang, apiKey) {
  const res = await fetch('https://api.sarvam.ai/text-to-speech', {
    method: 'POST',
    headers: {
      'api-subscription-key': apiKey,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      text,
      target_language_code: lang,
      model: 'bulbul:v3',
      speaker: 'shubh',
      pace: 0.95,
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Sarvam TTS failed (${res.status}): ${err}`);
  }

  const data = await res.json();
  const b64 = data.audios?.[0];
  if (!b64) throw new Error('Sarvam response missing audios[0]');
  return Buffer.from(b64, 'base64');
}

async function main() {
  await loadEnv();
  const apiKey = process.env.SARVAM_API_KEY;
  if (!apiKey) {
    console.warn('SARVAM_API_KEY not set — skipping generation. Wire runtime fallback only.');
  }

  const { collectSpeechTexts } = await import(
    pathToFileURL(path.join(ROOT, 'src/lib/collectSpeechTexts.ts')).href
  );

  const texts = collectSpeechTexts();
  const audioDir = path.join(ROOT, 'public/audio');
  await mkdir(audioDir, { recursive: true });

  const manifest = {};
  let generated = 0;
  let skipped = 0;

  for (const { text, lang } of texts) {
    const hash = hashText(text);
    const filename = `${hash}.wav`;
    const outPath = path.join(audioDir, filename);
    manifest[hash] = filename;

    if (await fileExists(outPath)) {
      skipped++;
      continue;
    }

    if (!apiKey) continue;

    try {
      const buf = await sarvamTts(text, lang, apiKey);
      await writeFile(outPath, buf);
      generated++;
      console.log(`✓ ${hash} (${lang}) ${text.slice(0, 48)}…`);
      await new Promise((r) => setTimeout(r, 300));
    } catch (err) {
      console.error(`✗ ${hash}:`, err instanceof Error ? err.message : err);
    }
  }

  const manifestPath = path.join(ROOT, 'src/data/audioManifest.json');
  await writeFile(manifestPath, JSON.stringify(manifest, null, 2) + '\n');
  console.log(`Done: ${generated} generated, ${skipped} cached, ${texts.length} total strings.`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

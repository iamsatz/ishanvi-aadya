#!/usr/bin/env node
/**
 * Smoke-test the deployed `tutor` Supabase Edge Function.
 * Requires VITE_SUPABASE_URL + VITE_SUPABASE_ANON_KEY in .env
 *
 * Usage:
 *   npm run test-tutor              # all built-in samples
 *   npm run test-tutor -- --chat    # Ask Teacher chat mode
 *   npm run test-tutor -- --only 2  # run sample #2 only
 */
import { readFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

async function loadEnv() {
  try {
    const raw = await readFile(path.join(ROOT, '.env'), 'utf8');
    for (const line of raw.split('\n')) {
      const m = line.match(/^([^#=]+)=(.*)$/);
      if (m) process.env[m[1].trim()] = m[2].trim().replace(/^["']|["']$/g, '');
    }
  } catch {
    /* no .env */
  }
}

/** Grade-4 CBSE-style samples — replace with real homework photos for accuracy eval. */
const SAMPLES = [
  {
    name: 'Arithmetic (addition)',
    payload: {
      mode: 'homework',
      grade: 'Grade 4',
      board: 'CBSE',
      subject: 'Maths',
      text: 'Q1. Add: 456 + 789 = ?\nQ2. Subtract: 1000 - 347 = ?',
    },
    expected: { Q1: '1245', Q2: '653' },
  },
  {
    name: 'Word problem',
    payload: {
      mode: 'homework',
      grade: 'Grade 4',
      board: 'CBSE',
      subject: 'Maths',
      text: 'Ravi has 24 stickers. He gives 9 to his sister and buys 15 more. How many stickers does Ravi have now?',
    },
    expected: { stickers: '30' },
  },
  {
    name: 'Multi-step (place value)',
    payload: {
      mode: 'homework',
      grade: 'Grade 4',
      board: 'CBSE',
      subject: 'Maths',
      text: 'Write 5,62,340 in expanded form.\nWhat is the place value of 6 in 5,62,340?',
    },
    expected: { expanded: '562340', placeValue: '60000' },
  },
  {
    name: 'Fill in the blank',
    payload: {
      mode: 'homework',
      grade: 'Grade 4',
      board: 'CBSE',
      subject: 'Maths',
      text: 'The smallest 4-digit number is ______.\nThe largest 3-digit number is ______.',
    },
    expected: { smallest4: '1000', largest3: '999' },
  },
  {
    name: 'Indian number naming',
    payload: {
      mode: 'homework',
      grade: 'Grade 4',
      board: 'CBSE',
      subject: 'Maths',
      text: 'Write in words (Indian system): 45,67,890',
    },
    expected: { words: 'forty five lakh sixty seven thousand eight hundred ninety' },
  },
  {
    name: 'Division with remainder',
    payload: {
      mode: 'homework',
      grade: 'Grade 4',
      board: 'CBSE',
      subject: 'Maths',
      text: 'Divide 47 by 5. Write the quotient and remainder.',
    },
    expected: { quotient: '9', remainder: '2' },
  },
  {
    name: 'Chat mode (Ask Teacher)',
    payload: {
      mode: 'chat',
      grade: 'Grade 4',
      board: 'CBSE',
      subject: 'Maths',
      text: 'What is the difference between standard form and periods?',
    },
    expected: null,
  },
  {
    name: 'Homework image (public sample)',
    payload: {
      mode: 'homework',
      grade: 'Grade 4',
      board: 'CBSE',
      subject: 'Maths',
      text: 'Read the questions from the worksheet image.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Vd-Orig.png/320px-Vd-Orig.png',
    },
    expected: null,
  },
];

function parseArgs() {
  const args = process.argv.slice(2);
  const onlyIdx = args.indexOf('--only');
  const only = onlyIdx >= 0 ? Number(args[onlyIdx + 1]) : null;
  const chatOnly = args.includes('--chat');
  const homeworkOnly = args.includes('--homework');
  return { only, chatOnly, homeworkOnly };
}

function normalize(s) {
  return String(s ?? '')
    .toLowerCase()
    .replace(/[,₹]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function answerMatches(actual, expectedValues) {
  if (!expectedValues) return null;
  const a = normalize(actual);
  return Object.values(expectedValues).some((exp) => {
    const e = normalize(exp);
    return a.includes(e) || e.split(/\s+/).every((w) => a.includes(w));
  });
}

function cardMightLeakAnswer(card, taskAnswers) {
  const blob = [
    card.title,
    card.englishContent,
    card.revealAnswer,
    card.hint,
    ...(card.choices?.map((c) => c.label) ?? []),
    ...(card.checklist?.map((c) => c.label + ' ' + (c.hint ?? '')) ?? []),
  ]
    .filter(Boolean)
    .join(' ')
    .toLowerCase();

  const leaks = [];
  for (const ans of taskAnswers) {
    const n = normalize(ans);
    if (n.length >= 2 && blob.includes(n)) leaks.push(ans);
  }
  return leaks;
}

async function callTutor(url, anonKey, payload) {
  const endpoint = `${url.replace(/\/$/, '')}/functions/v1/tutor`;
  const res = await fetch(endpoint, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${anonKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  const text = await res.text();
  let data;
  try {
    data = JSON.parse(text);
  } catch {
    throw new Error(`Non-JSON response (${res.status}): ${text.slice(0, 300)}`);
  }

  if (!res.ok || data.error) {
    throw new Error(data.error ?? `HTTP ${res.status}: ${text.slice(0, 300)}`);
  }
  return data;
}

function printSampleResult(sample, data, index) {
  const { cards = [], tasks = [], message } = data;
  console.log(`\n${'─'.repeat(60)}`);
  console.log(`#${index + 1} ${sample.name}`);
  console.log(`${'─'.repeat(60)}`);
  console.log(`Cards: ${cards.length}  |  Tasks: ${tasks.length}`);

  if (message) console.log(`Message: ${message}`);

  if (sample.payload.mode === 'chat') {
    const card = cards[0];
    if (card) {
      console.log(`\nChat title: ${card.title}`);
      console.log(`Answer preview: ${(card.englishContent ?? '').slice(0, 200)}…`);
    } else {
      console.log('\n⚠ No card returned for chat mode');
    }
    return { tasksOk: true, leaks: [], scored: null, correct: null, total: null };
  }

  if (tasks.length === 0) {
    console.log('\n⚠ tasks[] is EMPTY — Answers page will have nothing to show');
  }

  const taskAnswers = tasks.map((t) => t.answer).filter(Boolean);
  let correct = 0;
  let scored = 0;

  for (const [i, task] of tasks.entries()) {
    const missing = [];
    if (!task.label?.trim()) missing.push('label');
    if (!task.answer?.trim()) missing.push('answer');
    if (!task.explanation?.trim()) missing.push('explanation');

    const match = answerMatches(task.answer, sample.expected);
    if (sample.expected) {
      scored++;
      if (match) correct++;
    }

    console.log(`\n  Q${i + 1}: ${task.label ?? '(no label)'}`);
    console.log(`  Answer:       ${task.answer ?? '— MISSING'}`);
    console.log(`  Explanation:  ${task.explanation ?? '— MISSING'}`);
    if (task.hint) console.log(`  Hint:         ${task.hint}`);
    if (missing.length) console.log(`  ⚠ Missing fields: ${missing.join(', ')}`);
    if (sample.expected) {
      console.log(`  Expected ref: ${JSON.stringify(sample.expected)}`);
      console.log(`  Match:        ${match ? '✓ likely correct' : '✗ check manually'}`);
    }
  }

  const leaks = [];
  for (const card of cards) {
    const found = cardMightLeakAnswer(card, taskAnswers);
    if (found.length) leaks.push({ card: card.title, answers: found });
  }

  if (leaks.length) {
    console.log('\n⚠ Possible answer leak in teaching cards:');
    for (const l of leaks) {
      console.log(`   "${l.card}" contains: ${l.answers.join(', ')}`);
    }
  } else if (taskAnswers.length) {
    console.log('\n✓ No obvious final-answer leak detected in cards');
  }

  return {
    tasksOk: tasks.length > 0,
    leaks,
    scored: sample.expected ? scored : null,
    correct: sample.expected ? correct : null,
    total: sample.expected ? tasks.length : null,
  };
}

async function main() {
  await loadEnv();
  const url = process.env.VITE_SUPABASE_URL;
  const anonKey = process.env.VITE_SUPABASE_ANON_KEY;

  if (!url || !anonKey) {
    console.error('Missing VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY in .env');
    process.exit(1);
  }

  const { only, chatOnly, homeworkOnly } = parseArgs();
  let samples = SAMPLES;
  if (chatOnly) samples = samples.filter((s) => s.payload.mode === 'chat');
  if (homeworkOnly) samples = samples.filter((s) => s.payload.mode === 'homework');
  if (only != null && !Number.isNaN(only)) {
    samples = samples.filter((_, i) => i === only - 1);
    if (!samples.length) {
      console.error(`No sample at index ${only}. Use 1–${SAMPLES.length}.`);
      process.exit(1);
    }
  }

  console.log('Tutor function test harness');
  console.log(`Endpoint: ${url.replace(/\/$/, '')}/functions/v1/tutor`);
  console.log(`Samples:  ${samples.length}`);

  let totalScored = 0;
  let totalCorrect = 0;
  let emptyTasks = 0;
  let leakCount = 0;
  let failures = 0;

  for (let i = 0; i < samples.length; i++) {
    const sample = samples[i];
    try {
      const data = await callTutor(url, anonKey, sample.payload);
      const result = printSampleResult(sample, data, i);
      if (!result.tasksOk && sample.payload.mode === 'homework') emptyTasks++;
      if (result.leaks?.length) leakCount += result.leaks.length;
      if (result.scored) {
        totalScored += result.scored;
        totalCorrect += result.correct ?? 0;
      }
    } catch (err) {
      failures++;
      console.log(`\n${'─'.repeat(60)}`);
      console.log(`#${i + 1} ${sample.name}`);
      console.log(`${'─'.repeat(60)}`);
      console.error(`✗ FAILED: ${err instanceof Error ? err.message : err}`);
      if (String(err).includes('404') || String(err).includes('Failed')) {
        console.error('\nHint: deploy first → supabase functions deploy tutor');
      }
    }
  }

  console.log(`\n${'═'.repeat(60)}`);
  console.log('SUMMARY');
  console.log(`${'═'.repeat(60)}`);
  console.log(`Samples run:     ${samples.length}`);
  console.log(`Failures:        ${failures}`);
  console.log(`Empty tasks[]:   ${emptyTasks} homework sample(s)`);
  console.log(`Answer leaks:    ${leakCount} card(s)`);
  if (totalScored > 0) {
    const pct = Math.round((totalCorrect / totalScored) * 100);
    console.log(`Auto-scored:     ${totalCorrect}/${totalScored} (~${pct}%) — rough heuristic only`);
    console.log('\nDecision gate (manual verify still required):');
    if (pct >= 90) console.log('  → >=90%: Answers feature OK to keep');
    else if (pct >= 60) console.log('  → 60–90%: Reframe to "worked solution + AI may be wrong"');
    else console.log('  → <60%: Do not surface final answers; hints/steps only');
  } else {
    console.log('Auto-scored:     n/a (run homework text samples for scoring)');
  }

  process.exit(failures > 0 ? 1 : 0);
}

main();

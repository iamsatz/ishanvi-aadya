/** Detect TV / leanback / large-screen remote browsing (Android TV APK, TV browser). */
export function detectTvEnvironment(): boolean {
  const params = new URLSearchParams(window.location.search);
  if (params.get('tv') === '1') return true;
  if (params.get('tv') === '0') return false;

  const ua = navigator.userAgent.toLowerCase();
  if (ua.includes('tv') || ua.includes('leanback') || ua.includes('aftb') || ua.includes('aftm')) {
    return true;
  }

  const w = window.innerWidth;
  const h = window.innerHeight;
  const bigScreen = w >= 900 && h >= 500;
  const coarsePointer = window.matchMedia('(pointer: coarse)').matches;
  const noHover = window.matchMedia('(hover: none)').matches;

  return bigScreen && coarsePointer && noHover;
}

/** Detect TV / leanback / large-screen remote browsing (Android TV APK, TV browser). */
export function detectTvEnvironment(): boolean {
  const params = new URLSearchParams(window.location.search);
  if (params.get('tv') === '1') return true;
  if (params.get('tv') === '0') return false;

  // Set by MainActivity on Android TV (Capacitor APK)
  if (window.__ANDROID_TV__ === true) return true;

  const ua = navigator.userAgent.toLowerCase();
  if (
    ua.includes('tv') ||
    ua.includes('leanback') ||
    ua.includes('aftb') ||
    ua.includes('aftm') ||
    ua.includes('afts') ||
    ua.includes('aftt') ||
    ua.includes('capacitortv')
  ) {
    return true;
  }

  const w = window.innerWidth;
  const h = window.innerHeight;
  const bigScreen = w >= 960 && h >= 540;
  const landscape = w > h;

  // Android WebView on TV: often no "mobile" in UA + large landscape screen
  if (ua.includes('android') && !ua.includes('mobile') && bigScreen && landscape) {
    return true;
  }

  const coarsePointer = window.matchMedia('(pointer: coarse)').matches;
  const noHover = window.matchMedia('(hover: none)').matches;

  return bigScreen && landscape && coarsePointer && noHover;
}

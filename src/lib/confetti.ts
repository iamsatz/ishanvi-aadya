/* Tiny, dependency-free confetti — injects a few colored spans
   into a container and lets CSS animate them away. */

const COLORS = ['#FF6B6B', '#4ECDC4', '#FFD166', '#06D6A0', '#A78BFA'];

export function burstConfetti(container: HTMLElement, count = 24) {
  const layer = document.createElement('div');
  layer.className = 'confetti';
  for (let i = 0; i < count; i++) {
    const s = document.createElement('span');
    s.style.left = `${Math.random() * 100}%`;
    s.style.background = COLORS[i % COLORS.length];
    s.style.animationDelay = `${Math.random() * 120}ms`;
    s.style.transform = `rotate(${Math.random() * 360}deg)`;
    layer.appendChild(s);
  }
  container.appendChild(layer);
  window.setTimeout(() => layer.remove(), 1100);
}

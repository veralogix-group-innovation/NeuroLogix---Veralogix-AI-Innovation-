const SELECTOR = ".cta, button";

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

function applyPressEffect(el: HTMLElement) {
  el.classList.remove("is-pressed");
  void el.offsetWidth;
  el.classList.add("is-pressed");
}

function triggerBurst(el: HTMLElement, x: number, y: number) {
  el.style.setProperty("--burst-x", `${x}%`);
  el.style.setProperty("--burst-y", `${y}%`);
  el.classList.remove("cta--burst");
  void el.offsetWidth;
  el.classList.add("cta--burst");
}

function spawnParticles(el: HTMLElement, x: number, y: number) {
  const particleTotal = 8;
  for (let i = 0; i < particleTotal; i += 1) {
    const particle = document.createElement("span");
    particle.className = "cta__particle";
    const offsetAngle = (Math.PI * 2 * i) / particleTotal + Math.random() * 0.6;
    const distance = 20 + Math.random() * 30;
    const offsetX = Math.cos(offsetAngle) * distance;
    const offsetY = Math.sin(offsetAngle) * distance;
    particle.style.left = `calc(${x}% + ${offsetX}px)`;
    particle.style.top = `calc(${y}% + ${offsetY}px)`;
    particle.style.animationDuration = `${0.55 + Math.random() * 0.4}s`;
    particle.style.animationDelay = `${Math.random() * 0.08}s`;
    el.appendChild(particle);
    requestAnimationFrame(() => {
      particle.classList.add("is-active");
    });
    particle.addEventListener(
      "animationend",
      () => {
        particle.remove();
      },
      { once: true }
    );
  }
}

function percentagePosition(target: DOMRect, clientX?: number, clientY?: number) {
  const relativeX = clientX === undefined ? target.width / 2 : clientX - target.left;
  const relativeY = clientY === undefined ? target.height / 2 : clientY - target.top;
  return {
    x: Math.max(0, Math.min(100, (relativeX / target.width) * 100)),
    y: Math.max(0, Math.min(100, (relativeY / target.height) * 100)),
  };
}

function handleActivation(event: PointerEvent | KeyboardEvent, explicitTarget?: HTMLElement) {
  const target = explicitTarget ?? (event.currentTarget as HTMLElement | null);
  if (!target) return;
  applyPressEffect(target);
  if (prefersReducedMotion.matches) return;

  const rect = target.getBoundingClientRect();
  const coords =
    event instanceof PointerEvent
      ? percentagePosition(rect, event.clientX, event.clientY)
      : percentagePosition(rect);
  triggerBurst(target, coords.x, coords.y);
  spawnParticles(target, coords.x, coords.y);
}

function onKeydown(event: KeyboardEvent) {
  if (event.key !== "Enter" && event.key !== " ") return;
  const target = event.target as HTMLElement | null;
  if (!target || !target.matches(SELECTOR)) return;
  if (event.key === " ") {
    event.preventDefault();
  }
  handleActivation(event, target);
}

function initButtons() {
  const elements = Array.from(document.querySelectorAll<HTMLElement>(SELECTOR));
  if (!elements.length) return;

  elements.forEach((el) => {
    el.addEventListener("pointerdown", handleActivation as EventListener);
  });

  document.addEventListener("keydown", onKeydown);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initButtons, { once: true });
} else {
  initButtons();
}

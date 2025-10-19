const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const PARTICLE_COUNT = 28;

function buildParticles() {
  if (prefersReducedMotion.matches) return () => {};

  let container = document.querySelector<HTMLDivElement>(".ambient-particles");
  if (!container) {
    container = document.createElement("div");
    container.className = "ambient-particles";
    container.setAttribute("aria-hidden", "true");
    document.body.prepend(container);
  } else {
    container.innerHTML = "";
  }

  for (let i = 0; i < PARTICLE_COUNT; i += 1) {
    const particle = document.createElement("span");
    const size = 4 + Math.random() * 8;
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.animationDuration = `${12 + Math.random() * 14}s`;
    particle.style.animationDelay = `${Math.random() * 12}s`;
    container.appendChild(particle);
  }

  return () => {
    container?.remove();
  };
}

let teardown: (() => void) | null = null;

function init() {
  teardown?.();
  teardown = buildParticles();
}

prefersReducedMotion.addEventListener("change", init);

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init, { once: true });
} else {
  init();
}

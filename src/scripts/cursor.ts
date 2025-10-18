const pointerFine = window.matchMedia("(pointer: fine)");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const INTERACTIVE_SELECTOR = "a, button, .cta, .energy-card";

function enableCursor() {
  if (!pointerFine.matches || prefersReducedMotion.matches) {
    document.body.classList.remove("has-custom-cursor");
    return null;
  }

  const cursor = document.createElement("div");
  cursor.className = "neon-cursor";
  document.body.appendChild(cursor);
  document.body.classList.add("has-custom-cursor");

  const updatePosition = (event: PointerEvent) => {
    cursor.style.left = `${event.clientX}px`;
    cursor.style.top = `${event.clientY}px`;
  };

  const activate = (state: boolean) => {
    cursor.classList.toggle("is-active", state);
  };

  const pointerMove = (event: PointerEvent) => {
    updatePosition(event);
  };

  const pointerOver = (event: PointerEvent) => {
    const target = event.target as Element | null;
    activate(Boolean(target?.closest(INTERACTIVE_SELECTOR)));
  };

  const pointerOut = (event: PointerEvent) => {
    const target = event.target as Element | null;
    if (!target?.closest(INTERACTIVE_SELECTOR)) {
      activate(false);
    }
  };

  const down = () => {
    cursor.classList.add("is-pressed");
  };

  const up = () => {
    cursor.classList.remove("is-pressed");
  };

  window.addEventListener("pointermove", pointerMove);
  document.addEventListener("pointerover", pointerOver);
  document.addEventListener("pointerout", pointerOut);
  window.addEventListener("pointerdown", down);
  window.addEventListener("pointerup", up);

  window.addEventListener("blur", () => activate(false));

  return () => {
    cursor.remove();
    window.removeEventListener("pointermove", pointerMove);
    document.removeEventListener("pointerover", pointerOver);
    document.removeEventListener("pointerout", pointerOut);
    window.removeEventListener("pointerdown", down);
    window.removeEventListener("pointerup", up);
    document.body.classList.remove("has-custom-cursor");
  };
}

let teardown: (() => void) | null = null;

function init() {
  if (teardown) {
    teardown();
    teardown = null;
  }
  teardown = enableCursor();
}

prefersReducedMotion.addEventListener("change", init);
pointerFine.addEventListener("change", init);

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init, { once: true });
} else {
  init();
}

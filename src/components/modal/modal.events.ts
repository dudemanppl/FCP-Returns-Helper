import { toggleModal } from "./index.js";

export function attachModalEventListeners(
  modalOverlay: HTMLElement,
  closeBtn: HTMLButtonElement
): void {
  closeBtn.addEventListener("click", () => toggleModal(false));

  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) toggleModal(false);
  });

  document.addEventListener("keydown", (e) => {
    const modal = document.getElementById("returns-helper-modal");
    const isVisible = modal?.style.display === "flex";
    if (!isVisible || !modal) return;

    if (e.key === "Escape") {
      toggleModal(false);
      return;
    }

    if (e.key === "Tab") {
      const focusable = modal.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (!first || !last) return;

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }
  });
}

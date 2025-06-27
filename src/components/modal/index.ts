import {
  styleModalOverlay,
  styleModalBox,
  styleCloseButton,
} from "./modal.styles.js";
import { attachModalEventListeners } from "./modal.events.js";

let modalOverlay: HTMLDivElement | null = null;

export function injectModal(): void {
  modalOverlay = document.createElement("div");
  modalOverlay.id = "returns-helper-modal";
  styleModalOverlay(modalOverlay);

  const modalBox = document.createElement("div");
  modalBox.tabIndex = -1;
  styleModalBox(modalBox);

  const closeBtn = document.createElement("button");
  closeBtn.type = "button";
  closeBtn.textContent = "Close";
  styleCloseButton(closeBtn);

  modalBox.innerHTML = `<h2>Returns Helper</h2><p>Put your content here</p>`;
  modalBox.appendChild(closeBtn);
  modalOverlay.appendChild(modalBox);
  document.body.appendChild(modalOverlay);

  attachModalEventListeners(modalOverlay, closeBtn);
}

export function toggleModal(show: boolean): void {
  const modal = document.getElementById("returns-helper-modal");
  if (!modal) return;

  modal.style.display = show ? "flex" : "none";

  if (show) {
    const focusable = modal.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    if (first) setTimeout(() => first.focus(), 0);
  }
}

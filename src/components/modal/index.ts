import { attachModalEventListeners } from "./modal.events.js";
import { ModalContents } from "../modalContents/index.js";

import type { ItemInfo } from "../../core/index.types.js";

let modalOverlay: HTMLDivElement | null = null;

export function injectModal(items: Record<string, ItemInfo>): void {
  modalOverlay = document.createElement("div");
  modalOverlay.id = "returns-helper-modal";

  const modalBox = document.createElement("div");
  modalBox.tabIndex = -1;
  modalBox.classList.add("modal-box");

  const modalHeaderContainer = document.createElement("div");
  modalHeaderContainer.classList.add("modal-header-container");

  const closeBtn = document.createElement("button");
  closeBtn.type = "button";
  closeBtn.textContent = "X";
  closeBtn.classList.add("returns-modal-close");
  modalHeaderContainer.appendChild(closeBtn);

  const heading = document.createElement("h2");
  heading.textContent = "Returns Helper";
  modalHeaderContainer.appendChild(heading);

  modalBox.appendChild(modalHeaderContainer);

  const modalContents = new ModalContents(items).render();

  modalBox.appendChild(modalContents);

  modalOverlay.appendChild(modalBox);
  document.body.appendChild(modalOverlay);

  attachModalEventListeners(modalOverlay, closeBtn);
}

export function toggleModal(show: boolean): void {
  const modal = document.getElementById("returns-helper-modal");
  if (!modal) return;

  modal.style.display = show ? "flex" : "none";

  if (show) {
    document.body.style.overflow = "hidden";

    const focusable = modal.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    if (first) setTimeout(() => first.focus(), 0);
  } else {
    document.body.style.overflow = "";
  }
}

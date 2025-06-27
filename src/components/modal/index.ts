import {
  styleModalOverlay,
  styleModalBox,
  styleCloseButton,
} from "./modal.styles.js";
import { attachModalEventListeners } from "./modal.events.js";
import { ModalContents } from "../modalContents/index.js";

import type { ItemInfo } from "../../core/index.types.js";

let modalOverlay: HTMLDivElement | null = null;

export function injectModal(items: Record<string, ItemInfo>): void {
  modalOverlay = document.createElement("div");
  modalOverlay.id = "returns-helper-modal";
  styleModalOverlay(modalOverlay);

  const modalBox = document.createElement("div");
  modalBox.tabIndex = -1;
  styleModalBox(modalBox);

  const closeBtn = document.createElement("button");
  closeBtn.type = "button";
  closeBtn.textContent = "X";
  closeBtn.classList.add("returns-modal-close");

  styleCloseButton();
  modalBox.appendChild(closeBtn);

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

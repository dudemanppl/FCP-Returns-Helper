import { toggleModal } from "../modal/index.js";

export function attachButtonEvents(button: HTMLButtonElement): void {
  button.addEventListener("click", () => toggleModal(true));

  button.addEventListener("mouseenter", () => {
    button.style.opacity = "0.9";
  });

  button.addEventListener("mouseleave", () => {
    button.style.opacity = "1";
  });
}

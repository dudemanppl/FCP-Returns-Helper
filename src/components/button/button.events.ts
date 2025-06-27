import { toggleModal } from "../modal/index.js";

export function attachButtonEvents(button: HTMLButtonElement): void {
  button.addEventListener("click", () => toggleModal(true));
}

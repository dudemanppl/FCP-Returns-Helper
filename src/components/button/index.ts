import { styleButton } from "./button.styles.js";
import { attachButtonEvents } from "./button.events.js";
import { injectModal } from "../modal/index.js";

export function addButton(): void {
  const returnForm = document.querySelector(
    "body > div.main > div > div.retForm"
  ) as HTMLElement | null;

  if (!returnForm) {
    console.error("returnForm element not found");
    return;
  }

  returnForm.style.display = "flex";
  returnForm.style.flexDirection = "column";

  const button: HTMLButtonElement = document.createElement("button");
  button.type = "button";
  button.textContent = "Open Returns Helper";

  styleButton(button);
  attachButtonEvents(button);

  returnForm.prepend(button);
  injectModal();
}

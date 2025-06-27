import { styleButton } from "./button.styles.js";
import { attachButtonEvents } from "./button.events.js";
import { injectModal } from "../modal/index.js";

import type { ItemInfo } from "../../core/index.types.js";

export class ReturnHelperButton {
  private allItems: Record<string, ItemInfo>;
  private returnEligibleItems: Record<string, ItemInfo>;

  constructor({
    allItems,
    returnEligibleItems,
  }: {
    allItems: Record<string, ItemInfo>;
    returnEligibleItems: Record<string, ItemInfo>;
  }) {
    this.allItems = allItems;
    this.returnEligibleItems = returnEligibleItems;
  }

  public render(): void {
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
    button.classList.add("primaryButton", "returns-button");

    // styleButton(button);
    attachButtonEvents(button);

    returnForm.prepend(button);
    injectModal(this.returnEligibleItems);
  }
}

import { getElementByClass } from "./dom-utils.js";
import { getItemName, getItemSuffix } from "./item-parser.js";
import { createItemInfo, addOrderToItem } from "./item-model.js";
import type { ItemInfo } from "./index.types.js";

export class FCPReturns {
  allItems: Record<string, ItemInfo> = {};
  returnEligibleItems: string[] = [];

  getReturnForm(): HTMLUListElement {
    return getElementByClass<HTMLUListElement>("retForm__list accordion");
  }

  getPreviousOrders(): HTMLLIElement[] {
    return Array.from(this.getReturnForm().children) as HTMLLIElement[];
  }

  getOrderNumber(orderTitleElement: HTMLAnchorElement): string {
    const orderDetails = orderTitleElement.innerText;
    const separatorIndex = orderDetails.indexOf(" - ");
    return orderDetails.substring(6, separatorIndex);
  }

  addItemData(orderRow: HTMLTableRowElement, orderNumber: string): void {
    const itemAnchor = orderRow.children[1]
      .firstElementChild as HTMLAnchorElement;
    const itemSuffix = getItemSuffix(itemAnchor);

    if (!this.allItems[itemSuffix]) {
      const itemName = getItemName(itemAnchor);
      const newItem = createItemInfo(
        itemAnchor,
        orderRow,
        orderNumber,
        itemName
      );
      this.allItems[itemSuffix] = newItem;
    } else {
      addOrderToItem(this.allItems[itemSuffix], orderRow, orderNumber);
    }
  }

  parseOrder(orderListItem: HTMLLIElement): void {
    const orderTitleElement =
      orderListItem.firstElementChild as HTMLAnchorElement;
    const orderNumber = this.getOrderNumber(orderTitleElement);

    const orderTable =
      orderListItem.lastElementChild?.firstElementChild?.getElementsByTagName(
        "tbody"
      )[0] as HTMLTableSectionElement;

    for (const child of orderTable.children) {
      try {
        this.addItemData(child as HTMLTableRowElement, orderNumber);
      } catch {
        continue;
      }
    }
  }

  sortItems(): void {
    for (const [itemSuffix, { orders }] of Object.entries(this.allItems)) {
      if (orders.length > 1) {
        this.returnEligibleItems.push(itemSuffix);
      }
    }
  }

  init(): any {
    const previousOrders = this.getPreviousOrders();
    for (const order of previousOrders) {
      this.parseOrder(order);
    }
    this.sortItems();
    return this.allItems;
  }
}

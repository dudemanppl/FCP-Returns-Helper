import type { ItemInfo } from "./index.types.js";

class FCPReturns {
  allItems: Record<string, ItemInfo>;
  returnEligibleItems: string[];

  constructor() {
    this.allItems = {};
    this.returnEligibleItems = [];
  }

  getReturnForm(): HTMLUListElement {
    return document.getElementsByClassName(
      "retForm__list accordion"
    )[0] as HTMLUListElement;
  }

  getPreviousOrders(): HTMLLIElement[] {
    const returnForm = this.getReturnForm();
    return Array.from(returnForm.children) as HTMLLIElement[];
  }

  getOrderNumber(orderTitleElement: HTMLAnchorElement): string {
    const orderDetails = orderTitleElement.innerText;
    const separatorIndex = orderDetails.indexOf(" - ");
    return orderDetails.substring(6, separatorIndex);
  }

  getCheckbox(orderRow: HTMLTableRowElement): HTMLInputElement {
    return orderRow.firstElementChild?.firstElementChild as HTMLInputElement;
  }

  getItemSuffix(itemAnchor: HTMLAnchorElement): string {
    const itemSuffixElem = itemAnchor.lastElementChild!
      .lastElementChild as HTMLDivElement;
    const itemSuffix = itemSuffixElem.innerText.trim();

    return itemSuffix;
  }

  getItemQty(orderRow: HTMLTableRowElement): number {
    const qtyElem = orderRow.lastElementChild
      ?.lastElementChild as HTMLInputElement;

    if (!qtyElem) throw new Error();

    const max = qtyElem.getAttribute("max");

    if (!max) console.log(orderRow);

    const itemQty = Number(max);

    return itemQty;
  }

  addNewItem(
    itemAnchor: HTMLAnchorElement,
    orderRow: HTMLTableRowElement,
    orderNumber: string,
    itemSuffix: string
  ): void {
    const itemQty = this.getItemQty(orderRow);

    if (!itemQty) throw new Error();
    const imageElem = itemAnchor.children[0] as HTMLImageElement;
    const itemUrl = itemAnchor.href;
    const itemImgUrl = imageElem.src;

    const spanElem = itemAnchor.children[1] as HTMLSpanElement;
    const itemNameElem = spanElem.children[0] as HTMLDivElement;
    const itemName = itemNameElem.innerText;

    const newItemInfo: ItemInfo = {
      itemUrl,
      itemImgUrl,
      itemName,
      totalQty: itemQty,
      orders: [{ itemQty, orderNumber, orderRow }],
    };

    this.allItems[itemSuffix] = newItemInfo;
  }

  addOrderToItem(
    itemSuffix: string,
    orderNumber: string,
    orderRow: HTMLTableRowElement
  ): void {
    const itemQty = this.getItemQty(orderRow);
    this.allItems[itemSuffix].totalQty += itemQty;
    this.allItems[itemSuffix].orders.push({ itemQty, orderNumber, orderRow });
  }

  addItemData(orderRow: HTMLTableRowElement, orderNumber: string): void {
    const itemAnchor = orderRow.children[1]
      .firstElementChild as HTMLAnchorElement;
    const itemSuffix = this.getItemSuffix(itemAnchor);

    if (!this.allItems[itemSuffix]) {
      try {
        this.addNewItem(itemAnchor, orderRow, orderNumber, itemSuffix);
        return;
      } catch (error) {
        throw error;
      }
    }

    this.addOrderToItem(itemSuffix, orderNumber, orderRow);
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
    for (const [
      itemSuffix,
      {
        orders: { length },
      },
    ] of Object.entries(this.allItems)) {
      if (length > 1) this.returnEligibleItems.push(itemSuffix);
    }
  }

  init(): any {
    const previousOrders = this.getPreviousOrders();

    for (const order of previousOrders) {
      this.parseOrder(order);
    }

    this.sortItems();

    return this.returnEligibleItems;
  }
}

const returns = new FCPReturns();

const nice = returns.init();

console.log(nice);

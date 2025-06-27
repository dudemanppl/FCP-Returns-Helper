import type { ItemInfo } from "./index.types.js";
import { getItemQty } from "./item-parser.js";

export function createItemInfo(
  itemAnchor: HTMLAnchorElement,
  orderRow: HTMLTableRowElement,
  orderNumber: string,
  itemName: string
): ItemInfo {
  const imageElem = itemAnchor.children[0] as HTMLImageElement;
  const itemUrl = itemAnchor.href;
  const itemImgUrl = imageElem.src;
  const itemQty = getItemQty(orderRow);

  return {
    itemUrl,
    itemImgUrl,
    itemName,
    totalQty: itemQty,
    orders: [{ itemQty, orderNumber, orderRow }],
  };
}

export function addOrderToItem(
  item: ItemInfo,
  orderRow: HTMLTableRowElement,
  orderNumber: string
): void {
  const itemQty = getItemQty(orderRow);
  item.totalQty += itemQty;
  item.orders.push({ itemQty, orderNumber, orderRow });
}

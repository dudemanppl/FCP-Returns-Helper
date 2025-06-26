export function getItemName(itemAnchor: HTMLAnchorElement): string {
  const spanElem = itemAnchor.children[1] as HTMLSpanElement;
  const itemNameElem = spanElem.children[0] as HTMLDivElement;
  return itemNameElem.innerText;
}

export function getItemSuffix(itemAnchor: HTMLAnchorElement): string {
  const itemSuffixElem = itemAnchor.lastElementChild!
    .lastElementChild as HTMLDivElement;
  return itemSuffixElem.innerText.trim();
}

export function getItemQty(orderRow: HTMLTableRowElement): number {
  const qtyElem = orderRow.lastElementChild
    ?.lastElementChild as HTMLInputElement;
  if (!qtyElem) throw new Error("Missing quantity element");

  const max = qtyElem.getAttribute("max");
  if (!max) throw new Error("Missing max attribute on quantity input");

  return Number(max);
}

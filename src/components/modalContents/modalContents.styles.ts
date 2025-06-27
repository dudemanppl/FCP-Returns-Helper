export function styleTable(el: HTMLTableElement): void {
  Object.assign(el.style, {
    width: "100%",
    borderCollapse: "collapse",
  });
}

export function styleTableHeaderCell(el: HTMLTableCellElement): void {
  Object.assign(el.style, {
    textAlign: "left",
    padding: "0.5rem",
  });
}

export function styleTableCell(el: HTMLTableCellElement): void {
  Object.assign(el.style, {
    padding: "0.5rem",
  });
}

export function styleItemContainer(el: HTMLElement): void {
  Object.assign(el.style, {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
  });
}

export function styleItemLink(el: HTMLAnchorElement): void {
  Object.assign(el.style, {
    fontWeight: "bold",
    color: "#0070f3",
  });
}

export function styleItemSuffix(el: HTMLElement): void {
  Object.assign(el.style, {
    fontSize: "0.9rem",
    color: "#666",
  });
}

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

export function styleTextWrapper(): void {
  const style = document.createElement("style");
  style.textContent = `
    .text-wrapper {
      display: flex;
      flex-direction: column;
      align-items: start;
    }
  `;

  document.head.appendChild(style);
}

export function styleItemLink(): void {
  const style = document.createElement("style");
  style.textContent = `
    .item-link {
      font-weight: bold;
      color: rgb(0, 112, 243);
      white-space: nowrap;
    }
  `;

  document.head.appendChild(style);
}

export function styleItemSuffix(el: HTMLElement): void {
  Object.assign(el.style, {
    fontSize: "0.9rem",
    color: "#666",
  });
}

import type { ItemInfo } from "../../core/index.types.js";
import {
  styleTable,
  styleTableHeaderCell,
  styleTableCell,
  styleItemContainer,
  styleItemLink,
  styleItemSuffix,
} from "./modalContents.styles.js";

export class ModalContents {
  private items: Record<string, ItemInfo>;

  constructor(items: Record<string, ItemInfo>) {
    this.items = items;
  }

  render(): HTMLElement {
    const wrapper = document.createElement("div");

    const heading = document.createElement("h2");
    heading.textContent = "Returns Helper";
    wrapper.appendChild(heading);

    const table = document.createElement("table");
    styleTable(table);

    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");

    for (const text of ["Returning?", "Item", "Qty"]) {
      const th = document.createElement("th");
      th.textContent = text;
      styleTableHeaderCell(th);
      headerRow.appendChild(th);
    }

    thead.appendChild(headerRow);
    table.appendChild(thead);

    const tbody = document.createElement("tbody");

    for (const [suffix, item] of Object.entries(this.items)) {
      const row = document.createElement("tr");

      // Checkbox column
      const checkboxTd = document.createElement("td");
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkboxTd.appendChild(checkbox);
      styleTableCell(checkboxTd);
      row.appendChild(checkboxTd);

      // Item info column
      const itemTd = document.createElement("td");
      const container = document.createElement("div");
      styleItemContainer(container);

      const img = document.createElement("img");
      img.src = item.itemImgUrl;
      img.alt = item.itemName;
      img.width = 50;

      const textWrapper = document.createElement("div");

      const link = document.createElement("a");
      link.href = item.itemUrl;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.textContent = item.itemName;
      styleItemLink(link);

      const suffixEl = document.createElement("div");
      suffixEl.textContent = suffix;
      styleItemSuffix(suffixEl);

      textWrapper.appendChild(link);
      textWrapper.appendChild(suffixEl);
      container.appendChild(img);
      container.appendChild(textWrapper);
      itemTd.appendChild(container);
      styleTableCell(itemTd);
      row.appendChild(itemTd);

      // Quantity column
      const qtyTd = document.createElement("td");
      qtyTd.textContent = item.totalQty.toString();
      styleTableCell(qtyTd);
      row.appendChild(qtyTd);

      tbody.appendChild(row);
    }

    table.appendChild(tbody);
    wrapper.appendChild(table);

    return wrapper;
  }
}

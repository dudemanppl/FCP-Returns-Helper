import type { ItemInfo } from "../../core/index.types.js";

export class ModalContents {
  private items: Record<string, ItemInfo>;

  constructor(items: Record<string, ItemInfo>) {
    this.items = items;
  }

  render(): HTMLElement {
    const wrapper = document.createElement("div");

    const table = document.createElement("table");
    table.classList.add("retForm__table", "scroll");
    const thead = document.createElement("thead");
    thead.classList.add("return-table-header");
    const headerRow = document.createElement("tr");

    for (const text of ["Returning?", "Item", "Qty"]) {
      const th = document.createElement("th");
      th.textContent = text;
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
      row.appendChild(checkboxTd);

      // Item detail column
      const itemTd = document.createElement("td");
      const itemDetailContainer = document.createElement("div");
      itemDetailContainer.classList.add("item-detail-container");

      const img = document.createElement("img");
      img.src = item.itemImgUrl;
      img.alt = item.itemName;
      img.width = 100;

      const textWrapper = document.createElement("div");
      textWrapper.classList.add("text-wrapper");

      const link = document.createElement("a");
      link.href = item.itemUrl;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.textContent = item.itemName;
      link.classList.add("retForm__displayName");

      const suffixEl = document.createElement("div");
      suffixEl.textContent = suffix;
      suffixEl.classList.add("retForm__displaySuffix");

      textWrapper.appendChild(link);
      textWrapper.appendChild(suffixEl);
      itemDetailContainer.appendChild(img);
      itemDetailContainer.appendChild(textWrapper);
      itemTd.appendChild(itemDetailContainer);
      row.appendChild(itemTd);

      // Quantity column
      const qtyTd = document.createElement("td");
      qtyTd.textContent = item.totalQty.toString();
      row.appendChild(qtyTd);

      tbody.appendChild(row);
    }

    table.appendChild(tbody);
    wrapper.appendChild(table);

    return wrapper;
  }
}

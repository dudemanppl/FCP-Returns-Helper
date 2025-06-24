export interface OrderInfo {
  orderNumber: string;
  itemQty: number;
  orderRow: HTMLTableRowElement;
}

export interface ItemInfo {
  itemUrl: string;
  itemImgUrl: string;
  itemName: string;
  totalQty: number;
  orders: OrderInfo[];
}

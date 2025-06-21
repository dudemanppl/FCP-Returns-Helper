import type { OrderDetails } from "./index.types.ts";

const getReturnForm = (): HTMLUListElement | null => {
  const returnForm = document.getElementsByClassName(
    "retForm__list accordion"
  )[0] as HTMLUListElement | undefined;

  return returnForm ?? null;
};

const getPreviousOrders = (): HTMLCollectionOf<HTMLLIElement> | null => {
  const returnForm = getReturnForm();
  if (!returnForm) return null;

  return returnForm.children as HTMLCollectionOf<HTMLLIElement>;
};

const getOrderDetails = (
  orderTitleElement: HTMLAnchorElement
): OrderDetails | null => {
  const orderDetails = orderTitleElement.innerText;

  const separatorIndex = orderDetails.indexOf(" - ");
  const orderNumber = orderDetails.substring(6, separatorIndex);
  const orderDateString = orderDetails.substring(separatorIndex + 3);
  const orderDate = new Date(orderDateString);

  return { orderNumber, orderDate };
};

const parseOrder = (orderListItem: HTMLLIElement): OrderDetails | null => {
  const orderTitleElement =
    orderListItem.firstElementChild as HTMLAnchorElement | null;

  if (!orderTitleElement) return null;

  return getOrderDetails(orderTitleElement);
};

// parseOrder(getPreviousOrders()[0]);

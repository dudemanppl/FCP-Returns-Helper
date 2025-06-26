export function getElementByClass<T extends Element = Element>(
  className: string
): T {
  return document.getElementsByClassName(className)[0] as T;
}

export function getChildByIndex<T extends Element = Element>(
  parent: Element,
  index: number
): T {
  return parent.children[index] as T;
}

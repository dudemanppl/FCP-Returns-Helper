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

export function addButton(): void {
  const returnForm = document.querySelector(
    "body > div.main > div > div.retForm"
  ) as HTMLElement | null;

  if (!returnForm) {
    console.error("returnForm element not found");
    return;
  }

  styleReturnForm(returnForm);

  const button: HTMLButtonElement = document.createElement("button");
  button.type = "button";
  button.textContent = "Open Returns Helper";

  button.addEventListener("mouseenter", () => {
    button.style.opacity = "0.9";
  });
  button.addEventListener("mouseleave", () => {
    button.style.opacity = "1";
  });

  styleButton(button);

  returnForm.prepend(button);
}

function styleReturnForm(returnForm: HTMLElement): void {
  returnForm.style.display = "flex";
  returnForm.style.flexDirection = "column";
}

function styleButton(button: HTMLButtonElement): void {
  Object.assign(button.style, {
    alignSelf: "center",
    backgroundColor: "#38a4fe",
    border: "0",
    borderRadius: "2px",
    color: "#f7f8f9",
    cursor: "pointer",
    fontSize: ".95rem",
    fontWeight: "500",
    marginBottom: "1rem",
    maxHeight: "50px",
    padding: "1rem",
    textShadow: "1px 1px 1px rgba(0, 0, 0, 0.15)",
  });
}

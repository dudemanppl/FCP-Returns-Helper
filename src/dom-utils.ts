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

  styleButton(button);
  attachButtonEvents(button);

  returnForm.prepend(button);
  injectModal();
}

function attachButtonEvents(button: HTMLButtonElement): void {
  button.addEventListener("click", () => {
    toggleModal(true);
  });

  button.addEventListener("mouseenter", () => {
    button.style.opacity = "0.9";
  });

  button.addEventListener("mouseleave", () => {
    button.style.opacity = "1";
  });
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

export function injectModal(): void {
  const modalOverlay = document.createElement("div");
  modalOverlay.id = "returns-helper-modal";
  styleModalOverlay(modalOverlay);

  const modalBox = document.createElement("div");
  modalBox.tabIndex = -1;
  styleModalBox(modalBox);

  const closeBtn = document.createElement("button");
  closeBtn.textContent = "Close";
  closeBtn.type = "button";
  styleCloseButton(closeBtn);

  modalBox.innerHTML = `<h2>Returns Helper</h2><p>Put your content here</p>`;
  modalBox.appendChild(closeBtn);
  modalOverlay.appendChild(modalBox);
  document.body.appendChild(modalOverlay);

  attachModalEventListeners(modalOverlay, closeBtn);
}

function attachModalEventListeners(
  modalOverlay: HTMLElement,
  closeBtn: HTMLButtonElement
): void {
  closeBtn.addEventListener("click", () => toggleModal(false));

  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) toggleModal(false);
  });

  document.addEventListener("keydown", (e) => {
    const modal = document.getElementById("returns-helper-modal");
    const isVisible = modal?.style.display === "flex";
    if (!isVisible || !modal) return;

    if (e.key === "Escape") {
      toggleModal(false);
      return;
    }

    if (e.key === "Tab") {
      const focusable = modal.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (!first || !last) return;

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }
  });
}

function toggleModal(show: boolean): void {
  const modal = document.getElementById("returns-helper-modal");
  if (!modal) return;

  modal.style.display = show ? "flex" : "none";

  if (show) {
    const focusable = modal.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    if (first) setTimeout(() => first.focus(), 0); // give the DOM a moment
  }
}

function styleModalOverlay(el: HTMLElement): void {
  Object.assign(el.style, {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "none",
    justifyContent: "center",
    alignItems: "center",
    zIndex: "10000",
  });
}

function styleModalBox(el: HTMLElement): void {
  Object.assign(el.style, {
    backgroundColor: "white",
    padding: "2rem",
    borderRadius: "4px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
    maxWidth: "500px",
    width: "90%",
    textAlign: "center",
    outline: "none",
  });
}

function styleCloseButton(el: HTMLButtonElement): void {
  Object.assign(el.style, {
    marginTop: "1rem",
    padding: "0.5rem 1rem",
    backgroundColor: "#ccc",
    border: "none",
    borderRadius: "2px",
    cursor: "pointer",
  });
}

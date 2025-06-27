export function styleModalOverlay(el: HTMLElement): void {
  Object.assign(el.style, {
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "none",
    height: "100vh",
    justifyContent: "center",
    left: "0",
    position: "fixed",
    top: "0",
    width: "100vw",
    zIndex: "10000",
  });
}

export function styleModalBox(el: HTMLElement): void {
  Object.assign(el.style, {
    backgroundColor: "white",
    borderRadius: "4px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
    maxHeight: "90vh",
    maxWidth: "600px",
    outline: "none",
    overflowY: "auto",
    padding: "2rem",
    position: "relative",
    textAlign: "center",
    width: "90%",
  });
}

export function styleCloseButton(): void {
  const style = document.createElement("style");
  style.textContent = `
    .returns-modal-close {
      position: absolute;
      top: 0.5rem;
      right: 0.5rem;
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
      background-color: #aaa;
      border: none;
      font-size: 1.25rem;
      font-weight: bold;
      color: #fff;
      cursor: pointer;
      line-height: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0;
    }
  
    .returns-modal-close:hover,
    .returns-modal-close:focus {
      background-color: #bbb;
    }
  `;

  document.head.appendChild(style);
}

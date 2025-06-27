export function styleModalOverlay(el: HTMLElement): void {
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

export function styleModalBox(el: HTMLElement): void {
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

export function styleCloseButton(el: HTMLButtonElement): void {
  Object.assign(el.style, {
    marginTop: "1rem",
    padding: "0.5rem 1rem",
    backgroundColor: "#ccc",
    border: "none",
    borderRadius: "2px",
    cursor: "pointer",
  });
}

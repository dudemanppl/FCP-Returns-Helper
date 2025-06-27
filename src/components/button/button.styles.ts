export function styleButton(button: HTMLButtonElement): void {
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

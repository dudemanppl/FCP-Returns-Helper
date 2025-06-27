export function applyStyles(): void {
  const style = document.createElement("style");
  style.textContent = `
        .primaryButton.returns-button {
            margin-bottom: 10px;
            align-self: center;
            width: unset;
        }

        #returns-helper-modal {
            align-items: center;
            background-color: rgba(0, 0, 0, 0.5);
            display: flex;
            height: 100vh;
            justify-content: center;
            position: fixed;
            top: 0px;
            width: 100vw;
            z-index: 10000;        
        }

        .modal-box {
            background-color: white;
            border-radius: 4px;
            box-shadow: rgba(0, 0, 0, 0.3) 0px 2px 10px;
            max-height: 90vh;
            outline: none;
            overflow-y: auto;
            padding: 2rem;
            position: relative;
            text-align: center;
        }

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
        }

        .returns-modal-close:hover,
        .returns-modal-close:focus {
            background-color: #bbb;
        }

        #returns-helper-modal *::-webkit-scrollbar {
            display: none;
        }
    `;

  document.head.appendChild(style);
}

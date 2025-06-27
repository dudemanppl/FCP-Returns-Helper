export function applyStyles(): void {
  const style = document.createElement("style");
  style.textContent = `
        .primaryButton.returns-button {
            align-self: center;
            margin-bottom: 10px;
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
            background-color: #aaa;
            border-radius: 50%;
            border: none;
            color: #fff;
            cursor: pointer;
            font-size: 1.25rem;
            font-weight: bold;
            height: 2rem;
            position: absolute;
            right: 0.5rem;
            top: 0.5rem;
            width: 2rem;
        }

        .returns-modal-close:hover,
        .returns-modal-close:focus {
            background-color: #bbb;
        }

        #returns-helper-modal *::-webkit-scrollbar {
            display: none;
        }

        .text-wrapper {
            align-items: start;
            display: flex;
            flex-direction: column;
        }

        .item-link {
            font-weight: bold;
            white-space: nowrap;
        }

        .item-detail-container {
            align-items: center;
            display: flex;
            gap: 1rem;
            height: 100px;
        }
    `;

  document.head.appendChild(style);
}

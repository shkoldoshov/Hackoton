class ModalComponent {
  constructor() {
    this.createModal();
    this.attachEvents();
  }

  createModal() {
    this.backdrop = document.createElement("div");
    this.backdrop.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        backdrop-filter: blur(5px);
        background-color: rgba(0, 0, 0, 0.5);
        display: none;
        align-items: center;
        justify-content: center;
        z-index: 1000;
      `;

    this.modal = document.createElement("div");
    this.modal.style.cssText = `
        background-color: white;
        padding: 20px;
        border-radius: 5px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        width: 50%;
        min-width: 300px;
      `;

    this.modal.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center;">
            <h2>Title</h2>
            <button class="close" style="cursor: pointer;">X</button>
        </div>
        <div class="modal-content" style="margin-top: 20px;">
            <!-- Динамическое содержимое модального окна -->
        </div>
      `;
    this.backdrop.append(this.modal);
    document.body.append(this.backdrop);
  }

  attachEvents() {
    this.backdrop.addEventListener("click", () => this.hide());
    this.modal.addEventListener("click", (e) => e.stopPropagation());
    this.modal
      .querySelector(".close")
      .addEventListener("click", () => this.hide());
  }

  show(contentHtml) {
    this.modal.querySelector(".modal-content").innerHTML = contentHtml;
    this.backdrop.style.display = "flex";
  }

  hide() {
    this.backdrop.style.display = "none";
  }
}

const modalComponent = new ModalComponent();

document.querySelector(".buy").addEventListener("click", () => {
  const contentHtml = `
  <input type="text" type="text" placeholder="Enter your message">
  <input type="number" type="number" placeholder="Enter your number">
  <button class="apply" type="submit" style="width: 100px;">Apply</button>
    `;
  modalComponent.show(contentHtml);
});

const form = document.querySelector(".buy");
const message = document.querySelector(".text");
const tel = document.querySelector(".number");

const BOT = {
  TOKEN: "7171000762:AAFwQV7lYUpPtEANyQADIgks90E7ApcY1iU",
  chatID: "-4152550247",
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!message.value && !tel.value) {
    inputGroup.classList.add("hide-content");
    modalGreeting.classList.add("show-content");
    modalGreeting.innerHTML = `<p>Inputs are empty</p>`;
  } else if (!message.value || !tel.value) {
    inputGroup.classList.add("hide-content");
    modalGreeting.classList.add("show-content");
    modalGreeting.innerHTML = `<p>One input is empty</p>`;
  }
  if (message.value && tel.value) {
    const messageForTg = `Message: ${message.value}, Number:${tel.value}`;
    fetch(`https://api.telegram.org${BOT.TOKEN}/botsendMessage?chat_id=${BOT.chatID}&text=${messageForTg}`)
      .then((res) => res.json())
      .then((res) => {
        if (res.ok) {
          apply.addEventListener("click", () => {
            inputGroup.classList.add("hide-content");
            modalGreeting.classList.add("show-content");
            modalGreeting.innerHTML = `<p>Thank you for applying, I will call you back</p>`;

            timeout = setTimeout(() => {
              removeModalClasses();
              removeContentClasses();
            }, 5000);
          });
        } else {
          throw new Error(res.description);
        }
      })
      .catch((error) => {
        inputGroup.classList.add("hide-content");
        modalGreeting.classList.add("show-content");
        modalGreeting.innerHTML = `<p>Please check your Internet connection</p>`;
      });
  }
});

const Hospital = {};
Hospital.Client = {};
const { Client } = Hospital;
Client.Ui = {};
Client.State = {};

Client.State.currentContainerId = 0
Client.State.isModalActive = false;

Client.Ui.addElement = (element, dest) => {
  document.querySelector(dest).innerHTML += element;
}

Client.Ui.generateModal = (content, title, ref = "main") => {
  const uuid = "a" + uuidv4();
  let codeModal = `<div class="modal ${uuid}">`;
  codeModal += '<div class="modal__head">';
  codeModal += `<div class="modal__title">${title}</div>`;
  codeModal += `<button class="modal__close" onclick="Hospital.Client.Ui.closeModal('${uuid}')" >X</button>`;
  codeModal += '</div>';
  codeModal += '<div class="modal__body">';
  codeModal += content;
  codeModal += '</div>'
  codeModal += "</div>";
  Client.Ui.addElement(codeModal, "main");
  Client.Ui.addElement(`<button onclick="Hospital.Client.Ui.openModal('${uuid}')">abrir modal</button>`, ref);
  console.log(uuid);
};

const uuidv4 = () => crypto.randomUUID();

Client.Ui.openModal = (classNameUUID) => {
  if (Client.State.isModalActive) return false;
  Client.State.isModalActive = true;
  const modal = document.querySelector(`.${classNameUUID}`);
  modal.classList.add('modal--active');
}

Client.Ui.closeModal = (classNameUUID) => {
  Client.State.isModalActive = false;
  const modal = document.querySelector(`.${classNameUUID}`);
  modal.classList.remove('modal--active');
}

Client.Ui.updateModal = (content, classNameUUID) => {
  document.querySelector(`.${classNameUUID} .modal__body`).innerHTML = content;
}

Client.Ui.ElementHTML = ({
  parent = "body",
  tag = "div",
  content = "",
  className = "container",
  event = "",
  handler = "",
}) => {
  return `<${tag} class="${className}" ${event}="${handler}">${content}</${tag}>`;
}

Client.Ui.Container = (content) => Client.Ui.ElementHTML({ tag: "div", content });

Client.Ui.Layout = () => {
  const hijo = Client.Ui.Container("hijo")
  const containerParent = Client.Ui.Container(hijo)
  Client.Ui.addElement(containerParent, "main")
}

Client.Ui.CreateButton = (content, handler) => Client.Ui.ElementHTML({ tag: "button", content, event: "onclick", handler });

const enviarFomrulario = () => {
  console.log("logica")
}

Client.Ui.initLayout = () => {
  document.addEventListener("DOMContentLoaded", () => {
      const btnEnviar = Client.Ui.CreateButton("Enviar", "enviarFomrulario()");
      Client.Ui.Layout()
      Client.Ui.addElement(btnEnviar, "main")
  })
}

Client.Ui.initLayout()

// const imgURL = "https://images.unsplash.com/photo-1786352260444-20539d92fee0?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

// Client.Ui.addLayout("left", "main");
// Client.Ui.addLayout("bottom verde-oscuro", ".c-0",);
// Client.Ui.addLayoutContainer("loquequiera verde", "col-16-24", ".c-1", "top-right");
// Client.Ui.addLayoutContainer("leti azul-oscuro", "col-8-24", ".c-0", "bottom-right");
// Client.Ui.addElement(`<img src=${imgURL}>`, ".loquequiera");
// Hospital.Client.Ui.addElement("<h1>Leti es la mejor todo junto y con mayuscula</h1>", ".leti");
// Hospital.Client.Ui.addElement("<h1>Leti es la mejor todo junto y con mayuscula</h1>", ".c-1");

const { Ui } = Client
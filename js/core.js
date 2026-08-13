const Hospital = {};
Hospital.Client = {};
const { Client } = Hospital;
Client.Ui = {};
Client.State = {};

Client.State.isModalActive = false;

Client.Ui.addElement = (element, dest) => {
  document.querySelector(dest).innerHTML += element;
}

Client.Ui.generateModal = (content, title, ref="main") => {
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

Client.Ui.updateModal = (conten,classNameUUID) => {
  document.querySelector(`.${classNameUUID} .modal__body`).innerHTML = conten;
}
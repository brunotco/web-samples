// Fix this types
let modalContainer: any;
let title: any;
let body: any;

addModal();

function openModal(modalTitle: string, modalBody: string) {
    title.textContent = modalTitle;
    body.textContent = modalBody;
    modalContainer.classList.add('active');
};

function closeModal() {
    modalContainer.classList.remove('active');
}

function addModal() {
    createModalContainer();
    document.body.append(modalContainer);
};

function createModalContainer() {
    modalContainer = document.createElement('div');
    const modal = document.createElement('div');
    const header = document.createElement('div');
    title = document.createElement('div');
    const close = document.createElement('button');
    body = document.createElement('div');
    const overlay = document.createElement('div');

    modalContainer.classList.add('modal-container');
    modal.classList.add('modal');
    header.classList.add('modal-header');
    title.classList.add('modal-title');
    close.classList.add('modal-close');
    body.classList.add('modal-body');
    overlay.classList.add('modal-overlay');

    modalContainer.setAttribute('modal-container', '');
    close.textContent = '\u2715';
    close.addEventListener('click', () => closeModal());
    overlay.addEventListener('click', () => closeModal())

    header.append(title, close);
    modal.append(header, body);
    modalContainer.append(modal, overlay);
};

// Dialog

// let dialog;

// appendDialog();

// function appendDialog() {
//     createDialog();
//     document.body.append(dialog);
// };

// function createDialog() {
//     dialog = document.createElement('dialog');
//     const header = document.createElement('div');
//     const title = document.createElement('div');
//     const close = document.createElement('button');
//     const body = document.createElement('div');

//     dialog.classList.add('modal');
//     dialog.setAttribute('modal-dialog', '');
//     header.classList.add('modal-header');
//     title.classList.add('modal-title');
//     close.classList.add('modal-close');
//     close.textContent = '\u2715';
//     close.addEventListener('click', () => dialog.close());
//     body.classList.add('modal-body');

//     header.append(title, close);
//     dialog.append(header, body);
// };

// function openDialog(modalTitle, modalBody) {
//     fillDialog(modalTitle, modalBody);
//     dialog.showModal();
// };

// function fillDialog(modalTitle, modalBody) {
//     const header = [...dialog.children].find(child => child.classList.contains('modal-header'));
//     const title = [...header.children].find(child => child.classList.contains('modal-title'));
//     title.textContent = modalTitle;
//     const body = [...dialog.children].find(child => child.classList.contains('modal-body'));
//     body.textContent = modalBody;
// };
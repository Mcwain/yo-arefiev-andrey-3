let modalCloseBtn = document.querySelector ('.modal__wrap-closeBtn_js');
let modalOpenBtn = document.querySelector ('.footer__button-js');
let modal = document.querySelector ('.modal_js');
let modalCloseBackground = document.querySelector ('.modal__background_js');

modalOpenBtn.addEventListener('click', ()=> {
    modal.classList.remove('hidden');
})

modalCloseBtn.addEventListener('click', ()=> {
    modal.classList.add('hidden');
})

window.addEventListener('keydown', (e) => {
    if (e.keyCode === 27) {
        modal.classList.add('hidden');
    }
})

modalCloseBackground.addEventListener('click', ()=> {
    modal.classList.add('hidden');
})
let popupCloseBtn = document.querySelector ('.popup__closeBtn_js');
let popupOpenBtn = document.querySelector ('.banner__wrap-btn_js');
let popup = document.querySelector ('.popup_js');
let popupCloseBackground = document.querySelector ('.popup__background_js');

popupOpenBtn.addEventListener('click', ()=> {
    popup.classList.remove('hidden');
})

popupCloseBtn.addEventListener('click', ()=> {
    popup.classList.add('hidden');
})

window.addEventListener('keydown', (e) => {
    if (e.keyCode === 27) {
        popup.classList.add('hidden');
    }
})

popupCloseBackground.addEventListener('click', ()=> {
    popup.classList.add('hidden');
})






let modalWindowCloseBtn = document.querySelector ('.modalWindow__closeBtn_js');
let modalWindowOpenBtn = document.querySelector ('.banner__wrap_btn-js');
let modalWindow = document.querySelector ('.modalWindow_js');
let modalWindowCloseBackground = document.querySelector ('.modalWindow__background_js');

modalWindowOpenBtn.addEventListener('click', ()=> {
    modalWindow.classList.remove('hidden')
})

modalWindowCloseBtn.addEventListener('click', ()=> {
    modalWindow.classList.add('hidden');
})

window.addEventListener('keydown', (e) => {
    if (e.keyCode === 27) {
        modalWindow.classList.add('hidden');
    }
})

modalWindowCloseBackground.addEventListener('click', ()=> {
    modalWindow.classList.add('hidden');
})

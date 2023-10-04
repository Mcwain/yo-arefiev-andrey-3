

(function () {
    const popupCloseBtn = document.querySelector ('.popup__closeBtn_js');
    const popupOpenBtn = document.querySelector ('.header__btn_js');
    const popup = document.querySelector ('.popup_js');
    const popupCloseBackground = document.querySelector ('.popup__background_js');
    const formLogin = document.forms.formSignIn;

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

    formLogin.addEventListener('submit', (e) => {
        e.preventDefault(e);

    let data = {};

    data.email = formLogin.elements.email.value;
    data.password = formLogin.elements.password.value;

    sendRequest({
        method: 'POST',
        url: 'api/users/login',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(async res => {
        const response = await res.json();
        if (response.success) {
            alert('Здравствуйте!');
            console.log(res);
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('userId', response.data.userId);
            interectionModal(formLogin);
            setTimeout(() => {
                location.pathname = '/source/views/profile.html';
            }, 2000);
        } else {
            throw response;
        }
    })
    .catch((err) => {
        if(err._message) {
            alert(err._message)
        }
    })
})
})();



(function () {
const modalWindowCloseBtn = document.querySelector ('.modalWindow__closeBtn_js');
const modalWindowOpenBtn = document.querySelector ('.header__nav_js');
const modalWindow = document.querySelector ('.modalWindow_js');
const loader = document.querySelector ('.modalWindow__wrap-loader_js')
const modalWindowCloseBackground = document.querySelector ('.modalWindow__background_js');
const formRegister = document.forms.register;


modalWindowOpenBtn.addEventListener('click', ()=> {
    modalWindow.classList.remove('hidden');
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

formRegister.addEventListener('submit', (e) => {
    e.preventDefault(e);
    loader.classList.remove('hidden');
    let data = {};

    data.email = formRegister.elements.email.value;
    data.name = formRegister.elements.name.value;
    data.surname = formRegister.elements.surname.value;
    data.password = formRegister.elements.password.value;
    data.location = formRegister.elements.location.value;
    data.age = formRegister.elements.age.value;

    sendRequest({
        method: 'POST',
        url: 'api/users',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(async res => {
        const response = await res.json();
        if (response.success) {
            alert('Пользователь успешно создан' + response.data.id + ':' + response.data.email);
        } else {
            throw response;
        }
    })
    .catch((err) => {
        if(err?._message) {
            alert(err._message)
        }
    })
    .finally(() => {
        loader.classList.add('hidden')
        interectionModal(modalWindow);
    })
    
})

})();

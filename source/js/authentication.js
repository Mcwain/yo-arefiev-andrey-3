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
        e.preventDefault();

        let data = {};

        data.email = formLogin.elements.email.value;
        data.password = formLogin.elements.password.value;

        sendRequest ({
            method: 'POST',
            url: '/api/users/login',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(async res => {
            const response = await res.json();
            if (response.success) {
                alert('you have successfully logged in!');
                console.log(res);
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('userId', response.data.userId);
                interectionModal(popup);
                setTimeout(() => {
                    location.pathname = '/profile.html';
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

const BASE_SERVER_PATH = 'https://academy.directlinedev.com/';

const mainLoader = document.querySelector('.main-loader_js');

// Функция для работы с запросами из формы
(function() {
    const form = document.forms.filter;
    form.addEventListener('submit', (e) => {
        e.preventDefault();
    })

    let reqTags = new XMLHttpRequest();

    reqTags.open('GET', BASE_SERVER_PATH + 'api/posts');
    reqTags.setRequestHeader('Content-Type', 'application/json');
    mainLoader.classList.remove('hidden')
    reqTags.send();
    reqTags.onload = () => {
        mainLoader.classList.add('hidden')
        const tags = JSON.parse(reqTags.response).data
        console.log(tags)
    }
    reqTags.onerror = () => {
        mainLoader.classList.remove('hidden')
        console.log('error')
    }
})();
(function () {
    const modalLogin = document.querySelector('.popup_js');
    const btnLoginModalOpen = document.querySelector('.header__btn_js');
    const btnLoginModalClose = document.querySelector('.popup__closeBtn_js');
    const loginForm = document.forms.formSignIn;


    loginForm.addEventListener('submit', (e) => {
        e.preventDefault(e);

        let data = {};

        data.email = loginForm.elements.email.value;
        data.password = loginForm.elements.password.value;

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
                alert('Вы успешно вошли!');
                console.log(res);
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('userId', response.data.userId);
                interectionModal(modalLogin);
                setTimeout(() => {
                    location.pathname = '12/profile/';
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
    const modal = document.querySelector('.modalWindow_js');
    const loader = document.querySelector('.modalWindow__wrap-loader_js');
    const regForm = document.forms.register;



    regForm.addEventListener('submit', (e) => {
        e.preventDefault(e);
        loader.classList.remove('hidden');
        let data = {};

        data.email = regForm.elements.email.value;
        data.name = regForm.elements.name.value;
        data.surname = regForm.elements.surname.value;
        data.password = regForm.elements.password.value;
        data.location = regForm.elements.location.value;
        data.age = regForm.elements.age.value;

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
            interectionModal(modal);
        })
        
    })
})()
(function () {
    const modalLogin = document.querySelector('.popup popup_js');
    const btnLoginModalOpen = document.querySelector('.j-login-button');
    const btnLoginModalClose = document.querySelector('.j-close-modal-login');
    const loginForm = document.forms.loginForm;

    btnLoginModalOpen.addEventListener('click', () => {
        interectionModal(modalLogin)
    })

    btnLoginModalClose.addEventListener('click', () => {
        interectionModal(modalLogin)
    })

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
    const openModalBtn = document.querySelector('.j-register-button');
    const modal = document.querySelector('.j-modal-register');
    const closeModalBtn = document.querySelector('.j-close-modal-register');
    const loader = document.querySelector('.loader_js');
    const regForm = document.forms.registerForm;



    regForm.addEventListener('submit', (e) => {
        e.preventDefault(e);
        loader.classList.remove('hidden');
        let data = {};

        data.email = registerForm.elements.email.value;
        data.name = registerForm.elements.name.value;
        data.surname = registerForm.elements.surname.value;
        data.password = registerForm.elements.password.value;
        data.location = registerForm.elements.location.value;
        data.age = registerForm.elements.age.value;

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
    openModalBtn.addEventListener('click', () => {
        interectionModal(modal)
    })

    closeModalBtn.addEventListener('click', () => {
        interectionModal(modal)
    })
})()
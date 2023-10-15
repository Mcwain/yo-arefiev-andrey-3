(function () {
    const openModalBtn = document.querySelector ('.header__nav_js');
    const modal = document.querySelector ('.modalWindow_js');
    const closeModalBtn = document.querySelector ('.modalWindow__closeBtn_js');
    const loader = document.querySelector ('.modalWindow__wrap-loader_js');
    const modalWindowCloseBackground = document.querySelector ('.modalWindow__background_js');
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
                alert('User successfully created!' + response.data.id + ':' + response.data.email);
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

    window.addEventListener('keydown', (e) => {
        if (e.keyCode === 27) {
            modalWindow.classList.add('hidden');
        }
    })
    
    modalWindowCloseBackground.addEventListener('click', ()=> {
        modalWindow.classList.add('hidden');
    })
})()
(function() {
    const formRegister = document.forms.register;
    if(!formRegister) return;

    formRegister.addEventListener('submit', (e) => {
        e.preventDefault();

        const userEmail = formRegister.elements.email;
        const userName = formRegister.elements.name;
        const userSurname = formRegister.elements.surname;
        const userRepeat = formRegister.elements.repeat;
        const userPassword = formRegister.elements.password;
        const userLocation = formRegister.elements.location;
        const userAge = formRegister.elements.age;



        const data = {
            email: userEmail.value,
            password: userPassword.value,
            surname: userSurname.value,
            name: userName.value,
            repeat: userRepeat.value,
            location: userLocation.value,
            age: userAge.value,
        }
        console.log(data)
    })
})()

(function() {
    const formSignIn = document.forms.formSignIn;
    if(!formSignIn) return;

    formSignIn.addEventListener('submit', (e) => {
        e.preventDefault();

        const userEmail = formSignIn.elements.email;
        const userPassword = formSignIn.elements.password;

        const data = {
            email: userEmail.value,
            password: userPassword.value,
        }
        console.log(data)
    })
})()


(function() {
    const formData = document.forms.formData;
    if(!formData) return;

    formData.addEventListener('submit', (e) => {
        e.preventDefault();

        const userEmail = formData.elements.email;
        const userName = formData.elements.name;
        const userSurname = formData.elements.surname;
        const userLocation = formData.elements.location;
        const userAge = formData.elements.age;
        const userImage = formData.elements.image;


        const data = {
            email: userEmail.value,
            surname: userSurname.value,
            name: userName.value,
            location: userLocation.value,
            age: userAge.value,
            image: userImage.value,
        }
        console.log(data)
    })
})()

(function() {
    const formignIn = document.forms.formSignIn;
    if(!formignIn) return;

    formignIn.addEventListener('submit', (e) => {
        e.preventDefault();

        const userEmail = formignIn.elements.email;
        const userPassword = formignIn.elements.password;

        const data = {
            email: userEmail.value,
            password: userPassword.value,
        }
        console.log(data)
    })
})()


(function() {
    const formMessage = document.forms.message;
    if(!formMessage) return;

    formMessage.addEventListener('submit', (e) => {
        e.preventDefault();

        const userEmail = formMessage.elements.email;
        const userName = formMessage.elements.name;
        const userSubject = formMessage.elements.subject;
        const userPhone = formMessage.elements.phone;
        const userMessage = formMessage.elements.message;

        const data = {
            email: userEmail.value,
            name: userName.value,
            subject: userSubject.value,
            phone: userPhone.value,
            message: userMessage.value,
        }
        console.log(data)
    })
})()


(function() {
    const formPass = document.forms.formPass;
    if(!formPass) return;

    formPass.addEventListener('submit', (e) => {
        e.preventDefault();

        const userOldPass = formPass.elements.oldPass;
        const userNewPass = formPass.elements.newPass;
        const userRepeatPass = formPass.elements.repeatPass;

        const data = {
            email: userOldPass.value,
            name: userNewPass.value,
            subject: userRepeatPass.value,
        }
        console.log(data)
    })
})()


function getAll(form) {
    const inputs = form.querySelectorAll('input');
    const textareas = form.querySelectorAll('textarea');
    let result = {};
    for(let input of inputs) {
        switch (input.type) {
            case 'radio': {
                if(input.checked) {
                    result[input.name] = input.value;
                }
                break;
            }
            case 'checkbox': {
                if(!result[input.name]) result[input.name] = [];

                if(input.checked) result[input.name].push(input.value);
                break;
            }
            case 'file': {
                result[input.name] = input.files;
                break;
            }
            default: {
                result[input.name] = input.value;
            }
        }
    }
    for(let textarea of textareas) {
        result[textarea.name] = textarea.value;
    }

    return result;
}

function isEmailCorrect(email) {
    return email.match(/^[0-9a-z-\.]+\@[0-9a-z-]{2,}\.[a-z]{2,}$/i);
}



function setError(input, messageError) {
    if(input[0]) {
        setErrorChecked(input, messageError)
    } else {
        setErrorText(input, messageError)
    }
}

function setErrorChecked(inputs, messageError) {
    const error = errorCreator(messageError);
    inputs[0].parentElement.parentElement.insertAdjacentElement('afterend', error);
    function handler() {
        error.remove();
        for(let input of [...inputs]) {
            input.removeEventListener('input', handler);

            input.classList.remove('is-invalid');
        }
    }
    for(let input of [...inputs]) {
        input.classList.add('is-invalid');

        input.addEventListener('input', handler)
    }
}

function setErrorText(input, messageError) {
    const error = errorCreator(messageError);
    input.classList.add('is-invalid')
    input.insertAdjacentElement('afterend', error);
    input.addEventListener('input', () => {
        error.remove()
        input.classList.remove('is-invalid')
    }, {once: true}); // выполнение события один раз
}

function errorCreator(message) {
    let messageError = document.createElement('div')
    messageError.classList.add('invalid-feedback');
    messageError.innerText = message;
    return messageError;
}

(function() {
    const form = document.forms.register;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const errorsOldMessage = document.querySelectorAll('.invalid-feedback');

        for (let error of errorsOldMessage) error.remove();

        const userData = getAll(form);

        let errors = {}

        if(!userData.accept) errors.accept = 'Пожалуйста выберите пункт';

        if(!isEmailCorrect(userData.email)) errors.email = 'Пожалуйста введите корректный e-mail';

        if(userData.password.lenght < 8) errors.password = 'Пароль слишком короткий';

        if(Object.keys(errors).length) {
            Object.keys(errors).forEach((key) => {
                setError(form.element[key], errors[key])
            })
            return;
        }
        const data = {
            email: userData.email,
            password: userData.password,
            name: userData.name,
            accept: userData.accept,
            avatar: userData.avatar,
        }
        console.log(data)
    })
})

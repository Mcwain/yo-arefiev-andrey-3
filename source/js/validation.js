

// Вход
(function() {
    // форма входа
    const signInForm = document.forms.formSignIn;

    signInForm.addEventListener('submit', (e) => {
        e.preventDefault();
    
    // елементы формы
    const email = signInForm.elements.email;
    const password = signInForm.elements.password;

     // переменнуя в которой будут все элементы с классом invalid-feedback.
    const errors = document.querySelectorAll('.invalid-feedback');
    //условие, для удаления ошибок.
    if (errors) {
        for (error of errors) {
            error.remove();
        }
    }

    let error = {};

    if(!isEmailValid(email.value)) {
        error.email = 'Incorrect email';
    }

    if(password.value.length < 6) {
        error.password = 'Too short password';
    }

    if(Object.keys(error).length) {
        Object.keys(error).forEach((key) => {
            const messageError = error[key];
            const input = signInForm.elements[key];
            setError(input, messageError); 
        })
        return;
    }

    const data = {
        email: email.value,
        password: password.value,
    }
    console.log(data);
    })
})();



// Регистрация
(function() {
    // форма регистрации
    const registerForm = document.forms.registerForm;

    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // елементы формы
        const email = registerForm.elements.email;
        const name = registerForm.elements.name;
        const surname = registerForm.elements.surmane;
        const password = registerForm.elements.password;
        const repeat = registerForm.elements.repeat;
        const location = registerForm.elements.location;
        const age = registerForm.elements.age;
        const accept = [...registerForm.elements.accept].find( item => item.checked);
        let error = {};

 // переменнуя в которой будут все элементы с классом invalid-feedback.
    const errors = document.querySelectorAll('.invalid-feedback');
    if (errors) {
        //условие, для удаления ошибок.
        for (let error of errors) {
            error.remove();
        }
    }


    if(!accept) {
        error.accept = 'accept the agreement.';
    }
    
    if(!isEmailValid(email.value)) {
        error.email = 'Incorrect email';
    }

    if(name.value.length < 2) {
        error.name = 'Enter your name';
    }

    if(surname.value.length < 2) {
        error.surname = 'Enter your surname';
    }

    if(password.value.length < 6) {
        error.password = 'Too short password';
    }

    if (password !== repeat) {
        error.repeat = 'Password mismatch';
    }

    if(Object.keys(error).length) {

        Object.keys(error).forEach((key) => {
            const messageError = error[key];
            const input = signUpForm.elements[key];
            setError(input, messageError);
        })
        return;
    }

    const data = {
        email: email.value,
        name: name.value,
        surname: surname.value,
        password: password.value,    
        accept: accept.value,
        repeat: repeat.value,
        location: location.value,
        age: age.value,
    }
    console.log(data);
    })
})();

// функция распределитель.
function setError(input, messageError) {
    if(input[0]) {
        setErrorChecked(input, messageError);
    } else {
        setErrorText(input, messageError);
    }
}

// фукнция которая работает с  чекбоксами.
function setErrorChecked(inputs, errorMessage) {
    const error = errorCreator(errorMessage);
    inputs[0].parentElement.parentElement.insertAdjacentElement('afterend', error);
    
    for(let input of [...inputs]) {
        input.classList.add('is-invalid');
        function handler() {
            error.remove();
            for(let input of [...inputs]) {
                input.removeEventListener('input', handler);
                input.classList.remove('is-invalid');
            }
        }
        for(let input of [...inputs]) {
            input.classList.add('is-invalid');
            input.addEventListener('input', handler);
        }
    }
}

// функция, работающая с инпутами, которые содержат текст
function setErrorText(input, errorMessage) {
    const error = errorCreator(errorMessage);
    input.classList.add('is-invalid');
    input.insertAdjacentElement('afterend', error);
    
    input.addEventListener('input', function() {
        error.remove();
        input.classList.remove('is-invalid');
    }, {once: true});
}

// функция на создание контейнера с ошибками
function errorCreator(message) {
    let messageError = document.createElement('div');
    messageError.classList.add('invalid-feedback');
    messageError.innerText = message;
    return messageError;
}

// проверка регулярного выражения
function isEmailValid(email) {
    return email.match(/^[0-9a-z-\.]+\@[0-9a-z-]{2,}\.[a-z]{2,}$/i);
}
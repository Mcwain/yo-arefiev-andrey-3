const BASE_SERVER_PATH = 'https://academy.directlinedev.com/';

function interectionModal(modal) {
    modal.classList.toggle('hidden');
}

function sendRequest({url, method = 'GET', headers, body = null}) {
    return fetch(BASE_SERVER_PATH + url, {
        method,
        headers,
        body,
    })
}

function setErrorChecked(inputs, errorMessage) {
    const error = errorCreated(errorMessage);
    inputs[0].parentElement.parentElement
    .insertAdjacentElement('afterend', error)
    function handler() {
        error.remove()
        for (let input of [...inputs]) {
            input.removeEventListener('input', handler)
            input.classList.remove('is-invalid');
        }
    }
    for(let input of [...inputs]) {
        input.classList.add('is-invalid');

        input.addEventListener('input', handler, {once: true})
    }
}

function setError(input, messageError) {
    if(input[0]) {
        setErrorChecked(input, messageError);
    } else {
        setErrorText(input, messageError);
    }
}

function setErrorText(input, messageError) {
    const error = errorCreated(messageError);
    input.classList.add('is-invalid')
    input[0].insertAdjacentElement('afterend', error)
    input.addEventListener('input', function() {
        error.remove();
        input.classList.remove('is-invalid');
    }, {once: true})
}

function errorCreated(message) {
    let messageError = document.createElement('div')
    messageError.classList.add('invalid-feedback')
    messageError.classList.add('invalid-feedback_js')
    messageError.innerText = message;
    return messageError;
}

function errorFormHandler(errors, form) {
    if(Object.keys(errors).length) {
        Object.keys(errors).forEach(key => {
            const messageError = errors[key];
            const input = form.element[key];
            setError(input, messageError)
        })
        return;
    }
}

function clearErrors(element) {
    const message = element.querySelectorAll('.invalid-feedback_js')
    const invalids = element.querySelectorAll('.is-invalid')
    message.forEach(message => message.remove())
    invalids.forEach(invalid => invalid.classList.remove('is-invalid'))
}
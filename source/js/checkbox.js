const BASE_URL = 'https://academy.directlinedev.com';

const createCheckbox = (check) => {
    return `
    <label class="options__form-CheckboxTags">
        <input class="options__form-inputTags" id="${check.id}" type="checkbox">
        <span class="options__form-spanTags" style="border-color: ${check.color}"></span>
    </label>
    `
}

const renderCheckbox = (data) => {
    for (let check of data) {
        document.querySelector('.options__form-wrapper').insertAdjacentHTML('beforeend', createCheckbox(check))
    }
}

(async function() {
    sendReq({
        url: '/api/tags',
        headers: {'Content-Type': 'application/json'}
    })
    .then(res => {
        if (res.ok) {
            return res.json();
        }
    })
    .then(res => {
        console.log(res);
        renderCheckbox(res.data);
    })
    .catch(err => {
        if (err._message) {
            // Todo Вызов окна под ошибку.
        }
    })
})();

function sendReq({url, method = 'GET', headers, body = null}) {
    return fetch(BASE_URL + url, {
        method,
        headers,
        body
    });
}


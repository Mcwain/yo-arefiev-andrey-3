const BASE_SERVER_PATH = 'https://academy.directlinedev.com/';
const mainLoader = document.querySelector('.main-loader_js');

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




const buttonMore = document.querySelector('.cards__btn-js');

const loadMore = async () => {
    async function getResponse() {
        const response = await fetch('https://academy.directlinedev.com/api/posts');
        let content = await response.json();
        console.log(response)
        console.log(content)
        
        let key;

        let list = document.querySelector('.cards__list');

        for (key in content) {
            list.innerHTML += `
            <li class="cards__list-item">
            <img src="" alt="" class="cards__list-img"
            <div class="cards__list-inner">
            <div class="cards__list-tags">${content[key].tags}</div>
            <p class="cards__list-date">${content[key].date}</p>
            <h2 class="cards__list-title">${content[key].title}</h2>
            <h3 class="cards__list-text">${content[key].text}</h3>
            <a href="#" class="cards__list-link" aria-label="Go to this post">Go to this post</a>
            </div>
            </li>`
        }
    }
    getResponse()
}
loadMore()

const buttonMore = document.querySelector('.cards__btn-js');

const loadMore = async () => {
    async function getResponse() {
        const response = await fetch('https://academy.directlinedev.com/api/posts');
        let content = await response.json();

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
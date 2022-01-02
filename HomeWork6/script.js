  
//   Основна функція, яка малює карточки фільмів
  function filmView(id, img, title, originName, year, rating, genres, countries) {
    let cardContent = document.querySelector('.cardContent');
    const temp = `
    <div class="filmContent" data-id="${id}">
        <div class="img-block">
            <img src="${img}" alt="">
        </div>
        <h3 class="title">${originName}/${title}</h3>
        <div class="text-content">
            <p>Жанр: ${showGenre(genres)}</p>
            <p>Страна: ${showCounry(countries)}</p>
            <p>Год: ${year}</p>
            <p>Рейтинг: ${rating}</p>
        </div>
    </div>`;

    cardContent.insertAdjacentHTML("beforeend", temp);
}

// Допоміжні функції витягування інформації з масиву
function showGenre(genre){
  return genre.map(el => el.genre).join(", ")
 }
 function showCounry(country){
  return country.map(el => el.country).join(", ")
 }

//  Інформація з серверу "топ 250 фільмів". Відсутній короткий та довгий опис фільму!
 let promise = fetch(
  "https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=1", {
      method: "GET",
      headers: {
          "X-API-KEY": "f7de8df4-0ae7-4497-a141-7f6248e170eb",
          "Content-Type": "application/json",
      },
  }
);

promise
  .then((res) => res.json())
  .then((data) => {
    
      data.films.map(({filmId, posterUrl, nameRu, nameEn, year, rating, genres, countries}) => {
          filmView(filmId, posterUrl, nameRu, nameEn, year, rating, genres, countries);
      });
  });

  // Функція отримання розширеної інформації про кожен фільм. Контент для модального вікна
  function informationAboutFIlm(filmId) {
    fetch(
        `https://kinopoiskapiunofficial.tech/api/v2.2/films/${filmId}`, {
            method: "GET",
            headers: {
                "X-API-KEY": "f7de8df4-0ae7-4497-a141-7f6248e170eb",
                "Content-Type": "application/json",
            },
        }
    )
    .then((res) => res.json())
    .then(({posterUrl, nameOriginal, nameRu, description, shortDescription, slogan, year, genres, countries, ratingFilmCritics, ratingKinopoisk}) => {
        modalWinwowView(posterUrl, nameOriginal, nameRu, description, shortDescription, slogan, year, genres, countries, ratingFilmCritics, ratingKinopoisk);
    });
  }
// Event, який відкриває вікно з наявною інформацією про вибраний фільм(не доробив, через те, що використовую query selector 
// відкривається тільки карточка першого фільму)
  document.querySelector('#listOfFilms').addEventListener('click', function(e) {
    const filmContent = document.querySelector('.filmContent');
        informationAboutFIlm(filmContent.dataset.id);
  });

//   Event закриття модального вікна
  document.querySelector('.modalWindow').addEventListener('click', function(event) {
    if(event.target.classList.contains('modalWindow')) {
        event.target.classList.remove('open');
        document.body.classList.remove('open-modal');
    }
   });

  // Функція відкриття модального вікна
function modalWinwowView(img, nameOriginal, nameRu, description, shortDescription, slogan, year, genres, countries, criticsRating, kinopoiskRating) {
  const modalWindow = document.querySelector('.modalWindow');
  modalWindow.innerHTML = `
  <div class="modalWindow-block">
      <div class="modal-window-content">
          <div class="modal-img">
              <img src="${img}" alt="poster film${nameOriginal}">
          </div>
          <div class="modalWindow-block">
              <h3 class="modal-title">${nameOriginal || nameRu}</h3>
              <p class="under-title-text">${slogan}</p>
              <h3 class="title-ru">${nameRu}</h3>
              <div class="about-movie">
                  <p>${description}</p>
                  <p>${shortDescription}</p>
                  <p>Год:${year}</p>
                  <p>Жанр:${showGenre(genres)}</p>
                  <p>Страна: ${showCounry(countries)}</p>
                  <p>Рейтинг кинокритиков: ${criticsRating}</p>
                  <p>Kinopoisk рейтинг: ${kinopoiskRating}</p>
              </div>
          </div>
      </div>
  </div>`;

  modalWindow.classList.add('open');
  document.body.classList.add('open-modal');
}







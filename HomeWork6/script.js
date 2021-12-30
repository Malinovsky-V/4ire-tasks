function filmView(img, title, year, rating, id, genre, description) {
  console.log(id)
    const cont = document.querySelector(".list_of_films");
    const temp = `
    <div class="card">
    <img src="${img}" alt="" />
    <h3>${title}</h3>
    <p>Жанр: ${showGenre(genre)}</p>
    <p>Рік: ${year}</p>
    <div>Рейтинг: ${rating}</div>
    <p class='description'>${22}</p>
    </div>`;
    cont.insertAdjacentHTML("beforeend", temp);
  }

  function showGenre(genre){
   return genre.map(el => el.genre).join(", ")
  }
  

  
  let promise = fetch(
    `https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=1`,
    {
      method: "GET",
      headers: {
        "X-API-KEY": "f7de8df4-0ae7-4497-a141-7f6248e170eb",
        "Content-Type": "application/json",
      },
    }
  );

  let id = null;
  

  promise
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      data.films.map(({ posterUrl, nameRu, year, rating, filmId, genres}) => {
        id = filmId
        filmView(posterUrl, nameRu, year, rating, filmId, genres);
      });
    })
    .then(() => {
    
     let discr =
      fetch(
        `https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}`,
        {
          method: "GET",
          headers: {
            "X-API-KEY": "f7de8df4-0ae7-4497-a141-7f6248e170eb",
            "Content-Type": "application/json",
          },
        }
      );
      discr.then((result) => result.json()).then((...data)=> {
      document.querySelector('.description').innerHTML = `${data.shortDescription}`
        }

  )
})
  
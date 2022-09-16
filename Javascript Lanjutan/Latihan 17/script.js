// Fetch
// Tombol Search
const tombolcari = document.querySelector(".search-button");
const input = document.querySelector(".input-keyword");

tombolcari.addEventListener("click", async function () {
  try {
    const movies = await getMovies(input.value);
    updateUI(movies);
  } catch (error) {
    alert(error);
  }
});

function getMovies(keyword) {
  return fetch(`http://www.omdbapi.com/?apikey=7554bd07&s=${keyword}`)
    .then((response) => {
      if (response.ok === false) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then((response) => {
      if (response.Response === "False") {
        throw new Error(response.Error);
      }
      return response.Search;
    });
}

function updateUI(movies) {
  let cards = ``;
  movies.forEach((m) => (cards += Cards(m)));
  const movieContainer = document.querySelector(".movie-container");
  movieContainer.innerHTML = cards;
}

// Tombol Show Detail
document.addEventListener("click", async function (e) {
  if (e.target.classList.contains("modal-detail-button")) {
    const imdbid = e.target.dataset.imdbid;
    const movieDetail = await getMovieDetail(imdbid);
    updateUIDetail(movieDetail);
  }
});

function getMovieDetail(imdbid) {
  return fetch(`http://www.omdbapi.com/?apikey=7554bd07&i=${imdbid}`)
    .then((response) => response.json())
    .then((m) => m);
}

function updateUIDetail(m) {
  const movieDetail = DetailMovie(m);
  const modalBody = document.querySelector(".modal-body");
  modalBody.innerHTML = movieDetail;
}

function Cards(m) {
  return `<div class="col-md-4 my-3">
          <div class="card" style="width: 18rem">
            <img src="${m.Poster}" class="card-img-top" alt="" />
            <div class="card-body">
              <h5 class="card-title">${m.Title}</h5>
              <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
              <a href="#" class="btn btn-primary modal-detail-button" data-bs-toggle="modal" data-bs-target="#movieDetailModal"  data-imdbid="${m.imdbID}">Show Details</a>
            </div>
          </div>
        </div>
      </div>`;
}

function DetailMovie(m) {
  return `<div class="container-fluid">
          <div class="row">
            <div class="col-md-3">
              <img src="${m.Poster}" class="img-fluid">
            </div>
            <div class="col-md">
              <ul class="list-group">
                <li class="list-group-item"><h4>${m.Title} ${m.Year}</h4></li>
                <li class="list-group-item"><b>Released</b> ${m.Released}</li>
                <li class="list-group-item"><b>Runtime</b> ${m.Runtime}</li>
                <li class="list-group-item"><b>Genre</b> ${m.Genre}</li>
                <li class="list-group-item"><b>Director</b> ${m.Director}</li>
              </ul>
            </div>
          </div>
        </div>`;
}

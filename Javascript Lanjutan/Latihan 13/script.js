$(`.search-button`).on(`click`, function () {
  $.ajax({
    url:
      `http://www.omdbapi.com/?apikey=7554bd07&s=` + $(`.input-keyword`).val(),
    success: (result) => {
      const movies = result.Search;
      let cards = ``;
      movies.forEach((m) => {
        cards += Cards(m);
      });
      $(`.movie-container`).html(cards);

      $(`.modal-detail-button`).on(`click`, function () {
        console.log($(this).data(`imdbid`));
        $.ajax({
          url:
            ` http://www.omdbapi.com/?apikey=7554bd07&i=` +
            $(this).data(`imdbid`),
          success: (m) => {
            const movieDetail = DetailMovie(m);
            $(`.modal-body`).html(movieDetail);
          },
          error: (e) => {
            console.log(e.responseText);
          },
        });
      });
    },
    error: (e) => {
      console.log(e.responseText);
    },
  });
});

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

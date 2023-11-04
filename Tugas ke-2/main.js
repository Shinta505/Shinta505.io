let currentPage = 1;
const moviesPerPage = 5;

function getMoviesByKeyword(keyword, page) {
  const apiKey = 'd684a20e';
  const apiUrl = `https://www.omdbapi.com/?apikey=${apiKey}&s=${keyword}&page=${page}`;

  return axios.get(apiUrl);
}

function OnChangeSearch(searchParam) {
  const main = document.querySelector('#main');
  main.innerHTML = '';

  getMoviesByKeyword(searchParam, currentPage)
    .then(function (response) {
      if (response.data.Search) {
        const movies = response.data.Search;
        movies.forEach(function (movie) {
          const card = createMovieCard(movie);
          main.appendChild(card);
        });
        const totalResults = parseInt(response.data.totalResults);
        updateNavigationButtons(totalResults);

        // Hapus class 'no-results' jika hasil ada.
        const noResultsElement = document.querySelector('.no-results');
        if (noResultsElement) {
          noResultsElement.classList.remove('no-results');
        }
      } else {
        const noResults = document.createElement('div');
        noResults.innerText = 'Tidak ada hasil.';
        noResults.classList.add('no-results'); // Tambahkan class 'no-results'.
        main.appendChild(noResults);
      }
    })
    .catch(function (error) {
      console.log(error);
    });
}

function createMovieCard(movie) {
  const card = document.createElement('div');
  card.className = 'card';

  const title = document.createElement('h1');
  title.innerText = movie.Title;

  const img = document.createElement('img');
  img.setAttribute('src', movie.Poster);
  img.setAttribute('title', movie.Title);

  card.appendChild(title);
  card.appendChild(img);

  return card;
}

function updateNavigationButtons(totalResults) {
  const prevButton = document.querySelector('#prev');
  const nextButton = document.querySelector('#next');
  const currentPageElement = document.querySelector('#current');

  if (currentPage === 1) {
    prevButton.classList.add('disabled');
  } else {
    prevButton.classList.remove('disabled');
  }

  if (currentPage * moviesPerPage >= totalResults) {
    nextButton.classList.add('disabled');
  } else {
    nextButton.classList.remove('disabled');
  }

  currentPageElement.innerText = currentPage;
}

const prevButton = document.querySelector('#prev');
const nextButton = document.querySelector('#next');

prevButton.addEventListener('click', function () {
  if (currentPage > 1) {
    currentPage--;
    OnChangeSearch(input.value);
  }
});

nextButton.addEventListener('click', function () {
  currentPage++;
  OnChangeSearch(input.value);
});

const input = document.getElementById('search');

input.addEventListener('blur', function () {
  currentPage = 1; // Reset halaman saat melakukan pencarian baru.
  OnChangeSearch(input.value);
});

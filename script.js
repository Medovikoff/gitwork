
const  numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
//  personalMovieDB[movies] = prompt('Один из последних фильмов', 'Титаник');

const a = prompt('Один из последнизх фильмов', ''),
      b = prompt('На сколько оцените его?', '' ),
      c = prompt('Один из последнизх фильмов', ''),
      d = prompt('На сколько оцените его?', '' );

personalMovieDB.movies[a] = b;

personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
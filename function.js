class Movie {
    static generosAceptados = ['acción', 'comedia', 'drama', 'horror', 'crimen', 'romance', 'sci-fi', 'thriller', 'biografia', 'historia'];
      constructor(id, titulo, director, anioEstreno, paisOrigen, genero, calificación){
          if (!/^[a-zA-Z]{2}\d{7}$/.test(id)) {
              throw new Error('ID de IMDB invalida');
          }
          if(titulo.length > 100) {
              throw new Error('El titulo excede los 100 caracteres maximos')
          }
          if(director.length > 50) {
              throw new Error('El nombre del director excede los 50 caracteres maximos')
          }
          if(!/^\d{4}$/.test(anioEstreno) && Number(anioEstreno) >= 1900 && Number(anioEstreno) <= new Date().getFullYear()) {
              throw new Error('Año de estreno invalido')
          }
          if (!Array.isArray(paisOrigen) || !paisOrigen.every((e)=> typeof e === "string")) {
              throw new Error('Pais de origen no valido')
          }
          if(!Array.isArray(genero) || !genero.every((e)=> typeof e === "string")) {
              throw new Error('Genero no valido')
          }
          if(!genero.every((genero)=> Movie.generosAceptados.includes(genero))) {
              throw new Error(`El genero debe ser uno aceptado: ${Movie.generosAceptados}`)
          }
          if(typeof calificación !== 'number' || calificación < 0 || calificación > 10) {
              throw new Error('Calificación invalida')
          }
          this.id = id;
          this.titulo = titulo;
          this.director = director;
          this.anioEstreno = anioEstreno;
          this.paisOrigen = paisOrigen;
          this.genero = genero;
          this.calificación = calificación;
      
      }

          static obtenerGenerosAceptados() {
              return Movie.generosAceptados;
          }

  obtenerFichaTecnica() {
      return {
         "Id": this.id,
         "Titulo": this.titulo,
         "Director": this.director,
         "Año de Estreno": this.anioEstreno,
         "Pais de origen": this.paisOrigen,
         "Genero": this.genero,
         "Calificación": this.calificación
        }
  }
}

const pelis = [
  {
      'id': 'tt1234567',
      'titulo': 'The Shawshank Redemption',
      'director': 'Frank Darabont',
      'anioEstreno': 1994,
      'paisOrigen': ['USA'],
      'genero': ['drama'],
      'calificación': 9.3
  },
  {
      'id': 'tt1234567',
      'titulo': 'The Godfather',
      'director': 'Francis Ford Coppola',
      'anioEstreno': 1972,
      'paisOrigen': ['USA'],
      'genero': ['crimen', 'drama'],
      'calificación': 9.2
  },
  {
      'id': 'tt1234567',
      'titulo': "Schindler's List",
      'director': 'Steven Spielberg',
      'anioEstreno': 1993,
      'paisOrigen': ['USA'],
      'genero': ['biografia', 'drama', 'historia'],
      'calificación': 8.9
  }
];

for(const movie of pelis) {
try {
  const result = new Movie(
    movie["id"],
    movie["titulo"],
    movie["director"],
    movie["anioEstreno"],
    movie["paisOrigen"],
    movie["genero"],
    movie["calificación"]
  );
  console.log(result.obtenerFichaTecnica());
} catch (error) {
  console.error(error.message);
}
}
console.info(Movie.obtenerGenerosAceptados())

//   -------------------

  class Movie {
    static accepted_genres = ['action', 'comedy', 'drama', 'horror', 'romance', 'sci-fi', 'thriller', 'crime', 'biography', 'history'];

    constructor(movie_id, tweet, director, year_of_release, countries_of_origin, genres, rating_on_IMBD) {
        if (!/^[a-zA-Z]{2}\d{7}$/.test(movie_id)) {
            throw new Error('Invalid IMDB ID');
        }
        if (tweet.length > 100) {
            throw new Error('Title exceeds 100 characters');
        }
        if (director.length > 50) {
            throw new Error('Director name exceeds 50 characters');
        }
        if (!Number.isInteger(year_of_release) || year_of_release.toString().length !== 4) {
            throw new Error('Invalid year of release');
        }
        if (!Array.isArray(countries_of_origin) || !countries_of_origin.every(country => typeof country === 'string')) {
            throw new Error('Countries must be strings');
        }
        if (!Array.isArray(genres) || !genres.every(genre => typeof genre === 'string')) {
            throw new Error('Genres must be strings');
        }
        if (!genres.every(genre => Movie.accepted_genres.includes(genre))) {
            throw new Error(`Genres must be one of ${Movie.accepted_genres}`);
        }
        if (typeof rating_on_IMBD !== 'number' || rating_on_IMBD < 0 || rating_on_IMBD > 10) {
            throw new Error('Invalid rating');
        }

        this.movie_id = movie_id;
        this.tweet = tweet;
        this.director = director;
        this.year_of_release = year_of_release;
        this.countries_of_origin = countries_of_origin;
        this.genres = genres;
        this.rating_on_IMBD = rating_on_IMBD;
    }

    static get_accepted_genres() {
        return Movie.accepted_genres;
    }

    get_technical_sheet() {
        return {
            'IMDB ID': this.movie_id,
            'Title': this.tweet,
            'Director': this.director,
            'Year of release': this.year_of_release,
            'Countries of origin': this.countries_of_origin,
            'Genres': this.genres,
            'Rating on IMBD': this.rating_on_IMBD
        };
    }
}

const movies = [
    {
        'IMDB ID': 'tt1234567',
        'Title': 'The Shawshank Redemption',
        'Director': 'Frank Darabont',
        'Year of release': 1994,
        'Countries of origin': ['USA'],
        'Genres': ['drama'],
        'Rating on IMBD': 9.3
    },
    {
        'IMDB ID': 'tt7654321',
        'Title': 'The Godfather',
        'Director': 'Francis Ford Coppola',
        'Year of release': 1972,
        'Countries of origin': ['USA'],
        'Genres': ['crime', 'drama'],
        'Rating on IMBD': 9.2
    },
    {
        'IMDB ID': 'tt2345678',
        'Title': "Schindler's List",
        'Director': 'Steven Spielberg',
        'Year of release': 1993,
        'Countries of origin': ['USA'],
        'Genres': ['biography', 'drama', 'history'],
        'Rating on IMBD': 8.9
    }
];

for (const movie of movies) {
    try {
      const m = new Movie(movie['IMDB ID'], movie['Title'], movie['Director'], movie['Year of release'], movie['Countries of origin'], movie['Genres'], movie['Rating on IMBD']);
      console.log(m.get_technical_sheet());
    } catch (e) {
      console.log(e.message);
    }
}


// class Movie {
//     constructor(movieData) {
//       if (!this.validateIMDBId(movieData.imdbId)) {
//         throw new Error("Invalid IMDB ID");
//       }
//       if (movieData.title.length > 100) {
//         throw new Error("Title exceeds 100 characters");
//       }
//       if (movieData.director.length > 50) {
//         throw new Error("Director name exceeds 50 characters");
//       }
//       if (!this.validateReleaseYear(movieData.yearRelease)) {
//         throw new Error("Invalid release year");
//       }
//       if (!Array.isArray(movieData.countryOrigin) || movieData.countryOrigin.length === 0) {
//         throw new Error("Country of origin must be a non-empty array");
//       }
//       if (!Array.isArray(movieData.genre) || movieData.genre.length === 0) {
//         throw new Error("Genres must be a non-empty array");
//       }
//       if (!this.validateGenres(movieData.genre)) {
//         throw new Error("Invalid genre(s)");
//       }
//       if (!this.validateRating(movieData.rating)) {
//         throw new Error("Invalid rating");
//       }
  
//       this.imdbId = movieData.imdbId;
//       this.title = movieData.title;
//       this.director = movieData.director;
//       this.yearRelease = movieData.yearRelease;
//       this.countryOrigin = movieData.countryOrigin;
//       this.genre = movieData.genre;
//       this.rating = movieData.rating;
//     }
  
//     validateIMDBId(imdbId) {
//       const idPattern = /^[A-Za-z]{2}\d{7}$/;
//       return idPattern.test(imdbId);
//     }
  
//     validateReleaseYear(year) {
//       return /^\d{4}$/.test(year) && Number(year) >= 1900 && Number(year) <= new Date().getFullYear();
//     }
  
//     validateGenres(genres) {
//       const acceptedGenres = ["Action", "Adventure", "Comedy", "Drama", "Fantasy", "Horror", "Mystery", "Romance", "Science Fiction", "Thriller"];
//       return genres.every(genre => acceptedGenres.includes(genre));
//     }
  
//     validateRating(rating) {
//       return !isNaN(rating) && rating >= 0 && rating <= 10 && /^(\d*\.)?\d{1}$/.test(rating);
//     }
  
//     static acceptedGenres() {
//       return ["Action", "Adventure", "Comedy", "Drama", "Fantasy", "Horror", "Mystery", "Romance", "Science Fiction", "Thriller"];
//     }
  
//     getTechnicalSheet() {
//       return `
//         Movie IMDB ID: ${this.imdbId}
//         Title: ${this.title}
//         Director: ${this.director}
//         Release Year: ${this.yearRelease}
//         Country of Origin: ${this.countryOrigin.join(", ")}
//         Genres: ${this.genre.join(", ")}
//         Rating: ${this.rating}`;
//     }
//   }
  
//   // Example usage:
//   const movieData = {
//     imdbId: "tt1234567",
//     title: "Sample Movie",
//     director: "Sample Director",
//     yearRelease: "2023",
//     countryOrigin: ["USA", "Canada"],
//     genre: ["Action", "Adventure"],
//     rating: 8.5,
//   };
  
//   const movie = new Movie(movieData);
//   console.log(movie.getTechnicalSheet());
  
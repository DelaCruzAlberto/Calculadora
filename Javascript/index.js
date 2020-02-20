

/*
    Funcion para extraer un array de peliculas de una API
PeliculasPopulares(){
    const url="https://api.themoviedb.org/3/movie/popular?api_key=5d30872160ed32519074df96b2db3ecd&language=es-ES&page=1";
    fetch(url).then(Response => {
        return Response.json();
    }).then(result => {
        console.log(result);
        const peliculas = result.results;
         peliculas.forEach(pelicula => {
             const {title, vote_count, vote_Average, poster_path} = pelicula

             console.log(title);
         });
    })
}

getPeliculasPopulares(); */
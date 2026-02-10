const movieService = require('../lib/service');

const index = (req, res) => {
    const movies = movieService.getMovies();
    res.render('index', {title: '', movies});
};

const details = (req, res) => {
    const {id} = req.params;
    const movie = movieService.getMovieById(id);

    if (!movie) {
        return res.status(404).render('404', {title: 'Síða fannst ekki'});
    }

    res.render('details', {title: movie.title, movie});
};

module.exports = {
    index, 
    details
};
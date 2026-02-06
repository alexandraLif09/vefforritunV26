const movieService = require('../lib/Service');

const index = (req, res) => {
    const movies = Service.getMovies();
    res.render('index', {title: '', movies});
};

const details = (req, res) => {
    const {id} = req.params;
    const movie = Service.getMovieById(id);

    if (!movie) {
        return res.status(404).render('404', {title: 'Síða fannst ekki'});
    }

    res.render('details', {title: movie.title, movie});
};

module.exports = {
    index, 
    detail
};
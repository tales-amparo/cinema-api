const movies = require('../../database/movies.json');

// Isso aí embaixo que é o CRUD
module.exports = {
    index: (req, res) => {
        return res.json(movies)
    },
    find: (req,res) => {
        const movie = movies.find(({id}) => id == req.params.movieId)
        
        return res.json(movie);
        
    }
    //eaasdadasd teste api

}
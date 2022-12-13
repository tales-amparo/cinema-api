const { Router } = require("./express");
const { default: RouteGroup } = require('express-route-grouping');


//criando um objeto de rotas
const router = new RouteGroup('/'. Router())

//para todas as rotas ele vai adicionar o V1 antes - agrupando rotas abaixo

router.group('v1', ({group}) =>{

    //exemplo: v1/movies
    

    group('movies', (resources}) => {

        resource({
            handlers: MoviesController
            
        });

    })


})

module.exports = router.export






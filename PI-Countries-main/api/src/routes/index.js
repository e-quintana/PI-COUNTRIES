const { Router } = require('express');
const {getCountries, getCountryById } = require('../controllers/Country.js');
const { postActivities } = require('../controllers/Tourism.js');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


//------------------------------- Rutas -------------------------------------------


router.get('/countries', getCountries);  //se hacen las dos rutas juntas



router.get('/countries/:id', getCountryById); 



router.post('/activities', postActivities); 



module.exports = router;

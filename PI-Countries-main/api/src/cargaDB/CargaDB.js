const { Country, Tourism } = require('../db.js')
const axios = require('axios');


const removeCharacters = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036fÅ]/g, "");     // elimino acentos y caracter Å
};

//-------------------------- Info de la Api ---------------------------------------

const getInfoApi =  async () => {                                      //async await porque uno nunca sabe cuanto va a tardar en responder la api,
    const apiUrl = await axios.get(`https://restcountries.com/v3/all`) //por eso se le pide q espere  qe la tenga.
    const apiInfo = await apiUrl.data.map (e => {
        return {
            id: e.cca3,
            name: removeCharacters(e.name.common),
            flag: e.flags[1],
            continent: e.continents[0],
            capital: e.capital ? e.capital[0] : "Inexistent Capital",
            subregion: e.subregion,
            area: e.area,
            population: e.population
        }
    })    

    await Country.bulkCreate(apiInfo);
    return apiInfo;
}

//---------------------------- Info de la DB -----------------------------------

const getInfoDb = async () => {
    const countries = await Country.findAll({
        includes: {
            model: Tourism,
            attributes: ['id', 'name', 'difficulty', 'duration', 'season'],
            throw: { 
                attributes: []
            }
        }
    })

    if (countries.length == 0) {
        return await getInfoApi();
    } else {
        return countries;
    }
}

//------------------------------- Junta todo --------------------------------------


/* const getAll = async () => {
    const apiInfo = await getInfoApi();
    const dbInfo = await getInfoDb();
    const infoTotal = apiInfo.concat(dbInfo);
    return infoTotal;

} */

module.exports = {getInfoApi, getInfoDb};
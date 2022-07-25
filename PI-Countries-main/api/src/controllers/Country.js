const { Country, Tourism } = require('../db.js')

const { getInfoDb } = require('../cargaDb/CargaDb.js')



//------------------------------- Para Rutas -------------------------------------------

const getCountries = async (req, res) => {  //se hacen las dos rutas juntas 
    const name = req.query.name

    try {
        var allCountries = await getInfoDb();
        if (name){
            let countryName = await allCountries.filter(e => e.name.toLowerCase().includes(name.toLowerCase()))
            return countryName.length ? res.status(200).send(countryName) : res.status(404).send('This country doesn`t exist');
        } else {
            return res.status(200).send(allCountries)
        }
    } catch (error) {
        console.log(error);
    }
};



const getCountryById = async (req, res) => {
    const { id } = req.params;
   
    const searchCountry = await Country.findByPk(id, {
         include: [{
            model: Tourism
        }]
    })

    return searchCountry ? res.status(200).send(searchCountry) : res.status(400).send('Not Found')
};




/* const getCountryById = async (req, res) => {
    const { id } = req.params;
    const allCountries = await getInfoDb()
    if (id) {
        let CountryId = await allCountries.filter(e => e.id == id)
        CountryId.length ? res.status(200).json(CountryId) : res.status(404).send('Country not found')
    }
}; 
 */

module.exports = { getCountries, getCountryById };

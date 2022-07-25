const { Country, Tourism } = require('../db.js')
const { v4: uuidv4 } = require('uuid');

const { getInfoApi, getInfoDb, getAll } = require('../cargaDb/CargaDb.js')

const postActivities = async (req, res) => {
    const { name, duration, difficulty, season, countries } = req.body;
    // const countries = ['ARG', 'BOL', 'PER'];
    const id =  uuidv4();
    if (!name || !duration || !difficulty || !season || !countries || countries.length == 0) {
        res.status(404).send({msg:"Inexistent data"})
    }
    
    try {
        const newTourism = await Tourism.create({
            name: name,
            duration: duration,
            difficulty: difficulty,
            season: season,
          });
     
       await newTourism.setCountries(countries);
       return res.json(newTourism)

    } catch (err){
        
        console.log("EL ERROR: \t", err);
        return res.status(404).send('Error while created')
    }
    


}

module.exports = {postActivities};

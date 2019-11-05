const user = require('../Models/User') 
const spot = require('../Models/spot')

module.exports = {
    async index(req, res) {
        const { tech } = req.query;
        const spots = await spot.find({ techs: tech });
        return res.json(spots);
    },


    async store (req, res) {
       const { filename } = req.body;
       const { company, techs, price } = req.body;
       const { user_id } = req.headers;

       const user = await user.findById(user_id);

       if(!user) {
           return res.status(400).json({ error: 'User does not existe'});
       }

       const spot = await spot.create({
           user: user_id, 
           thumbnail: filename,
           company,
           techs: techs.split(',').map(tech  => tech.trim()),
           price
       })

        return res.json({spot})
    }
};
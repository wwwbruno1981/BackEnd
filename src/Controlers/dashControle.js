const spot = require('../Models/spot');

module.exports = {

   async show(req, res) {
      const { user_id } = req.headers;
      const spots = await spot.find({user: user_id});

      return res.json(spots);
    }
}
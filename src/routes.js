const express = require('express');
const multer = require('multer');
const uploadConfig = require('./Config/upload');

const sectionControle = require('./Controlers/sectionControle')
const spotControle = require('./Controlers/spotControle')
const dashControle = require('./Controlers/dashControle')
const bookingControle = require('./Controlers/bookingControle')

const routes = express.Router();
const upload = multer(uploadConfig);


routes.post('/sections', sectionControle.store);

routes.get('/spots', spotControle.index);

routes.post('/spots', upload.single('thumbnail'), sectionControle.store);
        
routes.get('/dashs', dashControle.show);

routes.post('/spots/:spot_id/booking', bookingControle.store);

module.exports = routes;
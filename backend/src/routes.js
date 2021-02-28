const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const routes = new express.Router();
const upload = multer(uploadConfig);

const LikeController = require('./controllers/LikeController')
const PostController = require('./controllers/PostController');

routes.get('/post', PostController.index);
routes.post('/post',  upload.single('image'), PostController.store);

routes.post('/post/:id/like', LikeController.store);


module.exports = routes;
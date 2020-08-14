const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const multer = require('multer');
const checkAuth = require('../middleware/check-auth')
const date = new Date();

const ProductsController = require('../controllers/products');

const storage = multer.diskStorage({
    destination: function(req, file,cb){
        cb(null, './uploads/');
    },
    
    filename: function(req, file, cb) {
        cb(null , date.toISOString().replace(/([:.])/gi,'') + file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    // reject a file
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    }else {
        cb(null, false);
    }
};

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
});

const Product = require('../models/product');
const { findById } = require('../models/product');

router.get('/', ProductsController.products_get_all);

router.post('/', checkAuth, upload.single('productImage'), ProductsController.products_create_product);

router.get('/:productId', ProductsController.products_get_product);

router.put('/:productId', checkAuth, ProductsController.products_put_product);

router.patch('/:productId', checkAuth, ProductsController.products_patch_product);

router.delete('/:productId', checkAuth, ProductsController.products_delete_product);

module.exports = router;
const express = require('express');
const app = express();

const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');

app.use('/products', productRoutes);
app.use('/orders', orderRoutes)

app.use((req, res, next) => {
    const  error = new Error('Not found');
    error.status(400);
    next(error);
});

app.use((error, req, res,next) => {
    res.status(err.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;
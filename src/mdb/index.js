const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/nodelearn-5', { useNewUrlParser: true });

module.exports = {
    Category: require('./category.model'),
    Product: require('./product.model')
}
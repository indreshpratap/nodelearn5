const db = require('../../dao');
const { Category, Product } = require('../../mdb');
exports.getUsers = (req, res) => {
    db
        .select('name', 'email', 'active')
        .from('user')
        .whereNull('active')
        .then(users => {
            res.json(users);
        });
}


exports.saveUser = (req, res) => {
    let form = req.body;
    console.log(form);
    let data = {
        name: form.name,
        email: form.email,
        active: 1
    }
    db.insert(data).into('user').then(user => {
        res.json(user);
    })
}


exports.createCategory = (req, res) => {
    let body = req.body;
    console.log(Product);
    let category = new Category({ name: body.name, active: true });
    category.save().then(cat => {
        res.json(cat);
    }).catch(err => {
        res.status(500).send(err);
    })
}

exports.getCategories = (req, res) => {
    Category.find({ active: true }).then(cats => res.json(cats));
}

exports.createProduct = (req, res) => {
    let body = req.body;
    body.active = true;
    new Product(body).save().then((prod) => {
        res.json(prod)
    });
}


exports.getProductList = (req, res) => {
    Product
        .find({ active: true }, 'name discountPrice rating -_id')
        .then(products => res.json(products))
        .catch(err => res.status(500).send(err));
}


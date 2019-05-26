const db = require('../../dao');

exports.getUsers = (req, res) => {
    db
        .select('name', 'email','active')
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


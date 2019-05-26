const db = require('../../dao');

exports.getUserById = (req,res)=>{
 //   console.log(req.params);
    db.select().from('user')
    .where('id',req.params.id)
    .first()
    .then(user=>{
        res.json(user);
    });
}


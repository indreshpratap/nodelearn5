const router = require('express').Router();
const controller = require('./admin.controller');


router.get('/users', controller.getUsers);
router.post('/save-user', controller.saveUser);




module.exports = router;

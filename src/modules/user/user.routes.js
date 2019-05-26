const router = require('express').Router();
const ctrl = require('./user.controller');

router.get("/:id", ctrl.getUserById);

module.exports = router;
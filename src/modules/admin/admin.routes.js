const router = require('express').Router();
const controller = require('./admin.controller');


router.get('/users', controller.getUsers);
router.post('/save-user', controller.saveUser);

router.post('/create-category',controller.createCategory);
router.get('/categories',controller.getCategories);
router.post('/create-product',controller.createProduct);
router.get('/products',controller.getProductList);




module.exports = router;

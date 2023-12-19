const express     = require('express'),
    router        = express.Router(),
    controller    = require('../controllers/userController.js');

//findAll
router.get('/', controller.findAllUsers);

//add
router.post('/add', controller.addUser);

//remove
router.post('/remove', controller.delete);

//update
router.post('/update', controller.update);

//login
router.post('/login', controller.login);

//verifyToken
router.post('/verifyToken', controller.verifyToken);

module.exports = router;
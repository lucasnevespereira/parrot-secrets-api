const express = require('express');
const router = express.Router();

const secretCtrl = require('../controllers/secret');
const auth = require('../middleware/auth');

router.get('/', auth, secretCtrl.getAllSecrets);

router.post('/',  auth, secretCtrl.createSecret);

router.get(':id', auth, secretCtrl.getOneSecret);

router.put(':id', auth, secretCtrl.updateSecret);

router.delete(':id', auth, secretCtrl.deleteSecret);

module.exports = router;

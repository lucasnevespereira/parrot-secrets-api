const express = require('express');
const router = express.Router();

const secretCtrl = require('../controllers/secret');

router.get('/', secretCtrl.getAllSecrets);

router.post('/', secretCtrl.createSecret);

router.get(':id', secretCtrl.getOneSecret);

router.put(':id', secretCtrl.updateSecret);

router.delete(':id', secretCtrl.deleteSecret);

module.exports = router;

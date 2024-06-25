const express = require('express');
const {
    create,
    getById,
    update,
    delete,
} = require('./example.controller');

const router = express.Router();

router.route('/').post(create);
router.route('/:id')
    .get(getById)
    .patch(update)
    .delete(delete);

module.exports = router;

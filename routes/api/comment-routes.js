const router = require('express').Router();
const { addComment, removeComment } = require('../../controllers/comment-controller');

//api/comments/pizza id
router.route('/:pizzaId').post(addComment);

//api/comments/pizza id and comment id
router.route('/:pizzaId/:commentId').delete(removeComment);

module.exports = router

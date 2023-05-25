const router = require('express').Router();
const {
  getUsers,
  createUser,
  getSingleUser,
  // updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require('../../controllers/userController.js');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router.route('/:userId')
.get(getSingleUser)
// .put(updateUser)
.delete(deleteUser);

// /api/users/:userId/thoughts
router.route('/:userId/friends').post(addFriend);

// /api/students/:studentId/assignments/:assignmentId
router.route('/:userId/friends/:friendId').delete(removeFriend);

module.exports = router;
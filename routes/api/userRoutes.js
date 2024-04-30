const router = require('express').Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend
} = require('../../controllers/userController');

// GET all users
router.get('/', getAllUsers);

// GET a user by ID
router.get('/:userId', getUserById);

// POST a new user
router.post('/', createUser);

// PUT (update) a user by ID
router.put('/:userId', updateUser);

// DELETE a user by ID
router.delete('/:userId', deleteUser);

// POST to add a friend to a user's friend list
router.post('/:userId/friends/:friendId', addFriend);

// DELETE to remove a friend from a user's friend list
router.delete('/:userId/friends/:friendId', removeFriend);

module.exports = router;
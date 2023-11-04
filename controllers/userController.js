const { User } = require('../models');

const userController = {
  // Get all users
  getAllUsers(req, res) {
    User.find({})
      .select('-__v')
      .then((users) => res.json(users))
      .catch((err) => res.status(400).json(err));
  },
  // Get a user by ID
  getUserById({ params }, res) {
    User.findOne({ _id: params.id })
      .select('-__v')
      .then((user) => {
        if (!user) {
          res.status(404).json({ message: 'User not found' });
          return;
        }
        res.json(user);
      })
      .catch((err) => res.status(400).json(err));
  },
  // Create a new user
  createUser({ body }, res) {
    User.create(body)
      .then((user) => res.json(user))
      .catch((err) => res.status(400).json(err));
  },
  // Update a user by ID
  updateUser({ params, body }, res) {
    User.findByIdAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
      .then((user) => {
        if (!user) {
          res.status(404).json({ message: 'User not found' });
          return;
        }
        res.json(user);
      })
      .catch((err) => res.status(400).json(err));
  },
  // Delete a user by ID
  deleteUser({ params }, res) {
    User.findByIdAndDelete({ _id: params.id })
      .then((user) => {
        if (!user) {
          res.status(404).json({ message: 'User not found' });
          return;
        }
        res.json(user);
      })
      .catch((err) => res.status(400).json(err));
  },
  // Add a friend to a user's friend list
  addFriend({ params, body }, res) {
    User.findByIdAndUpdate(
      { _id: params.userId },
      { $addToSet: { friends: params.friendId } },
      { new: true }
    )
      .then((user) => {
        if (!user) {
          res.status(404).json({ message: 'User not found' });
          return;
        }
        res.json(user);
      })
      .catch((err) => res.status(400).json(err));
  },
  // Remove a friend from a user's friend list
  removeFriend({ params }, res) {
    User.findByIdAndUpdate(
      { _id: params.userId },
      { $pull: { friends: params.friendId } },
      { new: true }
    )
      .then((user) => {
        if (!user) {
          res.status(404).json({ message: 'User not found' });
          return;
        }
        res.json(user);
      })
      .catch((err) => res.status(400).json(err));
  },
};

module.exports = userController;

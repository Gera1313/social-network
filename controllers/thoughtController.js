const { Thought, User } = require('../models');

// Define controller functions
const thoughtController = {
  // Get all thoughts
  getAllThoughts(req, res) {
    Thought.find({})
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(400).json(err));
  },
  // Get a thought by ID
  getThoughtById(req, res) {
    const thoughtId = req.params.thoughtId;

    Thought.findById(thoughtId)
      .then((thought) => {
        if (!thought) {
          return res.status(404).json({ message: 'Thought not found' });
        }
        res.json(thought);
      })
      .catch((err) => res.status(400).json(err));
  },
// Create a new thought
createThought(req, res) {
  const { thoughtText, username } = req.body;

  Thought.create({ thoughtText, username })
    .then((thought) => {
      const userId = 'USER_ID_HERE'; // Place user id here when obtained
      return User.findByIdAndUpdate(
        userId,
        { $push: { thoughts: thought._id } },
        { new: true }
      )
      .then((user) => {
        if (!user) {
          res.status(404).json({ message: 'User not found' });
          return;
        }
        res.json(thought);
      });
    })
    .catch((err) => res.status(400).json(err));
},

  // Update a thought by ID
  updateThought(req, res) {
    const thoughtId = req.params.thoughtId;

    Thought.findByIdAndUpdate(thoughtId, req.body, { new: true })
      .then((thought) => {
        if (!thought) {
          return res.status(404).json({ message: 'Thought not found' });
        }
        res.json(thought);
      })
      .catch((err) => res.status(400).json(err));
  },
  // Delete a thought by ID
  deleteThought(req, res) {
    const thoughtId = req.params.thoughtId;

    Thought.findByIdAndDelete(thoughtId)
      .then((thought) => {
        if (!thought) {
          return res.status(404).json({ message: 'Thought not found' });
        }
        res.json(thought);
      })
      .catch((err) => res.status(400).json(err));
  },
  // Create a reaction to a thought
  createReaction(req, res) {
    const thoughtId = req.params.thoughtId;
    const reactionBody = req.body;

    Thought.findByIdAndUpdate(
      thoughtId,
      { $push: { reactions: reactionBody } },
      { new: true }
    )
      .then((thought) => {
        if (!thought) {
          return res.status(404).json({ message: 'Thought not found' });
        }
        res.json(thought);
      })
      .catch((err) => res.status(400).json(err));
  },
  // Delete a reaction from a thought
  deleteReaction(req, res) {
    const thoughtId = req.params.thoughtId;
    const reactionId = req.params.reactionId;

    Thought.findByIdAndUpdate(
      thoughtId,
      { $pull: { reactions: { _id: reactionId } } },
      { new: true }
    )
      .then((thought) => {
        if (!thought) {
          return res.status(404).json({ message: 'Thought not found' });
        }
        res.json(thought);
      })
      .catch((err) => res.status(400).json(err));
  },
};

module.exports = thoughtController;

const { Schema, model } = require('mongoose');

// Define the schema for reactions
const reactionSchema = new Schema(
  {
    reactionBody: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280, 
    },
    username: {
      type: String,
      required: true,
    },
  }
);

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  },
  {
    timestamps: true,
  }
);

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;


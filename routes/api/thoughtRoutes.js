const express = require('express');
const router = express.Router();

// Imports the necessary controller functions (define these in thoughtController.js)
const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    createReaction,
    deleteReaction
  } = require('../../controllers/thoughtController');
  
  // Defines thought-related routes
  
  // GET all thoughts
  router.get('/', getAllThoughts);
  
  // GET a thought by ID
  router.get('/:thoughtId', getThoughtById);
  
  // POST a new thought
  router.post('/', createThought);
  
  // PUT (update) a thought by ID
  router.put('/:thoughtId', updateThought);
  
  // DELETE a thought by ID
  router.delete('/:thoughtId', deleteThought);
  
  // POST a reaction to a thought
  router.post('/:thoughtId/reactions', createReaction);
  
  // DELETE a reaction from a thought
  router.delete('/:thoughtId/reactions/:reactionId', deleteReaction);
  

module.exports = router;


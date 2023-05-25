const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

// Schema to create a course model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      minLength: 1,
      maxLength: 280,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now(), // need to format
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [ reactionSchema ]
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// set friendCount
thoughtSchema
  .virtual('reactionCount')
  .get( function () { return this.reactions.length });


const Thought = model('thought', thoughtSchema);

module.exports = Thought;

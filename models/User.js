const { Schema, model } = require('mongoose');
// const thoughtSchema = require('./Thought');

// Schema to create Student model
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trimmed: true,
      max_length: 20,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      max_length: 50, // need matching validation
    },
    thoughts: [ 
    {
      type: Schema.Types.ObjectId,
      ref: 'thought',
    },
  ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'user',
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
      // getters: true,
    },
    id: false,
  }
);

// set friendCount
userSchema
  .virtual('friendCount')
  .get( function () { return this.friends.length });


const User = model('user', userSchema);

module.exports = User;

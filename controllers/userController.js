// const { ObjectId } = require('mongoose').Types;
const { User } = require('../models'); // maybe Thought too

module.exports = {
  // Get all users
  getUsers(req, res) {
    User.find()
      .then(async (users) => {
        const userObj = { users };
        return res.json(userObj);
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // Get a single user
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .select('-__v')
      .then(async (user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json( user )
      )
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // create a new user
  createUser(req, res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },
  // Delete a user and remove them from the course
  deleteUser(req, res) {
    User.findOneAndRemove({ _id: req.params.userId })
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No such user exists' })
          : 
              // Thought.findOneAndUpdate(
      //         { user: req.params.userId },
      //         { $pull: { user: req.params.userId } },
      //         { new: true }
      //       )
              res.json({ message: 'User successfully deleted' })
      )
      // .then((thought) =>
      //   !thought
      //     ? res.status(404).json({
      //         message: 'User deleted, but no thought found',
      //       })
      //     : res.json({ message: 'User successfully deleted' })
      // )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  // Update a user
  updateUser(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((updatedUser) =>
        !updatedUser
          ? res.status(404).json({ message: 'No user found with that ID :(' })
          : res.json(updatedUser)
      )
      .catch((err) => res.status(500).json(err));
  },


  // Add an friend to a user
  addFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $push: { friends: req.params.friendId } },
      { runValidators: true, new: true }
    )
      .then((newFriend) =>
        !newFriend
          ? res.status(404)
            .json({ message: 'No user found with that ID to add as friend :(' })
          : res.json( { message: 'Added friend' })
      )
      .catch((err) => res.status(500).json(err));
  },
  // Remove friend from a user
  removeFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $pull: { friends: req.params.friendId  } },
      { runValidators: true, new: true }
    )
      .then((user) =>
        !user
          ? res
              .status(404)
              .json({ message: 'No user found with that ID :(' })
          : res.json({ message: 'Removed friend' })
      )
      .catch((err) => res.status(500).json(err));
  },
};

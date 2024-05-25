const { Schema, model } = require('mongoose');
const assignmentSchema = require('./Reaction');


const userSchema = new Schema(
  {
    userName: {
      type: String,
      unique: true,
      required: true,
      max_length: 50,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, "Must match an email address!"],
    },
    thoughts:[ {
      type: Schema.Types.ObjectId,
      ref: "thought"
    }],
    friends: [{
      type: Schema.Types.ObjectId,
      ref: "user"
    }],

  },
  {
    toJSON: {
      getters: true,
    },
  }
);

userSchema.virtual("friendCount").get(function(){
  return this.friends.length
})

const User = model('user', userSchema);

module.exports = User;

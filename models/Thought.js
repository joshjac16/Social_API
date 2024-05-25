const { Schema, model, Types } = require('mongoose');
const reactionSchema = require('./Reaction')
const dayjs = require('dayjs')
// Schema to create a course model
const thoughtSchema = new Schema(
  {

    thoughtText: {
      type: String,
      required: true,
      maxlength: 280,
      minlength: 1,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: date => {
        return (dayjs(date).format('DD/MM/YYYY'))
      }
    },

    user:
    {
      type: String,
      required: true,
    },
    reaction: [
      reactionSchema
    ]
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

thoughtSchema.virtual("reactionCount").get(function () {
  return this.reaction.length
})

const Thought = model('thought', thoughtSchema);

module.exports = Thought;

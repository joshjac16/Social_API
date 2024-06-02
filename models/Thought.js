const { Schema, model, Types } = require('mongoose');
const reactionSchema = require('./Reaction')
const dayjs = require('dayjs')
// Schema to create a Thought model
const thoughtSchema = new Schema(
  {

    thoughtText: {                                       // Defining a field for thoughtText of type String 
      type: String,
      required: true,
      maxlength: 280,
      minlength: 1,
    },
    createdAt: {                                        // Defining a field for createdAt of type Date
      type: Date,
      default: Date.now,
      get: date => {
        return (dayjs(date).format('DD/MM/YYYY'))
      }
    },

    user:                                                // Defining a field for user of type String
    {
      type: String,
      required: true,
    },
    reaction: [                                          // Defining a field for reactions as an array of reactionSchema objects
      reactionSchema
    ]
  },
  {
    toJSON: {                                            // Defining options for schema
      virtuals: true,
    },
    id: false,                                           // Disabling the generation of the _id field
  }
);

thoughtSchema.virtual("reactionCount").get(function () {  // Defining a virtual field "reactionCount" to calculate the number of reactions
  return this.reaction.length
})

const Thought = model('thought', thoughtSchema);         // Creating a model named "Thought" based on the thoughtSchema

module.exports = Thought;                                // Exporting the Thought model to be used elsewhere in the application

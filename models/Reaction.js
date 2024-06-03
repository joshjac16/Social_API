const { Schema, Types } = require('mongoose');       // Importing the Schema and Types objects from the mongoose package
const dayjs = require('dayjs')

const reactionSchema = new Schema(                   // Creating a new reaction schema using the Schema constructor
  {
    reactionId: {                                    // Defining a field for reactionId of type ObjectId
      type: Types.ObjectId,
      default: () => new Types.ObjectId(),
    },

    reactionBody: {                                  // Defining a field for reactionBody of type String
      type: String,
      required: true,
      maxlength: 280,
    },

    createdAt: {                                     // Defining a field for createdAt of type Date
      type: Date,
      default: Date.now,
      get: date => {
        return (dayjs(date).format('DD/MM/YYYY'))
      }
    },
    user:                                            // Defining a field for user of type String
    {
      type: String,
      required: true,
    },

  },
  { 
    toJSON: {                                        // Defining options for schema
      getters: true,                                 // Enable getters to include virtuals when converting document to JSON
    },
  }
);


// Exporting the reaction schema
module.exports = reactionSchema;

const { Schema, Types } = require('mongoose');

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Types.ObjectId,
      default: () => new Types.ObjectId(),
    },

    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
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

  },
  {
    toJSON: {
      getters: true,
    },
  }
);

module.exports = reactionSchema;

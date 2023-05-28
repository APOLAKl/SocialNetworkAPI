const { Schema, Types } = require('mongoose');
const dayjs = require('dayjs');

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => {
        return new Types.ObjectId()
      }
    },
    reactionBody: {
      type: String,
      required: true,
      maxLength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      // getter method here
      get: (date) => {
        return dayjs(date).format('MM/DD/YYYY')
      }
    },
    username: {
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
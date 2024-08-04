const { Schema, Types } = require('mongoose');

const ReactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
    },
    reactionBody: {
        type: String,
        required: true,
        maxLength: 280
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        // Date format will be updated at a later time
        get: timestamp => new Date(timestamp).toLocaleString(),
    },
},
    {
        toJSON: {
            getters: true
        },
        toObject: {
            getters: true
        },
        _id: false

    }
);

module.exports = ReactionSchema;
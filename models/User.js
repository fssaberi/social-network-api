const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
    {
        username: {
            type: String,
            // unique
            // required
            // trimmed
        },
        email: {
            type: String,
            // required
            // unique
            // must match a valid address
        },
        thoughts: {
            // array of _id values referencing the thought model
        },
        friends: {
            // array of _id values referencing hte User model(self-reference)
        }
    }
)

UserSchema.virtual('friendCount').get(function() {
    return 
})

const User = model('User', UserSchema);

module.exports = User; 
import { Schema, model } from 'mongoose';

const postSchema = new Schema({
    author: {
        type: String
    },

    caption: {
        type: String
    },

    url: {
        type: String
    }
}, {
    timestamps: true
});

export default model("post", postSchema);

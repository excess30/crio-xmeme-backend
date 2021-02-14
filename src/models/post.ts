import { Schema, model } from 'mongoose';

const postSchema = new Schema({
    name: {
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

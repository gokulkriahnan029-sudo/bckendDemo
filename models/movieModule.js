import { model, Schema } from "mongoose";

const schema = new Schema({
    title : {
        type: String,
        required : true,
        unique: true
    },
    desc: {
        type: String,
        requied : true
    }
});

const movie = model("movie", schema)

export default movie;
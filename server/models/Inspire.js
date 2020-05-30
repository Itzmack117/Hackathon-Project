import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Value = new Schema(
    {
        author: { type: String, default: "unknown" },
        body: { type: String, required: true }
    },
    { timestamps: true, toJSON: { virtuals: true } }
);

export default Value;

import mongoose from "mongoose";
const Schema = mongoose.Schema;
const objectId = mongoose.Types.ObjectId;
const post = new Schema(
  {
    user: { type: objectId, ref: "users", required: true },
    comments: [{ type: objectId, ref: "comments" }],
    title: { type: String, required: true },
    body: { type: String, required: true },
    upvotes: { type: Number, default: 0 },
    downvotes: { type: Number, default: 0 },
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default post;

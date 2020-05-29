import mongoose from "mongoose";
const Schema = mongoose.Schema;
const objectId = mongoose.Types.ObjectId;
const Comment = new Schema(
  {
    user: { type: objectId, ref: "users", required: true },
    post: { type: objectId, ref: "posts", required: true },
    body: { type: String, required: true },
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Comment;

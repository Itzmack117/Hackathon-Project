import ValueSchema from "../models/Value";
import mongoose from "mongoose";
import UserSchema from "../models/User";
import PostSchema from "../models/Post";
import CommentSchema from "../models/Comment";

class DbContext {
  Values = mongoose.model("Value", ValueSchema);
  Users = mongoose.model("User", UserSchema);
  Posts = mongoose.model("Post", PostSchema);
  Comments = mongoose.model("Comment", CommentSchema);
}

export const dbContext = new DbContext();

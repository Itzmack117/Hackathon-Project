import ValueSchema from "../models/Value";
import mongoose from "mongoose";
import UserSchema from "../models/User";
import PostSchema from "../models/Post";
import CommentSchema from "../models/Comment";
import InspireSchema from "../models/Inspire"

class DbContext {
  constructor() {
    this.Values = mongoose.model("Value", ValueSchema);
    this.Users = mongoose.model("User", UserSchema);
    this.Posts = mongoose.model("Post", PostSchema);
    this.Comments = mongoose.model("Comment", CommentSchema);
    this.Inspires = mongoose.model("Inspire", InspireSchema);
  }
}

export const dbContext = new DbContext();

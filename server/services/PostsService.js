import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";
import Post from "../models/Post";
import { model } from "mongoose";

class PostsService {
  async editComments(postId, commentData) {
    commentData.postId = postId;
    let comment = await dbContext.Comments.create(commentData);
    let post = await dbContext.Posts.findById(postId);
    // @ts-ignore
    post.comments.push(comment);
    return await dbContext.Posts.findByIdAndUpdate(postId, post, { new: true });
  }
  async find(query = {}) {
    return await dbContext.Posts.find(query).populate({
      path: "user",
      model: "User",
    });
  }
  async findById(id) {
    let data = await dbContext.Posts.findById(id);
    if (!data) {
      throw new BadRequest("Invalid Id");
    }
    return data;
  }
  async create(rawData) {
    return await dbContext.Posts.create(rawData);
  }
  async edit(id, rawData) {
    let votes = {
      upvotes: rawData.upvotes,
      downvotes: rawData.downvotes,
    };
    let data = await dbContext.Posts.findByIdAndUpdate(id, votes, {
      new: true,
    });
    if (!data) {
      throw new BadRequest("Invalid Id");
    }
    return data;
  }

  async delete(id) {
    let data = await dbContext.Posts.findByIdAndDelete(id);
    if (!data) {
      throw new BadRequest("Invalid Id");
    }
    return "delorted the user";
  }

  async getNewposts(query = {}) {
    return await dbContext.Posts.find(query).sort("-createdAt").populate({
      path: "user",
      model: "User",
    });
  }

  async getPopularPosts(query = {}) {
    return await dbContext.Posts.find(query)
      .sort("-upvotes")
      .populate({ path: "user", model: "User" });
  }
}

export const postsService = new PostsService();

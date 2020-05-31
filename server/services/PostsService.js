import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";
import User from "../models/User";

class PostsService {
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
  async edit(id, update) {
    let data = await dbContext.Posts.findByIdAndUpdate(id, update, {
      new: true,
      runValidators: true,
    });
    if (!data) {
      throw new BadRequest("Invalid Id");
    }
    return data;
  }
  async editDownVote(id, update) {
    let data = await dbContext.Posts.findByIdAndUpdate(id, update, {
      new: true,
      runValidators: true,
    });
    if (!data) {
      throw new BadRequest("Invalid Id");
    }
    return data;
  }
  async editUpVote(id, update) {
    let data = await dbContext.Posts.findByIdAndUpdate(id, update, {
      new: true,
      runValidators: true,
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
    return await dbContext.Posts.find(query).sort("-createdAt");
  }

  async getPopularPosts(query = {}) {
    return await dbContext.Posts.find(query).sort("-upvotes");
  }
}

export const postsService = new PostsService();

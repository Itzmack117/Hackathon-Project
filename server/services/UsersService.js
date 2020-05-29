import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";
class UsersService {
  async find(query = {}) {
    return await dbContext.Users.find(query);
  }
  async findById(id) {
    let data = await dbContext.Users.findById(id);
    if (!data) {
      throw new BadRequest("Invalid Id");
    }
    return data;
  }
  async create(rawData) {
    return await dbContext.Users.create(rawData);
  }
  async edit(id, update) {
    let data = await dbContext.Users.findByIdAndUpdate(id, update, {
      new: true,
      runValidators: true,
    });
    if (!data) {
      throw new BadRequest("Invalid Id");
    }
    return data;
  }

  async delete(id) {
    let data = await dbContext.Users.findByIdAndDelete(id);
    if (!data) {
      throw new BadRequest("Invalid Id");
    }
    return "delorted the user";
  }
}

export const usersService = new UsersService();

import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class InspiresService {
    async delete(id) {
        let data = await dbContext.Inspires.findByIdAndDelete(id)
        if (!data)
            return (Error)
    }
    async getRan() {
        let num = await dbContext.Inspires.length
        let ran = Math.random() * num
        console.log(ran)
        return ran
    }

    async find(query = {}) {
        let data = await dbContext.Inspires.find(query);
        return data;
    }
    async findById(id) {
        let data = await dbContext.Inspires.findById(id);
        if (!data) {
            throw new BadRequest("Invalid Id");
        }
        return data;
    }
}

export const inspireService = new InspiresService();
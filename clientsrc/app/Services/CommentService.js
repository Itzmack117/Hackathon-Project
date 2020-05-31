import store from "../store.js";
import Comment from "../Models/Comment.js";

// @ts-ignore
const _commentApi = axios.create({
  baseURL: "http://localhost:3000/api/comments",
});

class CommentService {
  async getComments() {
    let apiData = await _commentApi.get();
    let comments = apiData.data.map((c) => new Comment(c));
    store.commit("comments", comments);
  }
  async createNewComment(rawCommentData) {
    rawCommentData.user = store.State.user.id;
    let apiData = await _commentApi.post("", rawCommentData);
    this.getComments();
  }
}

const service = new CommentService();
export default service;

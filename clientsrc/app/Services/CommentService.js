import store from "../store.js";
import Comment from "../Models/Comment.js";

// @ts-ignore
const _commentApi = axios.create({
  baseURL: "http://localhost:3000/api/posts",
});

class CommentService {
  // async getComments() {
  //   let apiData = await _commentApi.get();
  //   let comments = apiData.data.map((c) => new Comment(c));
  //   store.commit("comments", comments);
  // }
  async createNewComment(postId, rawCommentData) {
    console.log("attempting to create comment");
    rawCommentData.user = store.State.user.id;
    let apiData = await _commentApi
      .put(`/post/${postId}/comment`, rawCommentData)
      .then((res) => {
        console.log(res.data);
      });
  }
}

const service = new CommentService();
export default service;

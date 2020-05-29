import store from "../store.js";
import Post from "../Models/Post.js";

const _postApi = axios.create({
  baseURL: "http://localhost:3000/api/posts"

})

class PostService {
  async getAllPosts() {
    let data = await _postApi.get()
    let newPosts = data.data.map(p => new Post(p))
    store.commit("posts", newPosts)
  }
}

const service = new PostService();
export default service;

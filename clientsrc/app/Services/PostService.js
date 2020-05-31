import store from "../store.js";
import Post from "../Models/Post.js";

// @ts-ignore
const _postApi = axios.create({
  baseURL: "http://localhost:3000/api/posts",
});

class PostService {
  vote(id, rawData) {
    _postApi.put(`${id}`, rawData).then((res) => {
      console.log(res.data);
      this.getAllPosts();
    });
  }
  createNewPost(rawData) {
    rawData.user = store.State.user.id;
    _postApi
      .post("", rawData)
      .then((res) => {
        this.getAllPosts();
      })
      .catch((err) => console.log(err));
  }
  async getAllPosts() {
    let data = await _postApi.get();
    let newPosts = data.data.map((p) => new Post(p));
    store.commit("posts", newPosts);
  }
  deletePost(id) {
    _postApi.delete(`${id}`);
    this.getAllPosts();
  }

  async getNewPosts() {
    let apiData = await _postApi.get("newposts");
    let newPosts = apiData.data.map((p) => new Post(p));
    store.commit("posts", newPosts);
  }

  async getPopularPosts() {
    let apiData = await _postApi.get("popularposts");
    let popularPosts = apiData.data.map((p) => new Post(p));
    store.commit("posts", popularPosts);
  }
}

const service = new PostService();
export default service;

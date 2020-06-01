import store from "../store.js";
import Post from "../Models/Post.js";

// @ts-ignore
const _postApi = axios.create({
  baseURL: "http://localhost:3000/api/posts",
});
let sortBy = "new";
class PostService {
  async vote(id, updatedPost) {
    await _postApi.put(`/${id}`, updatedPost).then((res) => {
      if (sortBy == "new") {
        this.getNewPosts();
      } else if (sortBy == "popular") {
        this.getPopularPosts();
      } else if (sortBy == "user") {
        this.getUserPosts();
      } else {
        this.getAllPosts();
      }
    });
  }
  createNewPost(rawData) {
    rawData.user = store.State.user.id;
    _postApi
      .post("", rawData)
      .then((res) => {
        if (sortBy == "new") {
          this.getNewPosts();
        } else if (sortBy == "popular") {
          this.getPopularPosts();
        } else if (sortBy == "user") {
          this.getUserPosts();
        } else {
          this.getAllPosts();
        }
      })
      .catch((err) => console.log(err));
  }
  async getAllPosts() {
    let data = await _postApi.get();
    let newPosts = data.data.map((p) => new Post(p));
    store.commit("posts", newPosts);
    if (sortBy == "new") {
      this.getNewPosts();
    } else if (sortBy == "popular") {
      this.getPopularPosts();
    } else if (sortBy == "user") {
      this.getUserPosts();
    } else {
      this.getAllPosts();
    }
  }
  deletePost(id) {
    _postApi.delete(`${id}`);
    if (sortBy == "new") {
      this.getNewPosts();
    } else if (sortBy == "popular") {
      this.getPopularPosts();
    } else if (sortBy == "user") {
      this.getUserPosts();
    } else {
      this.getAllPosts();
    }
  }

  async getNewPosts() {
    sortBy = "new";
    let apiData = await _postApi.get("newposts");
    let newPosts = apiData.data.map((p) => new Post(p));
    store.commit("posts", newPosts);
  }

  async getPopularPosts() {
    sortBy = "popular";
    let apiData = await _postApi.get("popularposts");
    let popularPosts = apiData.data.map((p) => new Post(p));
    store.commit("posts", popularPosts);
  }

  async getUserPosts() {
    sortBy = "user";
    let apiData = await _postApi.get(`/?user=${store.State.user.id}`);
    let userPosts = apiData.data.map((p) => new Post(p));
    store.commit("posts", userPosts);
  }
}

const service = new PostService();
export default service;

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
    _postApi.post("", rawData).then((res) => {
      this.getAllPosts();
    });
  }
  async getAllPosts() {
    let data = await _postApi.get();
    let testDate = new Date(data.data[0].createdAt);
    console.log(data.data[0]);

    console.log(testDate.getHours());

    let newPosts = data.data.map((p) => new Post(p));
    store.commit("posts", newPosts);
  }
}

const service = new PostService();
export default service;

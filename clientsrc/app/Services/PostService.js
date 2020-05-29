import store from "../store.js";
import Post from "../Models/Post.js";

const _postApi = axios.create({
  baseURL: "http://localhost:3000/api/posts"

})

class PostService {
  async createNewPost(rawData) {
    let data = await _postApi.post("", rawData)
    this.getAllPosts()
    console.log(data);



  }
  async getAllPosts() {
    let data = await _postApi.get()
    let testDate = new Date(data.data[0].createdAt)
    console.log(data.data[0]);

    console.log(testDate.getHours());

    let newPosts = data.data.map(p => new Post(p))
    store.commit("posts", newPosts)
  }
}

const service = new PostService();
export default service;

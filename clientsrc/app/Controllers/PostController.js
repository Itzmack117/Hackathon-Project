import store from "../store.js";
import service from "../Services/PostService.js";

//Private
function _draw() {
  let post = store.State.posts;
  let template = "";
  post.forEach((p) => (template += p.Template));
  document.getElementById("posts").innerHTML = template;
}

function _drawApiPosts() {}

let isOpen = false;
function _togglePostForm() {
  if (isOpen) {
    document.getElementById("post-form").classList.add("hidden");
    isOpen = false;
    return;
  }
  isOpen = true;
  document.getElementById("post-form").classList.remove("hidden");
}
//Public
export default class PostController {
  constructor() {
    store.subscribe("posts", _draw);
  }

  getAllPosts() {
    service.getAllPosts();
  }

  togglePostForm() {
    _togglePostForm();
  }
  createNewPost(event) {
    event.preventDefault();
    let formData = event.target;
    let rawData = {
      title: formData.title.value,
      body: formData.quote.value,
    };
    service.createNewPost(rawData);
  }
  addUpVote(postId) {
    let postData = store.State.posts.find((p) => p.id == postId);
    postData.upvotes++;
    service.vote(postId, postData);
  }
  addDownVote(postId) {
    let postData = store.State.posts.find((p) => p.id == postId);
    postData.downvotes++;
    service.vote(postId, postData);
  }
}

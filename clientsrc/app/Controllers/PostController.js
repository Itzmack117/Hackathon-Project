import store from "../store.js";
import service from "../Services/PostService.js";

//Private
function _draw() {
  let post = store.State.posts;
  let template = ""
  post.forEach(p => template += p.Template)
  document.getElementById("posts").innerHTML = template
}

function _drawApiPosts() {

}

//Public
export default class PostController {
  constructor() {
    store.subscribe("posts", _draw);
    this.getAllPosts()

  }

  getAllPosts() {
    service.getAllPosts()
  }
  createNewPost(event) {

    event.preventDefault()
    let formData = event.target
    let rawData = {
      user: formData.user.value,
      title: formData.title.value,
      body: formData.body.value,
    }

    service.createNewPost(rawData)
    // formData.reset()
  }
}

import store from "../store.js";
import service from "../Services/PostService.js";

//Private
function _draw() {
  let post = store.State.posts;
  let template = ""
  post.forEach(p => template += p.Template)
  //NOTE ADD TEMPLATE TO DOCUMENT AND THAT SORT OF CRAP
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
}

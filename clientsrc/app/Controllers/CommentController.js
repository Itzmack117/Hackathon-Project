import ValuesService from "../Services/ValuesService.js";
import store from "../store.js";
import service from "../Services/CommentService.js";

//Private
function drawCommentSection() {
  let comments = store.State.comments;
  for (let i = 0; i < comments.length; i++) {
    let comment = comments[i];
    let commentSectionId = comment.post;
    let commentSectionDiv = document.getElementById(
      "comments-" + commentSectionId
    );
    if (commentSectionDiv) {
      //   commentSectionDiv.insertAdjacentHTML("afterend", comment.Template);
      commentSectionDiv.innerHTML =
        commentSectionDiv.innerHTML + comment.Template;
    }
  }
}

function _draw() {
  setTimeout(drawCommentSection, 500);
}

//Public
export default class CommentController {
  constructor() {
    store.subscribe("comments", _draw);
    this.getComments();
  }

  getComments() {
    service.getComments();
  }

  addComment(event, id) {
    event.preventDefault();
    console.log("add comment");
    let formData = event.target;
    let rawCommentData = {
      post: id,
      body: formData.comment.value,
    };
    try {
      service.createNewComment(rawCommentData);
    } catch (error) {
      console.log("Error in PostController.addComment: ", error);
    }
    formData.reset();
  }
}

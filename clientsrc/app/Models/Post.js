import store from "../store.js";
async function getUsername() {}
export default class Post {
  constructor(data) {
    this.id = data.id;
    this.title = data.title;
    this.user = data.user.name;
    this.body = data.body;
    this.upvotes = data.upvotes;
    this.downvotes = data.downvotes;
    this.comments = data.comments;
    let createdAtDateObject = new Date(data.createdAt);
    let createdAtStringArray = createdAtDateObject.toUTCString().split(" ");
    this.dayOfMonth = createdAtStringArray[1];
    this.month = createdAtStringArray[2];
    this.year = createdAtStringArray[3];
    this.time = createdAtStringArray[4].slice(0, 5);
  }
  get deletePostButton() {
    return /*html*/ `<div onclick="app.postController.deletePost('${this.id}')" class="p-1 m-1">
  <i class="action text-right text-danger fas fa-trash-alt"></i>
  </div>`;
  }
  get Template() {
    return /*html*/ `
    <div class="col-12 col-sm-6 col-lg-4 d-flex justify-content-center my-2 "> 
    <div class="card post-card text-center">
    <div class="d-flex justify-content-between">
    <div class="p-1 m-1">
    <img src="https://place-hold.it/50?text=Img&fontsize=16"class="profile-image img-fluid">
    <h5 class="d-inline m-1 ml-2 text-primary">${this.user}<h5>
    </div>
    ${this.user == store.State.user.name ? this.deletePostButton : ""}
    </div>
    <div class="card-body">
    <h5 class="text-primary">${this.title}</h5>
        <p class="card-text">${this.body}
        </p>
    </div>
      <div class="card-footer d-flex justify-content-around ">
      
      <div>
      <p class="text-success  m-1 p-1">${
        this.upvotes
      }<i class="fas fa-thumbs-up m-1 p-1"></i></p>
      <button onclick="app.postController.addUpVote('${
        this.id
      }')" class="btn btn-success">Nailed It</button>
      </div>
      <div>
      <p class="text-danger  m-1 p-1">${
        this.downvotes
      }<i class="fas fa-thumbs-down  m-1 p-1"></i></p>
      <button  onclick="app.postController.addDownVote('${
        this.id
      }')" class="btn btn-danger">meh..</button>
      </div>
      </div>
        <div class="p-2 m-2 border-rounded">
          <form onsubmit="app.postController.addComment(postId)">
          <div class="d-flex align-items-center  ">  
          <input class="flex-grow-1 p-2 ml-2 mr-2" placeholder="What do you thing..." type="text">
          <div class="d-inline commentBtn m-1 p-1 action bg-primary">
            <i type="submit" onclick="app.postController.addComment('${
              this.id
            }')"  class="far fa-comment align-self-center text-center"></i>
            </div>
            </div>
            </form>
        </div>
      <div class="bg-light comment-card m-2 p-2">
      ${this.commentTemplate}
      </div>
      </div>
</div>
    `;
  }

  get commentTemplate() {
    return /*html*/ `
    <div class="card bg-dark p-1 m-1">
    <h5>commentName</h5>
    <p>comment</p>
    </div> `;
  }
}

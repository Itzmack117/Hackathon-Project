import store from "../store.js";
async function getUsername() {}
export default class Post {
  constructor(data) {
    this.id = data.id;
    this.title = data.title;
    this.user = data.user;
    this.body = data.body;
    this.upvotes = data.upvotes;
    this.downvotes = data.downvotes;
  }

  get Template() {
    return /*html*/ `
    <div class="col-12 col-sm-6 col-lg-4 d-flex justify-content-center my-2 "> 
    <div class="card post-card text-center">
    <div class="card-header  text-left d-flex align-items-end">
    <img src="https://place-hold.it/50?text=Img&fontsize=16"class="profile-image img-fluid">
    <h5 class="d-inline m-1 ml-2 text-primary">${this.user} <h5>
    </div>

    <div class="card-body">
    <h5 class="text-primary">${this.title}</h5>
        <p class="card-text">${this.body}
        </p>
    </div>
      <div class="card-footer d-flex justify-content-around">
      
      <div>
      <p class="text-success  m-1 p-1">${this.upvotes}<i class="fas fa-thumbs-up m-1 p-1"></i></p>
      <button onclick="app.postController.addUpVote('${this.id}')" href="#" class="btn btn-success">Nailed It</button>
      </div>
      <div>
      <p class="text-danger  m-1 p-1">${this.downvotes}<i class="fas fa-thumbs-down  m-1 p-1"></i></p>
      <button  onclick="app.postController.addDownVote('${this.id}')" href="#" class="btn btn-danger">Ouch...</button>
      </div>


      </div>
    </div>
</div>
    `;
  }
}

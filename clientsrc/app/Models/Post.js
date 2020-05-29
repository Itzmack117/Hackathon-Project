export default class Post {
  constructor(data) {
    debugger
    this.title = data.title
    this.user = data.user.name
    this.body = data.body
    this.upvotes = data.upvotes
    this.downvotes = data.downvotes

  }

  get Template() {
    return /*html*/`
    <div class="col-12 col-md-4 d-flex justify-content-center my-2"> 
    <div class="card text-center">
    <div class="card-header">
       ${this.title}
    </div>
    <div class="card-body">
        <h5 class="card-title">${this.user}</h5>
        <p class="card-text">${this.body}
        </p>
    </div>
      <div class="card-footer">
        <button href="#" class="btn btn-danger">Nailed It</button>
        <div> 2 days ago
        </div>
      </div>
    </div>
</div>
    `
  }
}
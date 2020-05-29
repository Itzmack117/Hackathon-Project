export default class Post {
  constructor(data) {
    this.title = data.title
    this.user = data.user
    this.body = data.body
    this.upvotes = data.upvotes
    this.downvotes = data.downvotes

  }

  get Template() {
    return /*html*/` 
    <div class="card text-center">
    <div class="card-header">
       ${this.title}
    </div>
    <div class="card-body">
        <h5 class="card-title">${this.user}</h5>
        <p class="card-text">${this.body}
        </p>
    </div>
    <div class="card-footer text-muted">
        <button href="#" class="btn btn-primary">Nailed It</button>
        <div> 2 days ago
        </div>
    </div>
</div>
    `
  }
}
export default class Comment {
  constructor(data) {
    this.id = data.id || data._id;

    this.postId = data.postId;
    this.userId = data.userId;

    this.username = data.username;
    this.body = data.body;
  }

  get Template() {
    return /*html*/ `
    <div class="card bg-dark p-1 m-1">
    <h5>${this.username}</h5>
    <p>${this.body}</p>
    </div> `;
  }
}

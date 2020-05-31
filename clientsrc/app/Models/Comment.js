export default class Comment {
  constructor(data) {
    this.id = data._id;
    this.user = data.user;
    this.post = data.post;
    this.body = data.body;
  }

  get Template() {
    return /*html*/ `
    <div class="card bg-dark p-1 m-1">
    <h5>${this.body}</h5>
    <p>${this.user}</p>
    </div> `;
  }
}

export default class User {
  constructor(data) {
    this.id = data._id;
    this.name = data.name;
    this.password = data.password;
    // this.email = data.email;
  }

  get Template() {
    return;
  }
}

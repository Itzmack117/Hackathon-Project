export default class User {
  constructor(data) {
    console.log(data);
    this.id = data.id;
    this.name = data.name;
    this.password = data.password;
    // this.email = data.email;
  }

  get Template() {
    return;
  }
}

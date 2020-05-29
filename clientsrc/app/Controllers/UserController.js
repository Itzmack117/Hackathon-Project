import store from "../store.js";
import service from "../Services/UserService.js";

//Private
function _draw() {
  let user = store.State.user;
  console.log(user);
}

//Public
export default class UserController {
  constructor() {
    store.subscribe("user", _draw);
    this.getUsername();
  }

  getUsername() {
    service.getUsername();
  }

  createNewUser(event) {
    event.preventDefault();
    let formData = event.target;
    let rawUserData = {
      username: formData.username.value,
      password: formData.password.value,
      email: formData.email.value,
    };
    service.createNewUser(rawUserData);
    formData.reset;
  }
}

import store from "../store.js";

//Private
function _draw() {
  let user = store.State.user;
  console.log(user);
}

//Public
export default class UserController {
  constructor() {
    store.subscribe("user", _draw);
  }
}

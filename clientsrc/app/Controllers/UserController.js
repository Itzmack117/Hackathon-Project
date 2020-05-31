import store from "../store.js";
import userService from "../Services/UserService.js";
import postService from "../Services/postService.js";

//Private
function _draw() {
  let user = store.State.user;
  if (user) {
    _toggleLoginForm();
    postService.getAllPosts();
    _toggleFeed();
  }
}
let isOpen = true;
function _toggleLoginForm() {
  if (isOpen) {
    document.getElementById("login-form").classList.add("hidden");
    console.log("hiding");

    isOpen = false;
    return;
  }
  isOpen = true;
  document.getElementById("login-form").classList.remove("hidden");
}
function _toggleFeed() {
  document.getElementById("posts").classList.remove("hidden");
}

//Public
export default class UserController {
  constructor() {
    store.subscribe("user", _draw);
    store.loadLocalStorage()
  }
  async login(event) {
    event.preventDefault();
    let formData = event.target;
    let rawData = {
      name: formData.username.value,
      password: formData.password.value,
    };
    await userService.login(rawData);
    postService.getAllPosts();
  }

  // getUsername() {
  //   userService.getUsername();
  // }
  // getAllUserNames() {
  //   userService.getAllUserNames()
  // }
  // createNewUserTest() {
  //   let userData = {
  //     name: "Micah",
  //     password: "pickles",
  //   };
  //   try {
  //     userService.createNewUser(userData);
  //     _toggleLoginForm();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  // createNewUser(event) {
  //   event.preventDefault();
  //   let formData = event.target;
  //   let rawUserData = {
  //     username: formData.username.value,
  //     password: formData.password.value,
  //     email: formData.email.value,
  //   };
  //   userService.createNewUser(rawUserData);
  //   formData.reset;
  // }
}

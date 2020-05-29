import UserController from "./Controllers/UserController.js";
import PostController from "./Controllers/PostController.js";

class App {
  userController = new UserController();
  postController = new PostController();
}

window["app"] = new App();

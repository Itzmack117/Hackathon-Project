import UserController from "./Controllers/UserController.js";
import PostController from "./Controllers/PostController.js";
import CommentController from "./Controllers/CommentController.js";

class App {
  userController = new UserController();
  postController = new PostController();
  commentController = new CommentController();
}

window["app"] = new App();

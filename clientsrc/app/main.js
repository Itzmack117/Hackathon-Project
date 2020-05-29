import UserController from "./Controllers/UserController.js";

class App {
  userController = new UserController();
}

window["app"] = new App();

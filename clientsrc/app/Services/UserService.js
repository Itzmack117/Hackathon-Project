import store from "../store.js";
import User from "../Models/User.js";

// @ts-ignore
const _userAPI = axios.create({
  baseURL: "http://localhost:3000/api/users/",
});

class UserService {
  CreateTestUser(data) {
    let newUser = new User({
      username: data.username,
      password: data.password,
    });
    if (newUser) {
      store.commit("user", newUser);
      return;
    }
    throw new Error("bad data provided for user creat");
  }
  async getAllUserNames() {
    let names = await _userAPI.get();
  }
  constructor() {
    // this.getUsername();
  }

  getUsername() {
    store.loadLocalStorage();
  }

  createNewUser(rawData) {
    _userAPI
      .post("", rawData)
      .then((res) => {
        let newUser = new User(res.data);
        store.commit("user", newUser);
      })
      .catch((error) => console.error(error));
  }
}

const service = new UserService();
export default service;

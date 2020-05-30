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
  constructor() {}

  getUsername() {
    store.loadLocalStorage();
  }

  async createNewUser(rawData) {
    let userNameTaken = await this.checkIfUsernameUsed(rawData.name);
    if (userNameTaken) {
      let isUser = await this.validateUser(rawData.name, rawData.password);
      if (isUser) {
        _userAPI
          .get(`?name=${rawData.name}`)
          .then((res) => {
            let newUser = new User(res.data[0]);
            store.commit("user", newUser);
            console.log(store.State.user);
          })
          .catch((error) => console.error(error));
      } else {
      }
    }
  }
  async validateUser(name, password) {
    let data = await _userAPI
      .get(`?name=${name}&password=${password}`)
      .then((res) => {
        if (res.data[0] === undefined) {
          console.log("bad password");
          return false;
        } else {
          console.log("good password");
          return true;
        }
      })
      .catch((e) => console.error(e));
    return data;
  }
  async checkIfUsernameUsed(name) {
    let data = await _userAPI
      .get(`?name=${name}`)
      .then((res) => {
        if (res.data[0] === undefined) {
          return false;
        } else {
          return true;
        }
      })
      .catch((e) => console.error(e));
    return data;
  }
}

const service = new UserService();
export default service;

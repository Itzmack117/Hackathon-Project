import store from "../store.js";
import User from "../Models/User.js";

// @ts-ignore
const _userAPI = axios.create({
  baseURL: "http://localhost:3000/api/users/",
});

class UserService {
  constructor() {}
  async login(userData) {
    let userNameTaken = await this.checkIfUsernameUsed(userData.name);
    if (userNameTaken) {
      let isUser = await this.validateUser(userData.name, userData.password);
      if (isUser) {
        _userAPI
          .get(`?name=${userData.name}`)
          .then((res) => {
            let newUser = new User(res.data[0]);
            store.commit("user", newUser);
            console.log(store.State.user);
          })
          .catch((error) => console.error(error));
      } else {
      }
    } else {
      this.createNewUser(userData);
    }
  }
  createNewUser(userData) {
    _userAPI.post("", userData).then((res) => {
      let newUser = new User(res.data);
      store.commit("user", newUser);
    });
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

import store from "../store.js";

const _userAPI = axios.create({
  baseURL: "http://localhost:3000/api/user/",
});

class UserService {
  constructor() {
    // this.getUsername();
  }

  getUsername() {
    store.loadLocalStorage();
  }

  async createNewUser(rawUserData) {
    let res = await _userAPI.post("", rawUserData);
    this.getUsername();
    store.saveState();
  }
}

const service = new UserService();
export default service;

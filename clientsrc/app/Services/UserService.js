import store from "../store.js";

const _userAPI = axios.create({
  baseURL: "http://localhost:3000/api/users/",
});

class UserService {
  async getAllUserNames() {
    let names = await _userAPI.get()
    console.log(names);

  }
  constructor() {
    // this.getUsername();
  }

  getUsername() {
    store.loadLocalStorage();
  }

  async createNewUser(rawUserData) {
    let res = await _userAPI.post("", rawUserData);
    // this.getUsername();
    // store.saveState();
    console.log(res);
    this.getAllUserNames()

  }
}

const service = new UserService();
export default service;

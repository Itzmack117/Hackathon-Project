import Value from "./Models/Value.js";
import User from "./Models/User.js";
import Post from "./Models/Post.js";

let _state = {
  /**@type {User} */
  user: null,
  /**@type {Post []} */
  posts: [],
  comments: [],
};

/** Collection of listeners to be called based on keyed state changes
 * @type {{[x:string]: function[]}}
 */
let _listeners = {
  user: [],
  posts: [],
  comments: [],
};

//NOTE You should not need to change the code from this point down

/**
 * Validates the property string is defined in both the state and the listeners
 * @param {string} prop
 */
function _validateProp(prop) {
  if (!_state.hasOwnProperty(prop) || !Array.isArray(_listeners[prop])) {
    throw new Error(
      `Unkown property ${prop}, please review your state and listeners`
    );
  }
}

/**
 * Validates the subscriber is a function
 * @param {function} fn
 * @param {string} prop
 */
function _validateSubscriber(fn, prop) {
  if (typeof fn != "function") {
    throw new Error(`Unable to subscribe to ${prop} fn must be a function`);
  }
}

class Store {
  /**
   * Provides access to application state data
   */
  get State() {
    return _state;
  }
  /**
   * Takes in a property to observe, and a function to run when it changes
   * @param {string} prop
   * @param {function} fn
   */
  subscribe(prop, fn) {
    _validateProp(prop);
    _validateSubscriber(fn, prop);
    _listeners[prop].push(fn);
  }

  /**
   * Takes in a property to set, and the value to set it to
   * @param {string} prop
   * @param {any} data
   */
  commit(prop, data) {
    _validateProp(prop);
    _state[prop] = data;
    _listeners[prop].forEach((fn) => fn());
  }

  loadLocalStorage() {
    let data = JSON.parse(localStorage.getItem("user"));
    if (data) {
      let user = new User(data);
      store.commit("user", user);
      return;
    }
    console.log("no user data");
  }
  saveLocalStorage() {
    localStorage.setItem("user", JSON.stringify(_state.user));
  }
}

const store = new Store();
export default store;

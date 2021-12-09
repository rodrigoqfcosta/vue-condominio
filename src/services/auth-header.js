import store from "../store";

export default function authHeader() {
    let user = store.state.usuario;
  
    if (user && user.token) {
      return { Authorization: 'Bearer ' + user.token }; // for Spring Boot back-end
    } else {
      return {};
    }
  }
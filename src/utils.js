import axios from "axios";

export const hasAuthenticated = () => {
  return false;
}

export const userData = () => {
  const url = "https://randomuser.me/api/";
  axios.get(url).then((res) => {

    const { username, password } = res.data.results[0].login;
    console.log(username, password);
    return { username, password }
  });
}
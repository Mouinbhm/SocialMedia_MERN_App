import axios from "axios";
const UserService = {};

UserService.register = function (data) {
  return axios.post("http://localhost:5001/users/signup", data);
};
export default UserService;

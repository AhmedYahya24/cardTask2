import axios from "axios";
import { startUser, successUser, errorUser } from "../readux/userSlice";

const JSON_API_SERVER = "http://localhost:5000/posts";

export const addUser = async (user, dispatch) => {
  dispatch(startUser());

  try {
    const response = await axios.post(JSON_API_SERVER, user);
    dispatch(successUser(response.data));
    console.log(
      "🚀 ~ file: axios.js ~ line 12 ~ addUser ~ data",
      response.data
    );
  } catch (err) {
    dispatch(errorUser());
  }
};

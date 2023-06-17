import axios from "axios";
import config from "../../config.json";

export default async function getUser() {
  const tokenStr = "Token " + localStorage.getItem("token");

  const res = await axios.get(config.serverUrl + `/api/user`, {
    headers: { Authorization: tokenStr },
  });
  return res.data;
}

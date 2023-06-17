import axios from "axios";
import config from "../../config.json";

export default async function getAuthToken(code) {
  try {
    const res = await axios.post(
      config.serverUrl + "/api/login/social/token_user/google-oauth2",
      {
        code: code,
        redirect_uri: "postmessage",
      }
    );
    return res.data;
  } catch (e) {
    console.error(e);
  }
}

import axios from "axios";
import config from "../../config.json";

export async function createCommentaire(commentString, pointInteretID) {
  const tokenStr = "Token " + localStorage.getItem("token");

  const res = await axios.post(
    config.serverUrl + `/api/add-commentaire/${pointInteretID}`,
    {
      commentaire: commentString,
    },
    {
      headers: { Authorization: tokenStr },
    }
  );
  return res.data;
}

export async function deleteCommentaire(commentID) {
  const tokenStr = "Token " + localStorage.getItem("token");

  axios.delete(config.serverUrl + `/api/delete-commentaire/${commentID}`, {
    headers: { Authorization: tokenStr },
  });
}

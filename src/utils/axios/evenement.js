import axios from "axios";
import config from "../../config.json";

export async function createEvenement(
  nom,
  dateDebut,
  dateFin,
  description,
  pointInteretID
) {
  const tokenStr = "Token " + localStorage.getItem("token");

  const res = await axios.post(
    config.serverUrl + `/api/add-evenement/${pointInteretID}`,
    {
      nom,
      date_debut: dateDebut,
      date_fin: dateFin,
      description,
    },
    {
      headers: { Authorization: tokenStr },
    }
  );
  return res.data;
}

export async function deleteEvenement(commentID) {
  const tokenStr = "Token " + localStorage.getItem("token");

  axios.delete(config.serverUrl + `/api/delete-evenement/${commentID}`, {
    headers: { Authorization: tokenStr },
  });
}

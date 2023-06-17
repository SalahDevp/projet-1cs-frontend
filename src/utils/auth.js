import getAuthToken from "./axios/getAuthToken";

export default async function authenticate(code, navigateFunc) {
  try {
    const resData = await getAuthToken(code);
    //save token and user id
    localStorage.setItem("token", resData.token);
    localStorage.setItem("userId", resData.id);

    navigateFunc("/map");
  } catch (e) {
    console.log(e);
  }
}

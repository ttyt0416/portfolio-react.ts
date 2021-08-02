import axios from "axios";

class Auth {
  static token: string | null;
  static expiryDate: Date | null;
  static userId: string | null;

  //   constructor(token: string, expiryDate: Date, userId: string) {
  //     this.token = token;
  //     this.expiryDate = expiryDate;
  //     this.userId = userId;
  //   }

  static async signup(email: string, password: string) {
    // const url = `https://identitytoolkit.googleapis.com/v1/${urlSegment}?key=AIzaSyCnbsMZ2TU8IexWXHcgC-h7mOyEnyrGLn8.json`;
    // const url = new URL(`https://identitytoolkit.googleapis.com/v1/${urlSegment}?key=AIzaSyCnbsMZ2TU8IexWXHcgC-h7mOyEnyrGLn8`);
    const url = "https://reactts1-26838-default-rtdb.firebaseio.com/auth.json";
    const body = JSON.stringify({
      email: email,
      password: password,
      returnSecureToken: true,
    });
    const emailSearch = axios.get(url + `?orderBy"email"&equalTo${email}`);
    console.log(emailSearch);
    if (emailSearch === null) {
      try {
        await axios.post(url, body);
      } catch (error) {
        console.log(error);
        throw error;
      }
    } else {
      return;
    }
  }

  static async login(email: string, password: string) {
    const url = `https://reactts1-26838-default-rtdb.firebaseio.com/auth.json`;
    const body = JSON.stringify({
      email: email,
      password: password,
      returnSecureToken: true,
    });
    const emailSearch = axios.get(url + `?orderBy"email"&equalTo${email}`);
    if (emailSearch !== null) {
      try {
        await axios.post(url, body);
      } catch (error) {
        console.log(error);
        throw error;
      }
    } else {
      return;
    }
  }

  static async logout() {
    Auth.token = null;
    Auth.userId = null;
  }
}

export { Auth };

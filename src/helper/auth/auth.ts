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

  static async authenticate(
    email: string,
    password: string,
    urlSegment: string
  ) {
    const url = `https://identitytoolkit.googleapis.com/v1/${urlSegment}?key=AIzaSyCnbsMZ2TU8IexWXHcgC-h7mOyEnyrGLn8`;
    const body = JSON.stringify({
      email: email,
      password: password,
      returnSecureToken: true,
    });
    try {
      await axios.post(url, body);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  static async signup(email: string, password: string) {
    return Auth.authenticate(email, password, "accounts:signUp");
  }

  static async login(email: string, password: string) {
    return Auth.authenticate(email, password, "accounts:signIn");
  }

  static async logout() {
    Auth.token = null;
    Auth.userId = null;
  }
}

export { Auth };

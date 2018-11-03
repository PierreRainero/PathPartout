export default class AuthenticationHelper {

    constructor() {
        logged: false
    }

    setLogged() {
        this.logged = true;
    }
    
    isLogged() {
        return this.logged;
    }

    validateLogIn(username, password) {
        // if (username === "test@gmail.com" && password === "test") {
        //     return true;
        // }
        return true;
    }


}
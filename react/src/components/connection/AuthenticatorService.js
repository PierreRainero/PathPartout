import User from './User';
import userStore from './userStore';

class AuthenticatorService {

    /**
     * MOCKED
     * Send a login request to the backend
     * @param {string} email unique email to identify an user
     * @param {string} password 
     */
    static login(email, password){
        userStore.setState({ connectedUser: new User(1, email, password, "", "") });
        return userStore.getState().connectedUser;
    }
}

export default AuthenticatorService;  
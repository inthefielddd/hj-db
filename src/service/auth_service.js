import { firebaseAuth, githubProvider, googleProvider } from "./firebase";

class AuthService {
    //로그인 로직
    login(providerName) {
        const authProvider = this.getProvider(providerName);
        return firebaseAuth.signInWithPopup(authProvider);
    }

    //로그아웃
    logout() {
        firebaseAuth.signOut();
    }

    //사용자가 로그인이 관찰되면 사용자에대한 정보를 가져온다
    onAuthChange(onUserChange) {
        firebaseAuth.onAuthStateChanged((user) => {
            onUserChange(user);
        });
    }

    getProvider(providerName) {
        switch (providerName) {
            case "Google":
                return googleProvider;
            case "Github":
                return githubProvider;
            default:
                throw new Error(`not supported provider`);
        }
    }
}

export default AuthService;

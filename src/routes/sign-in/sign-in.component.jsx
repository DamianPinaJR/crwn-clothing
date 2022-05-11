import { google, createUserDocFromAuth } from "../../utils/firebase/firebase.utils";

const SignIn = () => {
    const logGoogleUser = async() => {
        const { user } = await google();
        createUserDocFromAuth(user)
    }
    return(
        <div>
            <h1>I am the sign in page</h1>
            <button onClick={logGoogleUser}>Google</button>
        </div>
    )
}

export default SignIn;
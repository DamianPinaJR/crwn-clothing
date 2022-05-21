import { google, createUserDocFromAuth } from "../../utils/firebase/firebase.utils";

import SignUp from "../../components/sign-up-form/sign-up.component";

const SignIn = () => {
    const logGoogleUser = async() => {
        const { user } = await google();
        createUserDocFromAuth(user)
    }
    return(
        <div>
            <h1>I am the sign in page</h1>
            <button onClick={logGoogleUser}>Google</button>
            <SignUp/>
        </div>
    )
}

export default SignIn;
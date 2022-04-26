import { google } from "../../utils/firebase/firebase.utils";

const SignIn = () => {
    const logGoogleUser = async() => {
        const responce = await google();
        console.log(responce)
    }
    return(
        <div>
            <h1>I am the sign in page</h1>
            <button onClick={logGoogleUser}>Google</button>
        </div>
    )
}

export default SignIn;
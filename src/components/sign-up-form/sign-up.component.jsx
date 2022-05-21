import {
  createUserDocFromAuth,
  createAuthUserWithEmailPassword,
} from "../../utils/firebase/firebase.utils";
import { useState } from "react";
import FormInput from "../form-input/form-input.component";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailPassword(email, password);
      await createUserDocFromAuth(user, { displayName });
      setFormFields(defaultFormFields);
    } catch (error) {
      let string;
      switch (error.code) {
        case "auth/weak-password":
          string = "Password should be at least 6 characters";
          break;
        case "auth/email-already-in-use":
          string = "E-mail is in use already";
          break;
        default:
          string = "";
      }

      console.log(string);
      console.log(error);
    }
  };
  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          onChange={handleChange}
          value={displayName}
          name="displayName"
          required
        />
        <FormInput
          label="E-Mail"
          type="email"
          onChange={handleChange}
          value={email}
          name="email"
          required
        />
        <FormInput
          label="Password"
          type="password"
          onChange={handleChange}
          value={password}
          name="password"
          required
        />
        <FormInput
          label="Confirm Password"
          type="password"
          onChange={handleChange}
          value={confirmPassword}
          name="confirmPassword"
          required
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;

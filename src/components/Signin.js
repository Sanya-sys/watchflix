import { useState, useRef } from "react";
import MainHeader from "./MainHeader";
import validateData from "../utils/validations";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { PROFILE_PHOTO } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Signin = () => {
  const [isSignInForm, setIsSignForm] = useState(true);
  const email = useRef(null); // it will create a reference & want to refer it to email.
  const password = useRef(null);
  const name = useRef(null);
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();

  const toggleForm = () => {
    setIsSignForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    const message = validateData(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message) {
      return;
    }
    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: PROFILE_PHOTO
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("user", user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div>
      <MainHeader />
      <div className="absolute">
        <img
          src={PROFILE_PHOTO}
          alt="logo"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="rounded-lg absolute p-12 bg-black mx-auto right-0 left-0 my-48 w-3/12 text-white"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Name"
            className="p-2 my-2 w-full bg-gray-700"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-2 my-2 w-full bg-gray-700"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 my-2 w-full bg-gray-700"
        />
        <p className="text-red-500 font-bold text-lg"> {errorMessage} </p>
        <button
          className="p-4 my-4 bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign up"}
        </button>
        <div className="p-2 cursor-pointer" onClick={toggleForm}>
          {isSignInForm
            ? "New to netflix? Sign up now"
            : "Already a member ? Sign in now"}{" "}
        </div>
      </form>
    </div>
  );
};

export default Signin;

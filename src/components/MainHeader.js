import React, { useEffect } from "react";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { LOGO } from "../utils/constants";
import { addUser, removeUser } from "../utils/userSlice";

const MainHeader = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  const handleSignout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    // wanted to setup this event listener for once, that's why useEffect.
    // everytime component is rendered , this will be callec & my header page exists in every component to check authentication
    const unsubsribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/landing-page");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    // unsubscribe when component will unmount.
    return () => unsubsribe();
  }, []);

  return (
    <div className="absolute z-10 px-8 py-2 flex bg-gradient-to-b from-black w-screen justify-between">
      <img className="w-44" src={LOGO} alt="logo" />
      {user && (
        <div className="flex p-2">
          <img
            className="w-12 h-12"
            alt="user-icon"
            src="https://occ-0-5690-3663.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"
          />
          <button onClick={handleSignout} className="font-bold text-white">
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default MainHeader;

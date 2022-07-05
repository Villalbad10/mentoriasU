import { getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth"
import { facebook, google } from "../../firebase/firebaseConfig";
import { typesLogin } from "../types/types"


export const actionLoginGoogle = () => {
   return () => {
      const auth = getAuth();
      signInWithPopup(auth, google)
         .then(({ _tokenResponse }) => console.log(_tokenResponse.fullName, 'Google autorizado'))
         .catch(err => console.log(err))
   }
}

export const actionLoginFacebook = () => {
   return () => {
      const auth = getAuth();
      signInWithPopup(auth, facebook)
         .then(({ _tokenResponse }) => console.log(_tokenResponse.fullName, 'facebook user'))
         .catch(err => console.log(err))
   }
}


export const actionLoginAsync = (email, pass) => {
   return (dispatch) => {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, email, pass)
         .then(({ user }) => {
            dispatch(actionLoginSync(user.email, user.displayName))
            console.log(user, 'login Correcto');
         })
         .catch(err => console.log(err))
   }
}


export const actionLoginSync = (email, pass) => {
   return {
      type: typesLogin.login,
      payload: { email, pass }
   }
}
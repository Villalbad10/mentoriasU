import { createUserWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth";
import { typesregister } from "../types/types";


export const actionSignupAsync = (name, email, cel, pass) => {
   return (dispatch) => {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, pass)
         .then(async ({ user }) => {
            await updateProfile(auth.currentUser, { displayName: name })
            dispatch(actionSignup(name, email, cel, pass))
            console.log(user)
         })

         .catch(err => console.log(err))
   }
}



export const actionSignup = (name, email, cel, pass) => {
   return {
      type: typesregister.signUp,
      payload: { name, email, cel, pass }
   }
}
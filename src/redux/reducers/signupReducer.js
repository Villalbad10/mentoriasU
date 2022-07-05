import { typesregister } from "../types/types";


export const signupreducer = (state = {}, action) => {
   switch (action.type) {
      case typesregister.signUp:
         return {
            name: action.payload.name,
            email: action.payload.email,
            cel: action.payload.cel,
            pass: action.payload.pass
         }

      default:
         return state
   }
}
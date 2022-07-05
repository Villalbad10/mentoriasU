import { typesLogin } from "../types/types"


export const loginReducer = (state = {}, action) => {
   switch (action.type) {
      case typesLogin.login:
         return {
            email: action.payload.email,
            pass: action.payload.pass
         }

      default:
         return state
   }
}
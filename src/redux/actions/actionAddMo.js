import { addDoc, collection } from "firebase/firestore"
import { DB } from "../../firebase/firebaseConfig"


export const agregarMonAsync = (pro) => {
   return async () => {
      addDoc(collection(DB, "Monitores"), pro)
         .then(resp => console.log(resp)) //dispatch(listPlantaAsync())     
         .catch(error => console.warn(error))

   }
}

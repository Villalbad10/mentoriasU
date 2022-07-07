import { addDoc, collection } from "firebase/firestore"
import { DB } from "../../firebase/firebaseConfig"


export const agregarMonitoriasAsync = (m) => {
   return async () => {
      addDoc(collection(DB, "Monitorias"), m)
         .then(resp => console.log('Agreado')) //dispatch(listPlantaAsync())     
         .catch(error => console.warn(error))

   }
}

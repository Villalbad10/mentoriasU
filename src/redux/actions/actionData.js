import { collection, getDocs } from "firebase/firestore"
import { DB } from "../../firebase/firebaseConfig"


export const listarData = async () => {
   const collectionData = await getDocs(collection(DB, "Data"));
   const datos = []
   collectionData.forEach(element => {
      datos.push({ ...element.data() })
   });

   return datos
}


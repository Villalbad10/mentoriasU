import { collection, deleteDoc, doc, getDocs, query, where } from "firebase/firestore"
import { DB } from "../../firebase/firebaseConfig"


export const listarMonitor = async () => {
   const collectionData = await getDocs(collection(DB, "Monitores"));
   const datos = []
   collectionData.forEach(element => {
      datos.push({ ...element.data() })
   });

   return datos
}

export const ListarMonitorias = async () => {
   const monitorias = await getDocs(collection(DB, "Monitorias"));
   const datos = [];
   monitorias.forEach(res => datos.push({ ...res.data() }))

   return datos;
}

export const deleteMonitor = (cc) => {
   return async () => {
      const collectionCitas = collection(DB, "Monitores")
      const q = query(collectionCitas, where("cc", "==", cc))

      const datosQ = await getDocs(q)
      //console.log(datosQ)

      datosQ.forEach(docu => {
         deleteDoc(doc(DB, "Monitores", docu.id))
      })
   }
}

export const deleteMonitorias = (materia) => {
   return async () => {
      const collectionCitas = collection(DB, "Monitorias")
      const q = query(collectionCitas, where("materia", "==", materia))

      const datosQ = await getDocs(q)
      //console.log(datosQ)

      datosQ.forEach(docu => {
         deleteDoc(doc(DB, "Monitorias", docu.id))
      })
   }
}
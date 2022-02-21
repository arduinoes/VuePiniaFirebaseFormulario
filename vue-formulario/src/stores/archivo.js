import { defineStore } from "pinia";
import { collection, query, limit, getDocs, orderBy } from "firebase/firestore";
import { db } from "../firebase";

export const almacen = defineStore({
  id: "main",
  state: () => ({
    obras: [],
  }),
  actions: {
    async obtenerDatos() {
      const first = query(collection(db, "obras"), orderBy("author"),limit (3));
      this.obras = [];
      const querySnapshot = await getDocs(first);
      querySnapshot.forEach((doc) => {
        let obra = doc.data();
        obra.id = doc.id;
        this.obras.push(obra);
        console.log(this.obras);
      });
    },
  },
});

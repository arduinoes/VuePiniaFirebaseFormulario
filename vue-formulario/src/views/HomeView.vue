<script setup>
import {onMounted, reactive } from 'vue'
import BaseCard from '../components/BaseCard.vue'
import Navbar from '../components/Navbar.vue';
import { collection, query, limit, getDocs, orderBy } from "firebase/firestore";
import { db } from "../firebase"

const obras = reactive([]);

async function obtenerObras () {
 const first = query(
    collection(db, "obras"),
    orderBy("author")
  );
  const querySnapshot = await getDocs(first);
  querySnapshot.forEach((doc) => {
    let obra = doc.data();
    obra.id = doc.id;
    obras.push(obra);
    console.log(obras);
  });}

onMounted(() => {
  obtenerObras()
})
</script>

<template>
<Navbar />
  <div class="row justify-content-center">
    <BaseCard
      class="col-4 m-2"
      v-for="obra in obras"
      :key="obra.id"
      :obra="obra"
    />
 </div>
</template>

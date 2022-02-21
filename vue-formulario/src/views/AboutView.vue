<script setup>
import { onMounted } from "vue";
import BaseTarjeta from "../components/BaseTarjeta.vue";
import Navbar from "../components/Navbar.vue";
import { almacen } from "../stores/archivo.js";

const store = almacen();

onMounted(() => {
  store.obtenerDatos();
});
</script>



<template>
  <div class="row justify-content-center">
    <Navbar />
    <BaseTarjeta
      class="col-4 m-2"
      v-for="obra in store.obras"
      :key="obra.author"
      :obra="obra"
    />
  </div>
</template>


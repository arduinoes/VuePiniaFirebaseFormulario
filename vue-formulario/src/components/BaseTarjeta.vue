<script setup>
defineProps({
  obra: {
    type: Object,
    required: true
  }
})
</script>
<template>
  <div class="card" style="width: 18rem">
    <img :src="obra.photo" class="card-img-top" alt="" />
    <div class="card-body">
      <h5 class="card-title">{{ obra.author }}</h5>
      <p class="card-text">
        {{ obra.title }}
      </p>
      <router-link class="btn btn-primary" :to="{ name: 'detalle', params: { id: obra.id }}">
        Leer mas 
      </router-link>
    </div>
  </div>
</template>

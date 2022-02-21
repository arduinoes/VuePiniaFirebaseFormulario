<script setup>
defineProps({
  obra: {
    type: Object,
  
  }
})
</script>
<template>
  <div v-if="obra" class="card" style="width: 50%">
    <img :src="obra.photo" class="card-img-top" alt="" />
    <div class="card-body">
      <h5 class="card-title">{{ obra.author }}</h5>
      <p class="card-text">{{ obra.title }}</p>
      <p class="card-text">{{ obra.date }}</p>
      <p class="card-text">{{ obra.synopsis }}</p>
      <p class="card-text">{{ obra.id }}</p>
      <p class="card-text">{{ obra.link}}</p>
      <p class="card-text">{{ obra.editoral}}</p>
      <p class="card-text">{{ obra.pelicula}}</p>
      <p class="card-text">{{ obra.comic}}</p>
      <p class="card-text">{{ obra.photo}}</p>
    </div>
  </div>
</template>

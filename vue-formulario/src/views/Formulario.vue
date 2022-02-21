<script setup>
import Navbar from '@/components/Navbar.vue'
import BaseInput from "../components/formulario/BaseInput.vue"
import BaseInputDate from "../components/formulario/BaseInputDate.vue"
import BaseTextArea from "../components/formulario/BaseTextArea.vue"
import BaseSeleccion from "../components/formulario/BaseSeleccion.vue"
import BaseCheckBox from "../components/formulario/BaseCheckBox.vue"
import BaseRadioButton from "../components/formulario/BaseRadioButton.vue"
import { onMounted } from 'vue';
import { memoria } from '../stores/formulario.js'

const datos = memoria()

onMounted(() => {
  datos.obtenerDatos()
})
</script>

<template>
  <div>
    <Navbar/>
  <div class="container my-4">
  <form>
    <BaseInput
      v-model="datos.obra.author"
      type="text"
      label="Autor"
    />
    <BaseInput
      v-model="datos.obra.title"
      type="text"
      label="Título"
    />
    <BaseInputDate
      v-model="datos.obra.date"
      type="date"
      label="Fecha"
    />
    <BaseTextArea
      v-model="datos.obra.synopsis"
      type="text"
      label="Descripción"
    />
    <BaseInput
      v-model="datos.obra.link"
      type="text"
      label="Enlace"
    />
    <BaseInput
      v-model="datos.obra.photo"
      type="text"
      label="Imagen"
    />
    <base-seleccion
    v-model="datos.obra.categoria"
    :opciones="datos.categorias"
    label="Selecciona una categoría"
  />
  <base-check-box
    v-model="datos.obra.pelicula" 
    label="Película"
    />
  <base-check-box
    v-model="datos.obra.comic" 
    label="Cómic"
    />
  <base-radio-button
  v-model="datos.obra.editorial"
  :value="0"
  label="DC Cómic"
  />
  <base-radio-button
  v-model="datos.obra.editorial"
  :value="1"
  label="Marvel"
  />
    <div class="input-group my-3">
      <input type="file" @change="datos.buscarImagen($event)">
    </div>

      <div class="mt-3">  
    <button v-show="datos.editar === true" 
      @click.prevent="datos.actualizarDato(id)" 
      class="btn btn-primary">
      Actualizar
    </button>
    <button v-show="datos.editar === false" 
      @click.prevent="datos.agregarDato()" 
      class="btn btn-primary">
      Guardar
    </button>
    <div class="mt-4">
      <img :src="datos.datoImagen">
    </div>

    </div>
  </form>
  </div>
<!-- ////////// tabla ////////// -->
  <table class="table">
    <thead>
      <tr>
        <th scope="col">id</th>
        <th scope="col">Author</th>
        <th scope="col">Fecha</th>
        <th scope="col">Editar</th>
        <th scope="col">Eliminar</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in datos.obras" :key="index">
        <th scope="row">{{index}}</th>
        <td>{{item.author}}</td>
        <td>{{item.date}}</td> 
        <td>
          <button @click.prevent="datos.obtenerDatoID( item.id );this.datos.editar = !this.datos.editar;" 
            class="btn btn-primary">Editar
          </button>
        </td>

        <td>
          <button @click.prevent="datos.eliminarDato(item.id)" 
            class="btn btn-danger">Eliminar
          </button>
      </td>
      </tr>
    </tbody>
  </table>
  </div>
</template>


<<<<<<< HEAD
<script setup>
import { ref } from "vue"
import { useRouter } from "vue-router"
import { crearUsuario } from "@/services/usuariosApi"

const router = useRouter()
const nuevoUsuario = ref("")
const nuevaPassword = ref("")
const nombre = ref("")
const isLoading = ref(false)
const error = ref("")
const exito = ref(false)

async function registrar() {
  isLoading.value = true
  error.value = ""
  exito.value = false

  try {
    const creado = await crearUsuario({
      username: nuevoUsuario.value,
      password: nuevaPassword.value,
      first_name: nombre.value,
    })

    if (creado) {
      exito.value = true
      // volvemos al login después de crear
      setTimeout(() => router.push("/"), 1500)
    }
  } catch (e) {
    error.value = "No se pudo crear el usuario: " + e.message
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <h1>Crear usuario</h1>

  <form @submit.prevent="registrar">
    <label for="nombre">Nombre</label>
    <input id="nombre" v-model="nombre" type="text" />

    <label for="nuevoUsuario">Usuario</label>
    <input id="nuevoUsuario" v-model="nuevoUsuario" type="text" />

    <label for="nuevaPassword">Contraseña</label>
    <input id="nuevaPassword" v-model="nuevaPassword" type="password" />

    <button type="submit" :disabled="isLoading">Crear cuenta</button>
  </form>

  <p v-if="error">{{ error }}</p>
  <p v-if="exito">¡Usuario creado! Redirigiendo al login...</p>
=======
<template>
  <h1>Crear usuario</h1>

  <form>
    <label for="nuevoUsuario">Usuario</label>
    <input id="nuevoUsuario" type="text" />

    <label for="nuevaPassword">Contraseña</label>
    <input id="nuevaPassword" type="password" />

    <button type="submit">Crear cuenta</button>
  </form>
>>>>>>> 46c57bb7f2762c17d222688b4930940a9a55777f
</template>
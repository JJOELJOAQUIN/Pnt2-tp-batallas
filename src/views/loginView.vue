<script setup>
import { ref } from "vue"
import { useRouter } from "vue-router"
import { validarLogin } from "@/services/usuariosApi"

const router = useRouter()
const usuario = ref("")
const password = ref("")
const isLoading = ref(false)
const error = ref("")
const loginExitoso = ref(false)

async function iniciarSesion() {
  isLoading.value = true
  error.value = ""
  loginExitoso.value = false

  try {
    // validamos contra los usuarios mockeados en Mockachino
    const usuarioValido = await validarLogin(usuario.value, password.value)

    if (usuarioValido) {
      loginExitoso.value = true
      localStorage.setItem("isLoggedIn", "true")
      localStorage.setItem("usuario", usuarioValido.first_name)
      // redirige a la selección de pokemon
      router.push("/seleccionPokemon")
    } else {
      error.value = "Usuario o contraseña incorrectos."
    }
  } catch (e) {
    error.value = "Error al conectar con el servidor: " + e.message
  } finally {
    isLoading.value = false
  }
}

function irACrearUsuario() {
  router.push("/crearUsuario")
}
</script>

<template>
  <h1>Iniciar sesión</h1>

  <form @submit.prevent="iniciarSesion">
    <label for="usuario">Usuario</label>
    <input id="usuario" v-model="usuario" type="text" />

    <label for="password">Contraseña</label>
    <input id="password" v-model="password" type="password" />

    <button type="submit" :disabled="isLoading">
      Ingresar
    </button>

    <button type="button" @click="irACrearUsuario">
    Crear usuario
    </button>


  </form>

  <p v-if="error">{{ error }}</p>
  <p v-if="loginExitoso">¡Bienvenido, {{ usuario }}!</p>
</template>
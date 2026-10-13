// este service consume el mock de usuarios creado en Mockachino.
// Mockachino es un servidor mock HTTP: devuelve respuestas fijas que definimos en su web.
// usamos fetch nativo igual que en pokemonApi.js.

const BASE_URL = "https://www.mockachino.com/e4fa15ce-ade0-45"

// obtiene la lista de usuarios mockeados (GET /users)
// la respuesta viene como { users: [...] }, por eso devolvemos data.users
export async function obtenerUsuarios() {
  const respuesta = await fetch(`${BASE_URL}/users`)

  if (!respuesta.ok) {
    throw new Error("No se pudieron obtener los usuarios")
  }

  const data = await respuesta.json()
  return data.users
}

// valida credenciales contra la lista de usuarios del mock
// devuelve el usuario si coincide username+password, o null si no
export async function validarLogin(username, password) {
  const usuarios = await obtenerUsuarios()
  const encontrado = usuarios.find(
    (u) => u.username === username && u.password === password
  )
  return encontrado || null
}

// simula la creación de un usuario (POST /users)
// Mockachino no persiste, pero devuelve la respuesta mock que configuramos
export async function crearUsuario(nuevoUsuario) {
  const respuesta = await fetch(`${BASE_URL}/users`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(nuevoUsuario),
  })

  if (!respuesta.ok) {
    throw new Error("No se pudo crear el usuario")
  }

  return await respuesta.json()
}
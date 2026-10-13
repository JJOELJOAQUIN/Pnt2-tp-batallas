// este método consume la api de pokeapi para obtener la imagen y los datos de un pokemon dado su nombre.
// el fetch es nativo de javascript y nos permite hacer peticiones HTTP a un servidor.


export async function obtenerDatosPokemon(nombrePokemon) {
  const respuesta = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${nombrePokemon.toLowerCase()}`
  )

  if (!respuesta.ok) {
    throw new Error("No se pudo encontrar al Pokémon: " + nombrePokemon)
  }

  const datosPokemon = await respuesta.json()

  return datosPokemon
}
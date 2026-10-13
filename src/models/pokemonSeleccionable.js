const tiposEnEspanol = {
  fire: "fuego",
  water: "agua",
  electric: "electrico",
  grass: "planta"
};



export class PokemonSeleccionable {

    // --- CONSTRUCTOR DE LA CLASE ---
    constructor(datosPokemon, ataquesDisponibles = []) {
        this.id = `pokemon_${datosPokemon.name}`;
        this.nombre = this.formatearNombre(datosPokemon.name);
        this.tipo = this.obtenerTipoTraducido(datosPokemon);
        this.vidaMaxima = this.obtenerEstadistica(datosPokemon, "hp");
        this.ataque = this.obtenerEstadistica(datosPokemon, "attack");
        this.defensa = this.obtenerEstadistica(datosPokemon, "defense");
        this.velocidad = this.obtenerEstadistica(datosPokemon, "speed");
        this.ataquesDisponibles = ataquesDisponibles;
       this.imagen = this.obtenerImagen(datosPokemon);
    }

  // --- MÉTODOS AUXILIARES DE LA CLASE ---

  // 1. Pone la primera letra en mayúscula
  formatearNombre(nombre) {
    return nombre.charAt(0).toUpperCase() + nombre.slice(1);
  }

  // 2. Traduce el tipo usando el diccionario
  obtenerTipoTraducido(datosPokemon) {
    const tipoIngles = datosPokemon.types[0].type.name;
    let tipoTraducido = tiposEnEspanol[tipoIngles];

    if (tipoTraducido === undefined) {
      tipoTraducido = tipoIngles;
    }

    return tipoTraducido;
  }

  // 3. Busca una estadística específica de forma segura
  obtenerEstadistica(datosPokemon, nombreStat) {
    const estadistica = datosPokemon.stats.find(dato => dato.stat.name === nombreStat);

    if (estadistica === undefined) {
      return 0; // Valor por defecto si no se encuentra
    }

    return estadistica.base_stat;
  }

  // 4. Obtiene la imagen oficial con respaldo
  obtenerImagen(datosPokemon) {
    const arteOficial = datosPokemon.sprites.other?.['official-artwork']?.front_default;

    if (arteOficial !== undefined && arteOficial !== null) {
      return arteOficial;
    }

    return datosPokemon.sprites.front_default;
 }
}
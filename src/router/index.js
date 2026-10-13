import { createRouter, createWebHistory } from 'vue-router'

//router es el array de rutas que va a tener la app, cada ruta tiene un path y un componente asociado


const routes = [
<<<<<<< HEAD
    {
        path: '/',
        component: () => import('../views/loginView.vue'),
        meta: { title: 'Login' }
    },
    {
        path: '/crearUsuario',
        component: () => import('../views/crearUsuario.vue'),
        meta: { title: 'Crear Usuario' }
    },
    {
        path: '/seleccionPokemon',
        component: () => import('../views/seleccionPokemonView.vue'),
        meta: { title: 'Seleccionar Pokémon', requiresAuth: true }
    }
=======
  {
    path: '/',
    component: () => import('../views/loginView.vue'),
    meta: { title: 'Login' }
  },
  {
    path: '/crearUsuario',
    component: () => import('../views/crearUsuario.vue'),
    meta: { title: 'Crear Usuario' }
  },
  {
    path: '/seleccionPokemon',
    component: () => import('../views/seleccionPokemonView.vue'),
    meta: { title: 'Seleccionar Pokémon', requiresAuth: true }
  }
>>>>>>> 46c57bb7f2762c17d222688b4930940a9a55777f
]

// el objeto router es el que se va a pasar a la app para que pueda usar las rutas definidas
// usa el método createRouter para crear el router,
//  y le pasamos el array de rutas y el historial de navegación (createWebHistory)

const router = createRouter({
<<<<<<< HEAD
    history: createWebHistory(),
    routes: routes
=======
  history: createWebHistory(),
  routes: routes
>>>>>>> 46c57bb7f2762c17d222688b4930940a9a55777f
})


// el método beforeEach se ejecuta antes de cada navegación, y nos permite hacer validaciones antes de cambiar de ruta
// en este caso, vamos a intentar usar el título con el que la página viene definida en el meta de la ruta, y si no tiene título, le ponemos un título por defecto 'Batallas Pokémon'
//  además vamos a validar si el usuario está logueado antes de permitirle acceder a ciertas rutas

router.beforeEach((to) => {
    console.log('Navegando a: ' + to.path)
<<<<<<< HEAD

    // título de la pestaña
    document.title = to.meta.title ? to.meta.title : 'Batallas Pokémon'

    const estaLogueado = localStorage.getItem('isLoggedIn') === 'true'

    // si la ruta requiere auth y no está logueado -> al login
    if (to.meta.requiresAuth && !estaLogueado) {
        return '/'
    }

    // si ya está logueado y quiere ir al login -> directo a seleccionar pokemon
    if (to.path === '/' && estaLogueado) {
        return '/seleccionPokemon'
    }
})

export default router
=======
    if (to.meta.title) {
        document.title = to.meta.title        
    } else {
        document.title = 'Batallas Pokémon'
    }
    const estaLogueado = localStorage.getItem('isLoggedIn') === 'true'
    if (to.meta.requiresAuth && !estaLogueado) {
        return('/')
    }
   
       
    })

    export default router
>>>>>>> 46c57bb7f2762c17d222688b4930940a9a55777f

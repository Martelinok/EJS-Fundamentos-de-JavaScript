const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

<<<<<<< HEAD
=======


>>>>>>> master
const Opts = {
  crossDomain: true
}

<<<<<<< HEAD
function obtenerPersonaje(id, callback) {
  const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`

  $.get(url, Opts, callback).fail(()=> {
    console.log(`Ocurrio un error, No se pudo obtener el personaje ${id}`);
  })
}

obtenerPersonaje(1, function(personaje) {
  console.log(`Hola, yo soy ${personaje.name}`);

  obtenerPersonaje(2, function(personaje) {
    console.log(`Hola, yo soy ${personaje.name}`);

    obtenerPersonaje(3, function(personaje) {
      console.log(`Hola, yo soy ${personaje.name}`);

      obtenerPersonaje(5, function(personaje) {
        console.log(`Hola, yo soy ${personaje.name}`);

        obtenerPersonaje(6, function(personaje) {
          console.log(`Hola, yo soy ${personaje.name}`);

          obtenerPersonaje(7, function(personaje) {
            console.log(`Hola, yo soy ${personaje.name}`);

            obtenerPersonaje(8, function(personaje) {
              console.log(`Hola, yo soy ${personaje.name}`);

              obtenerPersonaje(9, function(personaje) {
                console.log(`Hola, yo soy ${personaje.name}`);

                obtenerPersonaje(10, function(personaje) {
                  console.log(`Hola, yo soy ${personaje.name}`);

                })
              })
            })
          })
        })
      })
    })
  })
})
=======
function obtenerPersonaje(id) {
  return new Promise((resolve, reject) => {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $
    .get(url, Opts, (data) => {
      resolve(data)
    })
    .fail(() => reject(id))

  })

}

function onError(id){
  console.log(`Sucedio un error al obtener el personaje ${id}`);
}
obtenerPersonaje(1)
  .then((personaje)=> {
    console.log(`El personaje 1 es:  ${personaje.name}`);
  })
  .catch(onError)
>>>>>>> master

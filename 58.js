//Objetos
//Ejercicio 1
const user = {
    firstName: "Mariana",
    lastName: "Cairo",
    email: "micorreo@gmail.com",
    age: 26
};
console.log(user);
console.log(`Hola mi nombre es ${user.firstName} y tengo ${user.age} años.`)

//Ejercicio 2
const usuarioAda = {
    id: 1,
    email: "ada@gmail.com",
    nombre: "Ada Lovelace",
    teléfono: "1234567890"
}
const usuarioGrace = {
    id: 2,
    email: "grace@hotmail.com",
    nombre: "Grace Hopper",
    teléfono: "0987654321"
}
const usuarioHedy = {
    id: 3,
    email: "hedy@gmail.com",
    nombre: "Hedy Lamarr",
    teléfono: "6789054321"
}
const usuarioRadia = {
    id: 4,
    email: "radia@yahoo.com",
    nombre: "Radia Perlman",
    teléfono: "1234509876"
}
const usuarioSheryl = {
    id: 5,
    email: "sheryl@facebook.com",
    nombre: "Sheryl Sandberg",
    teléfono: "5432167890"
}
console.log(usuarioAda)
console.log(usuarioGrace)
console.log(usuarioHedy)
console.log(usuarioRadia)
console.log(usuarioSheryl)

//Ejercicio 3
console.log("El nombre de Ada es: " + usuarioAda.nombre)
console.log("El ID de Grace es: " + usuarioGrace.id)
console.log("El email de Hedy es: " + usuarioHedy.email)
console.log(`El ID de Radia es ${usuarioRadia.id} y el nombre de Radia es ${usuarioRadia.nombre}`)
console.log(`El teléfono de Sheryl es: ${usuarioSheryl.teléfono}`)

//Ejercicio 4
const disco = {
  id: 1,
  nombre: 'Wasting Light',
  anioLanzamiento: 2011,
  cantidadDeTemas: 12,
  banda: {
    nombre: 'Foo Fighters',
    anioFormacion: 1994
  }
};
console.log(`El disco ${disco.nombre} de la banda ${disco.banda.nombre} se lanzó en el año ${disco.anioLanzamiento}`)

//Ejercicio 5
user.sabeProgramar = true
user.tecnologiasConocidas = ["HTML", "CSS", "JAVASCRIPT", "SASS"]
console.log(user)

//Ejercicio 6
/*const mostrarTecnologias = usuario => {
    if (usuario.sabeProgramar) {
        console.log(`Hola, mi nombre es ${usuario.firstName} y programo en ${usuario.tecnologiasConocidas}`)
    }
}
mostrarTecnologias (user)*/

const mostrarTecnologias = usuario => usuario.sabeProgramar && console.log(`Hola, mi nombre es ${usuario.firstName} y programo en ${usuario.tecnologiasConocidas}`)
mostrarTecnologias (user)

//Ejercicio 7
user.tecnologiasConocidas.push("Próximamente DOM")
console.log(user)

//Ejercicio 8
const newUser = {
    name: {
        first: user.firstName,
        last: user.lastName
    },
    email: user.email,
    age: user.age,
    sabeProgramar: user.sabeProgramar,
    tecnologiasConocidas: user.tecnologiasConocidas,
  
}
console.log(newUser)

//Ejercicio 9
const ganadoras = [
  {
    nombre: 'Bebe Zahara Benet',
    temporada: '1',
    foto: 'http://www.nokeynoshade.party/images/bebe-zahara-benet.jpg'
  },
  {
    nombre: 'Tyra Sanchez',
    temporada: '2',
    foto: 'http://www.nokeynoshade.party/images/tyra-sanchez.jpg'
  },
  { nombre: 'Raja',
    temporada: '3',
    foto: 'http://www.nokeynoshade.party/images/raja.jpg'
  },
  {
    nombre: 'Sharon Needles',
    temporada: '4',
    foto: 'http://www.nokeynoshade.party/images/sharon-needles.jpg'
  },
  {
    nombre: 'Jinkx Monsoon',
    temporada: '5',
    foto: 'http://www.nokeynoshade.party/images/jinkx-monsoon.jpg'
  },
  {
    nombre: 'Bianca Del Rio',
    temporada: '6',
    foto: 'http://www.nokeynoshade.party/images/bianca-del-rio.jpg'
  }
];

const mostrarGanadoras = objetoGanador => {
    for (let i = 0; i < objetoGanador.length; i++) {
        console.log(`${objetoGanador[i].nombre} ganó la temporada ${objetoGanador[i].temporada}`) 
    }
}
mostrarGanadoras(ganadoras)

//Ejercicio 10
const nevermind = [
  { id: 1, nombre: "Smells Like Teen Spirit", duracion: 302 },
  { id: 2, nombre: "In Bloom", duracion: 255 },
  { id: 3, nombre: "Come As You Are", duracion: 219 },
  { id: 4, nombre: "Breed", duracion: 184 },
  { id: 5, nombre: "Lithium", duracion: 257 }
];

const calcularDuracionTotal = cancionesDisco => {
    let acc = 0;
    for (let i = 0; i < cancionesDisco.length; i++) {
        acc = acc + cancionesDisco[i].duracion
        
    }
   return acc
}

console.log(`La duración total del disco es de ${calcularDuracionTotal(nevermind)} segundos`)

const calcularPromedioPorCancion = promedio => {
    let tiempopromedio = calcularDuracionTotal(promedio) / promedio.length
    return tiempopromedio
}
console.log(`La duración promedio por canción es de ${calcularPromedioPorCancion(nevermind)} segundos.`)


//Ejercicio 11
/*Tenemos un array de objetos, que representa un listado de bandas
Cada objeto representa una banda, y tiene las propidades id, nombre, fundacion, activa
Crear una funcion que muestre en consola cada banda del array, con la siguiente lógica:
Si la banda está activa mostrar el mensaje: "[NOMBRE DE LA BANDA] está activa desde el año [AÑO DE FUNDACIÓN]"
Si la banda NO está activa mostrar el mensaje: "[NOMBRE DE LA BANDA] no está activa"
const bandas = [
  { id: 1, nombre: "Nirvana", fundacion: 1987, activa: false },
  { id: 2, nombre: "Foo Fighters", fundacion: 1994, activa: true },
  { id: 3, nombre: "Led Zeppelin", fundacion: 1967, activa: false },
  { id: 3, nombre: "Queens of the Stone Age", fundacion: 1997, activa: true },
  { id: 3, nombre: "Pearl Jam", fundacion: 1990, activa: true },
];

///// RESULTADO
// Nirvana no está activa
// Foo Fighters está activa desde el año 1994
// Led Zeppelin no está activa
// Queens of the Stone Age está activa desde el año 1997
// Pearl Jam está activa desde el año 1990*/
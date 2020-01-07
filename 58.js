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
const mostrarTecnologias = (sabeProgramar, tecnologiasConocidas) => {
    if (sabeProgramar === true) {
        console.log(`Hola, mi nombre es ${user.firstName} y programo en ${tecnologiasConocidas}`)
    }
}
console.log(mostrarTecnologias())

//Ejercicio 6
//const mostrarTecnologias = (sabeProgramar, tecnologiasConocidas) => sabeProgramar === true && console.log(`Hola, mi nombre es ${user.firstName} y programo en ${tecnologiasConocidas}`)
 
//console.log(mostrarTecnologias())
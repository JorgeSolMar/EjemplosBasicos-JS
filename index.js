

//---------------------------EJEMPLO DE USOS DE ARREGLOS
// Ejemplo de "for" con arreglos
// let arreglo = [1,5,10,"ignacio",true];
// console.log(arreglo);

// for( i=0; i<5; i++){
//     console.log(arreglo[i]);
// }


//---------------------------Ejemplo de while en arreglos
// // let i = 0;
// // while (i<10) {
// //     console.log(i);
// //     i = i +2;
// }


//---------------------------Do While
// let i = 0;
// do{
//     console.log(i);
//     i++
// }while(i<0);


//---------------------------Switch
// let hora = 1;

//---------------------------switch(hora){
//     case 10: 
//         console.log('Son las 10 de la ma;ana');
//         break;
//     case 15:
//         console.log('Son las 15 de la tarde');
//         break;
//     default:
//         console.log('no tengo saludos a esa hora');
//         break;
// }


//---------------------------FUNCIONES

// function suma(a,b){
//     return console.log(a+b);
// }
// suma(100,900);

// function sum(num) {
//     console.log (num)

// }
// sum(25)

// const suma2 = (num) => {
//     return (num)
// }
// console.log(suma2(30));

// const mensaje = (nombre) => {
//     return 'hola soy '+ nombre
// }
// const resultadoDos = mensaje('Juanito')

// console.log(resultadoDos)

// const sumaTres = (num=0) => {
//     console.log(num + 3)
// }
// sumaTres()

//---------------------------FUNCION ARROW, funcion de flecha

// let sumaId = document.getElementById('suma');
// let sumar = (num1, num2) => num1 + num2;

// sumaId.innerHTML += sumar(10, 20);


//---------------------------FUNCION INMEDIATAMENTE AUTOINVOCATIVA IIFE
//Se inician con parentesis y al final se abren y cierran parentesis nuevamente para autoinvocarse.

// (function suscribe (nombre){
//     console.log(`Hola por favor suscribete ${nombre}`);
// })('Juanito');

(suscribete = (nombre) => {
    console.log(`Hola por favor suscribete ${nombre}`);

})('Jorge');


//---------------------------TEMPLATE STRING

// const numero = (num) => {
//     return `El numero es: ${num}`
// }
// const result = numero(10)
// console.log(result)

// const numeroDos = num => `El numero es: ${num}`
// console.log(numeroDos(25))

//---------------------------OBJETOS

// const mascota = {
//     nombre: 'Tom',
//     edad: 10,
//     vivo: true
// }
// console.log(mascota)
// console.log(mascota.nombre)
// console.log(mascota.edad)
// console.log(mascota.vivo)

// mascota.raza = 'pastor';

// console.log(mascota)
// console.log(mascota.raza)

// mascota.arreglo = [10,20,30,40];

// console.log(mascota)

// //DESTRUCTURANDO OBJETOS
// const mascota = {
//     nombre: 'Tom',
//     edad: 10,
//     vivo: true
// }

// const nombreMascota = mascota.nombre
// // console.log(nombreMascota)


// const {edad, vivo, nombre} = mascota
// // console.log(vivo)

// const web = {
//     nombre: 'bluweb',
//     links: {
//         enlace: 'www.blueweb.com',
//     },
//     redesSociales: {
//         youtube: {
//             enlace: 'youtube.com/blueweb',
//             nombre: 'bluuweb yu',
//         }
//     }
// }
// let texto = web.redesSociales.youtube.enlace
// console.log(texto)
// console.log(web.redesSociales.youtube.enlace)

//---------------------------DOM CON JAVASCRIPT
// let h1 = document.getElementById('titulo');
// console.log(h1.innerHTML)
// h1.innerHTML = 'Un nuevo texto';
// h1.style.color = 'red';
// h1.style.background = 'blue';

// // let parrafo = document.getElementById('parrafo');


// let boton = document.getElementById('boton');

// function cambiar () {
//     parrafo.style.color = 'olive';
// }
// boton.onclick = cambiar;

// let parrafos = document.querySelectorAll('p');
// console.log(parrafos[1]);

// let boton = document.getElementById('boton');
//     boton.addEventListener('mouseover', function(){
//     console.log('he detectado el raton');
//         boton.addEventListener('mouseout', function(){
//         console.log('adios raton');
    
//     })
// })


// //for of para desarrollar los arreglos/objetos
// let arreglo = [
//     {
//         nombre: 'Jorge',
//         apellido: 'Solis'
//     },
//     {
//         nombre: 'Ale',
//         apellido: 'Flores'
//     },
//     {
//         nombre: 'Benito',
//         apellido: 'Solis'
//     },
//     {
//         nombre: 'Daniel',
//         apellido: 'Solis'
//     }
// ]
// // console.log(arreglo[0]);
// // console.log(arreglo[1]);
// // console.log(arreglo[2]);
// // console.log(arreglo[3]);

// for (let i of arreglo){
//     console.log(i);
// }

















//Bienvenido a mi primer-preentrega

console.log("Poner la edad de la mascota");

let edadMascota = prompt("¿Que edad tiene tus mascotas");

  if (edadMascota < 20) {

    //si la edad de la mascota es mas que 0 se puede tratar.

    alert("Buenvenido por favor llene los datos.");

    console.log("Edad de la mascota es " + edadMascota);

  } 
  else {

    //no te dejaria abrir la pagina si supera los 20 años

    alert(

      "Lo siento no podemos tratar a tu mascota, no tenemos las herramientas necesaria y no queremos una mala praxis. Intenten entendernos. Muchas gracias y que tengas y lindo dia."

    );

  }

  // cantidad de estudios que se quiere hacer.
// Cuantos estudios quiere hacer
 let cantAnalisis = parseInt(prompt("¿Cuantos analisis quieres hacer?"));
 if (cantAnalisis <=5) {
    alert("La cantidad de analisis es " + cantAnalisis);
 }
 else{
    alert("La cantidad de estudios supera la cantidad. Lo maximo es 4. Ante cualquier duda entre a consulta para ver los tipos. Gracias");
 }


 // Pondra los analisis.
for (let analisis = 1; analisis <=cantAnalisis; analisis++) {
    let tipoanalisis = prompt("¿Cual es el  analisis " + analisis + "?");
    alert("analisis de " + tipoanalisis + " agendado ");
};

// Caracteristicas de paciente

function mascota(nombre, edad, tamaño, genero) {
    this.nombre = nombre;
    this.edad = edad;
    this.tamaño = tamaño;
    this.genero = genero;
}

let mascotauno = new mascota("Roque", 17, "grande", "macho");
console.log("Datos de mascota 1");
let mascotados = new mascota("zuqui", 3,"chico", "hembra");
console.log("Datos de mascota 2");

// precios

let precio = cantAnalisis * 4000;
console.log("El precio es de " + precio);

// si contiene cobertura medica tiene 50% de descuento

let coberturaMedica = precio /2;

console.log("Si contiene cobertura medica le saldria un descuento de 50% y su precio seria " + coberturaMedica);

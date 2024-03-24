/*Crea una función llamada findArrayIndex que reciba como parametros un array de textos 
//y un texto y devuelve la posición del array cuando el valor del array sea igual al valor del texto
//que enviaste como parametro. Haz varios ejemplos y compruebalos.

//Sugerencia de función:
function findArrayIndex(array, text) {
  return array.indexOf(text);
}

Ej array:*/

const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];

console.log(findArrayIndex(mainCharacters, "Anakin"));
console.log(findArrayIndex(mainCharacters, "Leia"));
console.log(findArrayIndex(mainCharacters, "Rey"));
console.log(findArrayIndex(mainCharacters, "Falete"));
console.log("------------------------------------")


/*Otro*/

const findArrayIndex = (array, text) => {
  return array.indexOf(text);
}

console.log(findArrayIndex(mainCharacters, "Chewbacca"));
console.log(findArrayIndex(mainCharacters, "Darth Vader"));

/*EJERCICIO 13_Usando la función anterior beneficiate de poder conocer el indice del array 
para crear una función llamada removeItem que pasandole un array y un texto 
como parametros (los mismos parametros que en el anterior ejercicio) llame a 
la función anteriormente creada findArrayIndex y obten el indice para 
posteriormente usar la función de javascript .splice() para eliminar el 
elemento del array.

Finalmente retorna el array.

De nuevo haz varios ejemplos para practicar y comprueba que funcionan 
correctamente.*/

const removeItem = (array, text) => {
  const index = findArrayIndex(array, text);
  if (index !== -1) {
    array.splice(index, 1); // Elimina 1 elemento en la posición index
  }
  return array;
}

console.log(removeItem(mainCharacters, "Leia"));
console.log(removeItem(mainCharacters, "Darth Vader"));

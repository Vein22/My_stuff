

// 1) Programa una función que cuente el número de caracteres de una cadena de texto,
//  pe. miFuncion("Hola Mundo") devolverá 10.

// function contarCaracteres(cadena = "") {
//     if(!cadena) {
//         console.warn("No ingresaste ninguna cadena");
//     } else {
//         console.info(`la cadena "${cadena}" tiene ${cadena.length} caracteres`)
//     } 
// };

/*const contarCaracteres=(cadena = "") =>
    (!cadena)
        ?console.warn("No ingresaste ninguna cadena")
       :console.info(`la cadena "${cadena}" tiene ${cadena.length} caracteres`)*/

function miFuncion(texto){
    let separado = texto.length;
    return separado;
    }

// 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, 
// pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

// const contarCaracteres=(cadena="",longitud=undefined) =>
// (!cadena)
//     ?console.warn("No ingresaste ninguna cadena")
//     :(longitud === undefined)
//      ?console.warn("No ingresaste la longitud a cortar")
//      :console.log(cadena.slice(0,longitud))

function miFuncion(cadena, separador) {
    let separado = cadena.split("",separador);
    let resultado = separado.join("");
    return resultado;
};


// 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, 
// pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
function miFuncion(cadena, caracter) {
    let separado = cadena.split(caracter);
    return separado;
};


// 4) Programa una función que repita un texto X veces, 
// pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.


// let array = [];
// const repetirTexto=(texto="",veces=undefined) => {
//        if(!texto) return ("No ingresaste ningun texto");
//        if(veces === undefined) return console.warn("No ingresaste las veces a repetir el texto");
//        if(veces === 0) return console.warn("El número de veces a repetir no puede ser '0'");
//        if(Math.sign(veces) === 0) return console.warn("El número de veces a repetir no puede ser negativo");
//                for(let i=0;i<veces;i++) array.push(texto);
//                return array.join(" ");
//       }

function miFuncion(texto,num) {
    let array = [];
    for(let i=0;i<num;i++) {
        array.push(texto);
    }
    return array.join(" ");
};

// 5) Programa una función que invierta las palabras de una cadena de texto,
//  pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".

const revertirTexto=(texto="")=> {
    (!texto)
     ?console.warn("No ingresaste ningun texto")
     :(typeof texto === "number")
        ?console.warn("Solo texto, no numeros")
        :console.info(texto.split("").reverse().join(""));
} 

// const revertirTexto=(texto="")=> {
//     if(!texto) return console.warn("No ingresaste ningun texto");
//     if(typeof texto === "number") return console.warn("Solo texto, no numeros");
//     console.info(texto.split("").reverse().join(""))
// } 

// 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, 
// pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.

const contarPalabras=(texto="",palabra="")=>{
    if(!texto) return console.warn("No se ingreso texto");
    if(!palabra) return console.warn("No se ingreso la palabra a contar");
    
     let acc = 0;
     let array = texto.replace(/[^a-zA-Z0-9\s]/g, "").split(" "); 
    
     palabra = palabra.toLowerCase();
    
     for(let i=0;i<array.length;i++) {
        if(array[i].toLowerCase() === palabra) {
            acc++;
        }
     }
    return console.log(`la palabra "${palabra}" se repite la cantidad de ${acc} veces.`);
    }

// 7) Programa una función que valide si una palabra o frase dada, es un palíndromo
//  (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.


const palindromo=(palabra="")=>{
    if(!palabra) return console.warn("No se ingreso la palabra");
     
    palabra = palabra.toLocaleLowerCase();
    let array = palabra.split('').reverse().join('');
        return (palabra === array)
        ?console.info(`Es palindromo, palabra original "${palabra}" palabra al reves "${array}"`)
        :console.info(`No es palindromo,  palabra original "${palabra}" palabra al reves "${array}"`);
        }

// const palindromo=(palabra="")=>{
//     if(!palabra) return console.warn("No se ingreso la palabra");
    
//     palabra = palabra.toLocaleLowerCase();
//     let array = palabra.split('').reverse().join('');
//         if(palabra === array){
//         return console.info("Es palindromo");
//         }
//         return console.info("No es");
//         }

// 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, 
// pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
 
const eliminarCaracter=(texto="",patron="")=> 
(!texto)
  ?console.warn("No ingresaste el texto a modificar")
  :(!patron) 
  ?console.warn("No ingresaste el caracter o patron a eliminar")
  :console.info(texto.replace(new RegExp(patron, 'ig'), ""))

// const eliminarCaracter=(texto="",patron="")=> {

//     if(!texto) return console.warn("No ingresaste el texto a modificar");
//     if(!patron) return console.warn("No ingresaste el caracter o patron a eliminar");
    
//     texto = texto.replace(new RegExp(patron, 'ig'), "");
//     console.log(texto);
//     }    

//         const eliminarCaracter=(texto="",patron="")=> {

//        if(!texto) return console.warn("No ingresaste el texto a modificar");
//        if(!patron) return console.warn("No ingresaste el caracter o patron a eliminar");

// let caracterAEliminar = patron.length;

// while(caracterAEliminar--) {
//    if (texto.indexOf(patron[caracterAEliminar])!=-1) {
//        texto = texto.replace(new RegExp(patron, 'ig'), "");
//    }
// }
// console.log(texto);
// }

// 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
 
// 10) Programa una función que reciba un número y evalúe si es capicúa o no 
// (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.

const capicúa=(num="")=> {
    if(!num) return console.warn("No se ingreso numero");
    if(typeof num !== "number") return console.error(`El valor "${num}" no es un numero`)

num = num.toString()
let array = num.split('').reverse().join('');
        return (num === array)
        ?console.info(`El numero ${num} es capicúa`)
        :console.info(`El numero ${num} no es capicúa`)
}


// 11) Programa una función que calcule el factorial de un número 
// (El factorial de un entero positivo n, se define como el producto de todos los números 
//     enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.
   
// const numeroFactorial=(num=undefined)=> {
//     if (num===undefined) return console.warn("No ingreso numero alguno");
//     if(typeof num !== "number") return console.error(`El valor "${num}" no es un numero`)
//     if (num < 0) return console.warn("No numeros negativos");
//     if (num === 0) return console.info(`El factorial de "0" es: "1"`);
    
//     let factorial = 1;
//     for(let i = num; i>1; i--){
//            factorial = factorial * i;
//        }
//        return console .info(`El factorial de "${num}" es: "${factorial}"`);
//   }
  

const numeroFactorial=(num=undefined)=> {
    if (num===undefined) return console.warn("No ingreso numero alguno");
    if(typeof num !== "number") return console.error(`El valor "${num}" no es un numero`)
    if (num < 0) return console.warn("No numeros negativos");
    if (num === 0) return console.info(`El factorial de "0" es: "1"`);
    else return console.info(`El factorial de "${num}" es: "${factorNumber(num)}"`);
}
  const factorNumber=(num)=> {
    if (num === 0) return 1;
    else return (num * factorNumber(num - 1));
  }
  
// 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) 
// o no, pe. miFuncion(7) devolverá true.


const esPrimo=(num=undefined)=> {
    if (num===undefined) return console.warn("No ingreso numero alguno");
    if(typeof num !== "number") return console.error(`El valor "${num}" no es un numero`)
    if(num===2) return console.info('El numero "2" es primo')
    if(num<2) return console.info(`El numero "${num}" no es Primo`)
    for(let i=2;i<num;i++) 
        if(num % i === 0) 
               return console.info(`El numero "${num}" no es Primo`);
               else return console.info(`El numero "${num}" es Primo`)
}

// 13) Programa una función que determine si un número es par o impar,
//  pe. miFuncion(29) devolverá Impar.

const esPar=(num=undefined)=> {
    if (num===undefined) return console.warn("No ingreso numero alguno");
    if(typeof num !== "number") return console.error(`El valor "${num}" no es un numero`);
    if(num%2 ===0) 
    return console.info(`El numero "${num}" es Par`)
    else return console.info(`El numero "${num}" es Impar`)
}
// o
// return(num%2 ===0) 
// ?console.info(`El numero "${num}" es Par`)
// :console.info(`El numero "${num}" es Impar`)


// 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, 
// pe. miFuncion(0,"C") devolverá 32°F.

const celciusFahrenheit=(num=undefined, unidad=undefined)=> {
    if (num===undefined) return console.warn("No ingreso numero alguno");
    if(typeof num !== "number") return console.error(`El valor "${num}" no es un numero`);
    if (unidad===undefined) return console.warn("No ingreso ninguna unidad");
    if(typeof unidad !== "string") return console.error(`El valor "${unidad}" no es una unidad valida`);
    if(unidad.length !== 1 || !/(C|F)/.test(unidad)) return console.warn(`Valor de unidad no valido`);
    if(unidad==="C"){
         console.info(`La temperatura ingresada de ${num}° Celcius equivale a ${Math.floor(num * (9/5) + 32)}° Fahrenheit`);   
      }else if(unidad==="F"){
          console.info(`La temperatura ingresada de ${num}° Fahrenheit equivale a ${Math.floor((num - 32) * 5/9)}° Celcius`);   
      }
  }   
  (celciusFahrenheit(100,"F"));

// 15) Programa una función para convertir números de base binaria a decimal y viceversa, 
// pe. miFuncion(100,2) devolverá 4 base 10.

const convertBase = (valor, unidad) => {
    //validaciones
    if (valor===undefined) return console.warn("No ingreso numero alguno");
    if(typeof valor !== "number") return console.error(`El valor "${valor}" no es un numero`);
    if (unidad===undefined) return console.warn(`El valor "${unidad}" no es una unidad valida`);
    if(typeof unidad !== "string") return console.error(`El valor "${unidad}" no es una unidad valida`);    
    // Convertir de binario a decimal
    if (unidad === "B") {
    const binaryString = valor.toString();
    let decimalNumber = 0;
    for (let i = 0; i < binaryString.length; i++) {
        decimalNumber += parseInt(binaryString[i]) * 2 ** (binaryString.length - 1 - i);
    }
    return console.info(`El binario "${valor}" equivale a: "${decimalNumber}" en base decimal`);   
    // Convertir de decimal a binario
} else if (unidad === "D") {
    let binaryString = "";
    let number = valor;
    while (valor > 0) {
        binaryString = (valor % 2) + binaryString;
        valor = Math.floor(valor / 2);
    }
    return console.info(`El decimal "${number}" equivale a: "${binaryString}" en base binario`);   
}
};

(convertBase(1011, "B"))

// const convertBase = (valor, unidad) => {
//     if(unidad === 2) return console.info(`${valor} base ${unidad} = ${parseInt(valor, unidad)} base 10`)
//     if(unidad === 10) return console.info(`${valor} base ${unidad} = ${valor.toString(2)} base 2`)
// }

// 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada,
// pe. miFuncion(1000, 20) devolverá 800.

const calcularDescuento=(precio=undefined, descuento=undefined)=>
(typeof precio !== "number")
 ?console.error(`El valor "${precio}" no es un numero`)
:(typeof descuento !== "number")  
?console.error(`El valor "${descuento}" no es un numero`)
:(!descuento) 
?console.warn(`El valor "${descuento}" no es una unidad valida`)
:(`El descuento del ${descuento}% aplicado a $${precio} es igual a $${precio - descuento / 100 * precio}`)

// 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, 
// pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).

const calcularAniosPasados=(fecha=undefined)=> {
    //validaciones
    if(fecha === undefined) return (`No se ingreso ninguna fecha`);
    if(!(fecha instanceof Date) || isNaN(fecha)) return ("No se ingreso una fecha valida");
    //función
    const añosPasados = new Date().getFullYear() - fecha.getFullYear();
    if (new Date().getMonth() < fecha.getMonth() || (new Date().getMonth() === fecha.getMonth() && new Date().getDate() < fecha.getDate())) 
    añosPasados--; 
    return console.info(`Desde ${fecha} hasta ${new Date()} han pasado ${añosPasados} años`);
}
(calcularAñosPasados(new Date(1973, 6, 2)));

// 18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, 
// pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.

const contarVocalesYConsonantes=(texto="")=>{
    if(!texto) return console.warn("No ha ingresado ningun texto");
    if(typeof texto!=='string') return console.error("Solo se acepta texto");
    let contadorVocales = 0;
    let contadorConsonantes = 0;
    const textoIgual = texto.toLowerCase();
    for(let i=0;i<textoIgual.length;i++) {
        if(textoIgual[i].match(/[a-z]/)) {
            if(textoIgual[i].match(/[aeiou]/)) {
                contadorVocales++
            } else {
                contadorConsonantes++
            }
        }
    }
    if (contadorVocales === 0 && contadorConsonantes === 0) return console.error("Solo se acepta texto")
console.info(`Vocales "${contadorVocales}", Consonantes "${contadorConsonantes}"`)
}

// 19) Programa una función que valide que un texto sea un nombre válido, 
// pe. miFuncion("Jonathan MirCha") devolverá verdadero.

     
const nombresValidos=(nombre)=>{
    if(typeof nombre !== "string") return console.warn("Ingrese un nombre");
    nombre = nombre.trim();
    if(!/^[A-Za-z\s'-]+$/.test(nombre)){ return console.warn("Nombre no valido");
}
    return console.info(`El nombre "${nombre}" es valido`)
}

// 20) Programa una función que valide que un texto sea un email válido, 
// pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.

const emailsValidos=(email)=>{
    if(typeof email !== "string") return console.error("Valor invalido");
    email = email.trim();
    if(!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)){ return console.warn("Email no valido");
}
    return console.info(`El email "${email}" es valido`)
}
// /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i

// 21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, 
// pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].

const elevarAlCuadrado=(num=undefined)=>{
    if(num===undefined) return console.warn("No ingresaste valor alguno")
    if(!(num instanceof Array)) return console.warn("No ingresaste un array valido") 
    if(num.length===0) return console.warn("El array esta vacio")
    for(let i of num) {if(typeof i !=="number") return console.warn("El valor no es un numero");}
    const result = num.map(e => e * e);

    return console.info(`Array original ${num}, array con numeros al cuadrado ${result}`)
    }

// 22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, 
// pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].

const numerosAltosBajos=(num=undefined)=>{
    if(num===undefined) return console.warn("No ingresaste valor alguno")
    if(!(num instanceof Array)) return console.warn("No ingresaste un array valido") 
    if(num.length===0) return console.warn("El array esta vacio")
    for(let i of num) {if(typeof i !=="number") return console.warn(`El valor ${i} no es un numero`);}

return console.info(`Valor mas alto "${Math.max(...num)}",\nValor mas bajo "${Math.min(...num)}"`);
}
// const numerosAltos=(num)=>{
//     if(!num) return console.warn("No ingreso un array de enteros");
// let numAlto = num[0];
// let numBajo = num[0];
// for(let i=1;i<num.length;i++) {
//  if(numAlto<num[i]){
//   numAlto = num[i];
// } else if(numBajo>num[i]){
//     numBajo = num[i];
// }
// }
// return console.info(`[${numAlto},${numBajo}]`);
// }

// 23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero
//  almacena los números pares y en el segundo los impares, 
//  pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.

const paresImpares=(num=undefined)=>{
    if(num===undefined) return console.warn("No ingresaste valor alguno")
    if(!(num instanceof Array)) return console.warn("No ingresaste un array valido") 
    if(num.length===0) return console.warn("El array esta vacio")
    for(let i of num) {if(typeof i !=="number") return console.warn(`El valor ${i} no es un numero`);}

return console.info({pares:num.filter(num=>num%2===0),impares:num.filter(num=>num%2===1)})
}

// const paresImpares=(num)=>{
//     if(!num) return console.warn("No ingreso un array de numeros")
// let par = [];
// let impar = [];
// for(let i=0;i<num.length;i++){
//     if(num[i] % 2 === 0) {
//         par.push(num[i])
//     } else {
//         impar.push(num[i])
//     }
// }
// return console.info(`Estos numeros son par "${par}", y estos impares "${impar}"`)
// }

// 24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, 
// el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, 
// pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.

const ascendenteDescendente=(arr=undefined)=>{
    if(arr===undefined) return console.warn("No ingresaste valor alguno")
    if(!(arr instanceof Array)) return console.warn("No ingresaste un array valido") 
    if(arr.length===0) return console.warn("El array esta vacio")
    for(const i of arr) {if(typeof i !=="number") return console.warn(`El valor ${i} no es un numero`);}   
    const ascen = [...arr];
    const desce = [...arr];
   let arrAscendente = ascen.sort((a,b)=>a - b);
   let arrDescendente = desce.sort((a,b)=>b - a);
   return console.info(`El valor original es "${arr}" el valor en ascendente es "${arrAscendente}" y descendente es "${arrDescendente}"`)
}

// return console.info({
//     arr,  //Si el atributo de un objeto se llama igual a la variable que esta recibiendo donde vienen los valores se puede simplificar
//     asc: arr.map(e=>e).sort(),
//     desc: arr.map(e=>e).sort().reverse()
// })
// }

// 25) Programa una función que dado un arreglo de elementos, elimine los duplicados, 
// pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].

const eliminarDuplicados=(arr=undefined)=>{
    if(arr===undefined) return console.warn("No ingresaste valor alguno");
    if(!(arr instanceof Array)) return console.warn("No ingresaste un array valido");
    if(arr.length===0) return console.warn("El array esta vacio");
    if(arr.length===1) return console.warn("El arrglo debe tener al menos dos elementos")
    const notNumbers = arr.filter((e)=>typeof e !=="number");
    
    if(notNumbers.length > 0)return console.warn(`Los valores "${notNumbers.join(", ")}" no son un numero`);

    const result = arr.filter((e,index)=>{return arr.indexOf(e) === index});
    return console.info(`El array original era "${arr}" y el array modificado sin duplicados es "${result}"`);
}

// 26) Programa una función que dado un arreglo de números obtenga el promedio, 
// pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.

const sacarPromedio=(arr)=>{
    if(arr===undefined) return console.warn("No ingresaste valor alguno");
    if(!(arr instanceof Array)) return console.warn("No ingresaste un array valido");
    if(arr.length===0) return console.warn("El array esta vacio");
    const notNumbers = arr.filter((e)=>typeof e !=="number");
    
    if(notNumbers.length > 0)return console.warn(`Los valores "${notNumbers.join(", ")}" no son un numero`);

      let resultado =  arr.reduce((acumulador, actual) => acumulador + actual) / arr.length;
         return console.info(`El promedio del arreglo de numeros "${arr}" es "${resultado}"`);
        }

        // console.info(
        //     arr.reduce((total, num, index, arr)=>{
        //         total += num;
        //         if(index === arr.length - 1) {
        //             return `El promedio de ${arr} es ${total / arr.length}}`
        //       } else {
        //         return total;
        //       }
        //     })
        // )

//         27) Programa una clase llamada Pelicula.
// La clase recibirá un objeto al momento de instanciarse con los siguentes datos: 
// id de la película en IMDB, tuitlo, director, año de estreno, país o países de origen,
//  géneros y calificación en IMBD.
//   - Todos los datos del objeto son obligatorios.
//   - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
//      7 restantes números.
//   - Valida que el título no rebase los 100 caracteres.
//   - Valida que el director no rebase los 50 caracteres.
//   - Valida que el año de estreno sea un número entero de 4 dígitos.
//   - Valida que el país o paises sea introducidos en forma de arreglo.
//   - Valida que los géneros sean introducidos en forma de arreglo.
//   - Valida que los géneros introducidos esten dentro de los géneros 
//      aceptados*.
//   - Crea un método estático que devuelva los géneros aceptados*.
//   - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
//     decimal de una posición.
//   - Crea un método que devuelva toda la ficha técnica de la película.
//   - Apartir de un arreglo con la información de 3 películas genera 3 
    // instancias de la clase de forma automatizada e imprime la ficha técnica 
    // de cada película.

    class Movie {
        static generosAceptados = ['acción', 'comedia', 'drama', 'horror', 'crimen', 'romance', 'sci-fi', 'thriller', 'biografia', 'historia'];
          constructor(id, titulo, director, anioEstreno, paisOrigen, genero, calificación){
              if (!/^[a-zA-Z]{2}\d{7}$/.test(id)) {
                  throw new Error('ID de IMDB invalida');
              }
              if(titulo.length > 100) {
                  throw new Error('El titulo excede los 100 caracteres maximos')
              }
              if(director.length > 50) {
                  throw new Error('El nombre del director excede los 50 caracteres maximos')
              }
              if(!/^\d{4}$/.test(anioEstreno) && Number(anioEstreno) >= 1900 && Number(anioEstreno) <= new Date().getFullYear()) {
                  throw new Error('Año de estreno invalido')
              }
              if (!Array.isArray(paisOrigen) || !paisOrigen.every((e)=> typeof e === "string")) {
                  throw new Error('Pais de origen no valido')
              }
              if(!Array.isArray(genero) || !genero.every((e)=> typeof e === "string")) {
                  throw new Error('Genero no valido')
              }
              if(!genero.every((genero)=> Movie.generosAceptados.includes(genero))) {
                  throw new Error(`El genero debe ser uno aceptado: ${Movie.generosAceptados}`)
              }
              if(typeof calificación !== 'number' || calificación < 0 || calificación > 10) {
                  throw new Error('Calificación invalida')
              }
              this.id = id;
              this.titulo = titulo;
              this.director = director;
              this.anioEstreno = anioEstreno;
              this.paisOrigen = paisOrigen;
              this.genero = genero;
              this.calificación = calificación;
          
          }
    
              static obtenerGenerosAceptados() {
                  return Movie.generosAceptados;
              }
    
      obtenerFichaTecnica() {
          return {
             "Id": this.id,
             "Titulo": this.titulo,
             "Director": this.director,
             "Año de Estreno": this.anioEstreno,
             "Pais de origen": this.paisOrigen,
             "Genero": this.genero,
             "Calificación": this.calificación
            }
      }
    }
    
    const pelis = [
      {
          'id': 'tt1234567',
          'titulo': 'The Shawshank Redemption',
          'director': 'Frank Darabont',
          'anioEstreno': 1994,
          'paisOrigen': ['USA'],
          'genero': ['drama'],
          'calificación': 9.3
      },
      {
          'id': 'tt1234567',
          'titulo': 'The Godfather',
          'director': 'Francis Ford Coppola',
          'anioEstreno': 1972,
          'paisOrigen': ['USA'],
          'genero': ['crimen', 'drama'],
          'calificación': 9.2
      },
      {
          'id': 'tt1234567',
          'titulo': "Schindler's List",
          'director': 'Steven Spielberg',
          'anioEstreno': 1993,
          'paisOrigen': ['USA'],
          'genero': ['biografia', 'drama', 'historia'],
          'calificación': 8.9
      }
    ];
    
    for(const movie of pelis) {
    try {
      const result = new Movie(
        movie["id"],
        movie["titulo"],
        movie["director"],
        movie["anioEstreno"],
        movie["paisOrigen"],
        movie["genero"],
        movie["calificación"]
      );
      console.log(result.obtenerFichaTecnica());
    } catch (error) {
      console.error(error.message);
    }
    }

// Ordenar de mayor a menor con tres metodos distintos

// const mayorMenor=(numeros)=>{
//     let menor = Math.min(...numeros)
//     let mayor = Math.max(...numeros)
//     return [menor, mayor]
// }

// let menor = numeros[0];
//   let mayor = numeros[0];

//   for (let e of numeros) {
//     if (e < menor) {
//       menor = e;
//     }
//      if (e > mayor) {
//       mayor = e;
//     }
//   }

//   return [mayor, menor];
// }

// const mayorMenor=(numeros)=>{
//     let menor = numeros[0]
//     let mayor = numeros[0]
//     for(let i=1;i<numeros.length;i++) {
//         if(numeros[i] > mayor){
//             mayor = numeros[i]
//         }
//         if(numeros[i] < menor){
//             menor = numeros[i]
//     }
// }
// return [menor, mayor]
// }

const mayorMenor=(numeros)=>{
    let ordenado = numeros.sort((a,b)=> a - b)
    return (`${ordenado[0]}, ${ordenado[ordenado.length - 1]}`)
}
console.log(mayorMenor([9, 17, 6, 2, 4]))

// funcion para sumar solo primos de un array con enteros

function esPrimo(num){
    if ( num < 2) {
      return false;
   } for (let i = 2; i < num; i++) {
     if (num % i === 0) {
      return false;
     }
   }
     return true;
}
function sumarPrimos(numeros){
   const listaPrimos = numeros.filter((num)=> esPrimo(num))
   const resultado = listaPrimos.reduce((eA, eS)=> eA + eS)
   return {resultado,listaPrimos}
}

console.log(sumarPrimos([1,2,3,4,5,6,7,8,9]))



// * Completa la función 'sumaTodosPrimos' a continuación.
// *
// * La función debe retornar un ENTERO.
// * La función recibe un ARREGLO DE ENTEROS como parámetro.
// *
// * No modifiques nada por fuera del cuerpo de la función.
// */

// function sumaTodosPrimos(numeros) {
//    // tu código aquí
//    function esPrimo(num) {
//        if(num<2) {
//            return false
//        }
//        for(let i=2;i<=num**0.5;i++) {
//            if(num%i===0) {
//                return false
//            }
//        }
//        return true
//    }
//    let res=0
   
//    for(let n of numeros) {
//        if(esPrimo(n)) {
//            res+=n
//        }
//    }
//    return res
// }

/*Dado un conjunto de enteros de un numero objetivo debes devolver el indice de los dos numeros
 que suman el objetivo, y no se puede utilizar mas de un bucle, un for maximo */

const input = [9,4,10,3,39,12,1,4,6]

function twoSum(array, target) {
    const differences = {};
    for (let i=0;i<array.length;i++) {
        const n = array[i]
        if(differences[target - n]) {
            return [differences[target - n].index, i]
        }
        differences[n] = {
            value: target - n,
            index: i
        }
    }
    return [];
}
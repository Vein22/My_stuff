// 1 Sumar primos

// Completa la función 'sumaTodosPrimos' a continuación.
// *
// * La función debe retornar un ENTERO.
// * La función recibe un ARREGLO DE ENTEROS como parámetro.
// *
// * No modifiques nada por fuera del cuerpo de la función.
// */ Recibes unos enteros, debes sumar solo los que sean primos

function sumaTodosPrimos(numeros) {
   // tu código aquí
   function esPrimo(num) {
       if(num<2) {
           return false
       }
       for(let i=2;i<=num**0.5;i++) {
           if(num%i===0) {
               return false
           }
       }
       return true
   }
   let res=0
   
   for(let n of numeros) {
       if(esPrimo(n)) {
           res+=n
       }
   }
   return res
}

// 2 Mayor menor

/*
 * Completa la función 'mayorMenor' a continuación.
 *
 * La función debería retornar un ARREGLO DE ENTEROS.
 * La función acepta un ARREGLO DE ENTEROS como parámetro.
 *
 * No modifiques nada por fuera del cuerpo de esta función.
 */

function mayorMenor(numeros) {
    // tu código aquí
   
  let menor = numeros[0]
    let mayor = numeros[0]
    for(let i=1;i<numeros.length;i++) {
        if(numeros[i] > mayor){
            mayor = numeros[i]
        }
        if(numeros[i] < menor){
            menor = numeros[i]
    }
}
return [mayor, menor]
}

// 3 Clase Producto

/*
 * Completa la clase Producto a continuación, definiendo su constructor y sus métodos.
 *
 * El constructor acepta un STRING ("nombre"), un NUMERO ("precio"), y un NUMERO ("cantidad") como parámetro.
 *
 * No modifiques nada por fuera del cuerpo de la clase.
 */

class Producto {
    constructor(nombre, precio, cantidad) {
        // Inicializar las propiedades del Producto con los valores recibidos como argumento
        // tu código aquí
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }

    calcularTotal() {
        //Calcula y devuelve el total del valor del inventario del producto 
        // tu código aquí
        return this.precio * this.cantidad;
    }
    
    incrementarCantidad(cantidad) {
        // Incrementa la cantidad de productos en el inventario.
        // tu código aquí
        return this.cantidad += cantidad;
    }

    actualizarPrecio(precio) {
        // Actualiza el precio del producto
        // tu código aquí
        return this.precio = precio;
    }

}

// 4 Heroe militar o civil

/*
 * Completa la función verificarHeroe a continuación.
 *
 * La función debería retornar un string.
 * La función acepta un OBJETO como parámetro.
 *
 * No modifiques nada por fuera del cuerpo de esta función.
 */

function verificarHeroe(heroe) {
    // Tu código aquí
    const {nombre, esMilitar, batalla} = heroe;

     if (esMilitar && batalla) {
         return `${nombre}, es héroe militar y ha participado en batallas`;
     } else if (esMilitar && !batalla) {
         return `${nombre}, aunque es héroe militar, no ha participado en batallas`;
     } else if (!esMilitar && batalla) {
         return `${nombre}, aunque no es un héroe militar, ha participado en batallas`;
     } else {
         return `${nombre}, no es militar y tampoco ha participado en batallas`;
     }

}

// 5 Peaky Blinders


/*
 * Completa la función formatNameAndGang a continuación.
 *
 * La función debería retornar un string.
 * La función acepta un OBJETO como parámetro.
 *
 * No modifiques nada por fuera del cuerpo de esta función.
 */

function formatNameAndGang(usuario) {
    // Tu código aquí
    const {nombre, apellido, gang} = usuario;
    if(nombre && apellido && gang) return (`${nombre.toUpperCase()} ${apellido.toUpperCase()} ${gang.toLowerCase()}`)
    if(!nombre || !apellido || !gang) return "No se proporcionaron ambas propiedades" 
}

// 6 Calculando Areas

/*
 * Completa la función calcularArea a continuación.
 *
 * La función debería retornar un NUMERO.
 * La función acepta un OBJETO como parámetro.
 *
 * No modifiques nada por fuera del cuerpo de esta función.
 */

function calcularArea(figura) {
    // Tu código aquí
  if(figura.tipo === "Triángulo") {
      return (figura.base * figura.altura)/2;
  } else if (figura.tipo === "Rectángulo") {
      return figura.base * figura.altura;
  } else {
      return null
  }
}

// 7 Busca y Destruye

/*
 * Completa la función 'buscaDestruye' a continuación.
 *
 * La función debe retornar un ARREGLO DE ENTEROS.
 * La función recibe un ARREGLO DE ENTEROS y un ENTERO como parámetros.
 *
 * No modifiques nada por fuera del cuerpo de la función.
 */

function buscaDestruye(numeros, n) {
    // Tu código aquí
   return numeros.filter((e) => e !== n);
}

// 8 Ideas

/*
 * Completa la función 'ideas' a continuación.
 *
 * La función debe retornar un STRING.
 * La función acepta un ARREGLO DE STRINGS como parámetro.
 *
 * No modifiques nada por fuera del cuerpo de la función.
 */

function ideas(listaDeIdeas) {
    // tu código aquí
   let Count = 0;

  for (let e of listaDeIdeas) {
    if (e === "buena") {
      Count++;
    }
  }

  if (Count >= 3) {
    return "Jackpot!";
  } else if (Count > 0) {
    return "Activa!";
  } else {
    return "Fail!";
  }

}

// 9 Casilla de verificacion

// Cual es la correcta para crear una casilla de verificacion (checkbox) en HTML?

// <input type ="checkbox">

// <checkbox>

// <input type="check">
// o 
// <check>

// 10 Selector ID

// Cual de las siguientes opciones representa un selector de ID en css?

// # 
// . 
// : 
// *
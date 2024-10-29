/* 
Open / Closed Principle(OCP):

- Descripción: El código debe estar abierto a la extensión, pero cerrado a la modificación. Implementa un ejemplo donde se pueda extender la funcionalidad de una clase o módulo sin modificar su código existente.

- TODO: Desarrolla un ejemplo que permita agregar nuevas funcionalidades extendiendo el código sin tener que modificar el código base original. Piensa en cómo podrías usar herencia, polimorfismo o composición para lograr este objetivo.
*/

import { FiltroCombinado } from "./FiltroCombinado.js";
import { FiltroDeProductos } from "./FiltroDeProductos.js";
import { FiltroPorColor } from "./FiltroPorColor.js";
import { FiltroPorPrecio } from "./FiltroPorPrecio.js";
import { FiltroPorTamanio } from "./FiltroPorTamanio.js";
import { Producto } from "./Producto.js";

const productos = [
  new Producto({
    id: 1,
    nombre: "Producto 1",
    precio: 10,
    color: "rojo",
    tamanio: "grande",
  }),
  new Producto({
    id: 2,
    nombre: "Producto 2",
    precio: 20,
    color: "azul",
    tamanio: "mediano",
  }),
  new Producto({
    id: 3,
    nombre: "Producto 3",
    precio: 30,
    color: "rojo",
    tamanio: "pequeño",
  }),
];

const filtro = new FiltroDeProductos();
const CRITERIOS = {
  PRECIO: 20,
  COLOR: "rojo",
  TAMANIO: "grande",
};

const filtroPorPrecio = new FiltroPorPrecio(CRITERIOS.PRECIO);
const filtroPorColor = new FiltroPorColor(CRITERIOS.COLOR);
const filtroPorTamanio = new FiltroPorTamanio(CRITERIOS.TAMANIO);
const filtroCombinado = new FiltroCombinado(
  { filtro: filtroPorColor.colorExacto, contexto: filtroPorColor },
  { filtro: filtroPorTamanio.tamanioExacto, contexto: filtroPorTamanio }
);

console.log(`Productos filtrados por precio exacto: ${CRITERIOS.PRECIO}`);

console.log(
  filtro.filtrar(productos, filtroPorPrecio.precioExacto, filtroPorPrecio)
);

console.log("-------------------");

console.log(`Productos filtrados por precio mayor a: ${CRITERIOS.PRECIO}`);

console.log(
  filtro.filtrar(productos, filtroPorPrecio.precioMayor, filtroPorPrecio)
);

console.log("-------------------");

console.log(`Productos filtrados por precio menor a: ${CRITERIOS.PRECIO}`);

console.log(
  filtro.filtrar(productos, filtroPorPrecio.precioMenor, filtroPorPrecio)
);

console.log("-------------------");

console.log(`Productos filtrados por color: ${CRITERIOS.COLOR}`);

console.log(
  filtro.filtrar(productos, filtroPorColor.colorExacto, filtroPorColor)
);

console.log("-------------------");

console.log(`Productos filtrados por tamaño: ${CRITERIOS.TAMANIO}`);

console.log(
  filtro.filtrar(productos, filtroPorTamanio.tamanioExacto, filtroPorTamanio)
);

console.log("-------------------");

console.log("Productos filtrados por filtro combinado: rojo, grande");

console.log(
  filtro.filtrar(productos, filtroCombinado.filtrar, filtroCombinado)
);

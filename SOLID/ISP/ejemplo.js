/*
Interface Segregation Principle (ISP):

- Descripción: Los clientes no deberían verse obligados a depender de interfaces que no utilizan. Implementa un ejemplo donde se dividan las responsabilidades en varias "interfaces" para que las clases solo tengan que implementar los métodos que realmente necesitan.

- TODO: Crea interfaces explícitas o implícitas (a través de funciones o clases en JavaScript) y asegúrate de que cada clase implemente solo los métodos que son relevantes para su función específica. Evita que una clase esté sobrecargada de métodos innecesarios.
*/

import { Pato } from "./Pato.js";
import { Pajaro } from "./Pajaro.js";
import { Pescado } from "./Pescado.js";

export const ejemploISP = () => {
  console.log("\n********** Ejemplo de ISP **********\n");

  const pato = new Pato();
  const pajaro = new Pajaro();
  const pescado = new Pescado();

  pescado.nadar();

  pajaro.volar();

  pato.nadar();
  pato.volar();
};

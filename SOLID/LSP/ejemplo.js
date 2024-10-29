/*
Liskov Substitution Principle(LSP):

- Descripción: Las subclases deben poder reemplazar a sus clases base sin alterar el comportamiento correcto del programa. Crea una jerarquía de clases donde las subclases puedan sustituir a la clase base sin romper la funcionalidad.

TODO: Asegúrate de que las subclases puedan ser usadas de manera intercambiable con la clase base sin modificar el comportamiento esperado del programa. Evalúa que el diseño de tu jerarquía de clases mantenga la coherencia con este principio.
*/

import { TextInput } from "./TextInput.js";
import { NumberInput } from "./NumberInput.js";

export const ejemploLSP = () => {
  console.log("Ejemplo de LSP:");

  const inputs = [new TextInput("hola"), new NumberInput(2)];

  for (const input of inputs) {
    console.log(input, input.validar());
  }
};

/*
Dependency Inversion Principle (DIP):

- Descripción: Las clases de alto nivel no deben depender de clases de bajo nivel. Ambas deben depender de abstracciones. Implementa un ejemplo donde las dependencias estén invertidas, haciendo que las clases de alto nivel dependan de interfaces o abstracciones en lugar de implementaciones concretas.

- TODO: Crea un sistema donde las clases de alto nivel no dependan de implementaciones concretas, sino de abstracciones, y asegúrate de que las dependencias sean inyectadas o suministradas externamente para facilitar la flexibilidad y extensibilidad.
*/

import { ProcesadorDePagosCredito } from "./ProcesadorDePagosCredito.js";
import { ProcesadorDePagosDebito } from "./ProcesadorDePagosDebito.js";
import { Tienda } from "./Tienda.js";

export const ejemploDIP = () => {
  console.log("\n********** Ejemplo de DIP **********\n");

  const procesadorDePagosCredito = new ProcesadorDePagosCredito(
    { nombre: "Juan" },
    6
  );

  const procesadorDePagosDebito = new ProcesadorDePagosDebito({
    nombre: "Gonzalo",
  });

  let tienda = new Tienda(procesadorDePagosCredito);
  tienda.comprarArticulo(1000, 2);

  tienda = new Tienda(procesadorDePagosDebito);
  tienda.comprarArticulo(1000, 4);

  console.log("\n");
};

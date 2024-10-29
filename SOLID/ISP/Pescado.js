import { PuedeNadar } from "./PuedeNadar.js";
import { extend } from "./utils.js";

export function Pescado() {
  this.nombre = "Pescado";
}

extend(Pescado, PuedeNadar);

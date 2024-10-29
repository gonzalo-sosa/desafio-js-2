import { PuedeVolar } from "./PuedeVolar.js";
import { extend } from "./utils.js";

function Pajaro() {
  this.nombre = "Pajaro";
}

extend(Pajaro, PuedeVolar);

export { Pajaro };

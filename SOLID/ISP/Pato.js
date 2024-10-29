import { PuedeNadar } from "./PuedeNadar.js";
import { PuedeVolar } from "./PuedeVolar.js";
import { mixin } from "./utils.js";

export function Pato() {
  this.nombre = "Pato";
}

mixin(Pato.prototype, PuedeVolar, PuedeNadar);

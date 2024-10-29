import { Input } from "./Input.js";

export class NumberInput extends Input {
  constructor(valor) {
    super(valor);
  }

  validar() {
    return typeof this.valor === "number" && this.valor >= 0;
  }
}

import { Input } from "./Input.js";

export class TextInput extends Input {
  constructor(valor) {
    super(valor);
  }

  validar() {
    return typeof this.valor === "string" && this.valor.length > 0;
  }
}

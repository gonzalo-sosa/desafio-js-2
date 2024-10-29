export function PuedeVolar() {}

Object.prototype.volar = function () {
  console.log(`${this.nombre} volando...`);
};

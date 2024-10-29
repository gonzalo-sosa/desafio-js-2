export class FiltroPorColor {
  constructor(color) {
    this.criterio = color;
  }
  colorExacto(producto) {
    return producto.color === this.criterio;
  }
}

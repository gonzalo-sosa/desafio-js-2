export class FiltroPorPrecio {
  constructor(precio) {
    this.criterio = precio;
  }

  precioMenor(producto) {
    return producto.precio < this.criterio;
  }

  precioMayor(producto) {
    return producto.precio > this.criterio;
  }

  precioExacto(producto) {
    return producto.precio === this.criterio;
  }
}

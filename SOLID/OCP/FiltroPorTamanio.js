export class FiltroPorTamanio {
  constructor(tamanio) {
    this.criterio = tamanio;
  }
  tamanioExacto(producto) {
    return producto.tamanio === this.criterio;
  }
}

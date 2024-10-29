export class Producto {
  constructor({ id, nombre, precio, color, tamanio }) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.color = color;
    this.tamanio = tamanio;
  }

  mostrarInfo() {
    return `ID: ${this.id} Nombre: ${this.nombre} Precio: ${this.precio} Color: ${this.color} Tamaño: ${this.tamanio}`;
  }
}

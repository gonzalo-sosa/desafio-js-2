# Single Responsibility Principle(SRP)

Principio de responsabilidad única, las clases deben de ser responsables de una sola tarea. 

En el ejemplo, se declara una clase "Blog" que se encarga de almacenar entradas en un array y tiene métodos que permiten agregar o quitar elementos al mismo. Por esto, "Blog" no debe ser responsable de la creación de elementos HTML, entonces se crea una clase "ArticleElement" que es responsable de la creación de elementos HTML article.


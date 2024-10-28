# Aplicación de los Principios SOLID en JavaScript

## Objetivo

El propósito de este ejercicio es que el participante investigue los principios SOLID, comprenda su aplicación en el diseño de software y los implemente mediante ejemplos prácticos en JavaScript. El resultado debe demostrar la comprensión teórica y práctica de cada uno de los principios y cómo ayudan a crear un software modular, mantenible y extensible.

## Descripción del Ejercicio

Deberás implementar ejemplos que apliquen los cinco principios SOLID en JavaScript, asegurándote de que cada ejemplo refleje fielmente el propósito del principio y cómo se aplica en la vida real para mejorar el diseño del código.

## Principios a Implementar

1. Single Responsibility Principle (SRP):

- Descripción: Este principio establece que cada clase o módulo debe tener una única responsabilidad o razón para cambiar. Debes implementar un ejemplo en el que una clase o módulo esté encargado de una única funcionalidad específica, evitando agrupar responsabilidades no relacionadas.
- Instrucciones: Crea una clase o módulo que implemente una funcionalidad específica y asegúrate de que las responsabilidades no relacionadas se manejen en clases o módulos separados.

2. Open/Closed Principle (OCP):

- Descripción: El código debe estar abierto a la extensión, pero cerrado a la modificación. Implementa un ejemplo donde se pueda extender la funcionalidad de una clase o módulo sin modificar su código existente.
- Instrucciones: Desarrolla un ejemplo que permita agregar nuevas funcionalidades extendiendo el código sin tener que modificar el código base original. Piensa en cómo podrías usar herencia, polimorfismo o composición para lograr este objetivo.

3. Liskov Substitution Principle (LSP):

- Descripción: Las subclases deben poder reemplazar a sus clases base sin alterar el comportamiento correcto del programa. Crea una jerarquía de clases donde las subclases puedan sustituir a la clase base sin romper la funcionalidad.
- Instrucciones: Asegúrate de que las subclases puedan ser usadas de manera intercambiable con la clase base sin modificar el comportamiento esperado del programa. Evalúa que el diseño de tu jerarquía de clases mantenga la coherencia con este principio.

4. Interface Segregation Principle (ISP):

- Descripción: Los clientes no deberían verse obligados a depender de interfaces que no utilizan. Implementa un ejemplo donde se dividan las responsabilidades en varias "interfaces" para que las clases solo tengan que implementar los métodos que realmente necesitan.
- Instrucciones: Crea interfaces explícitas o implícitas (a través de funciones o clases en JavaScript) y asegúrate de que cada clase implemente solo los métodos que son relevantes para su función específica. Evita que una clase esté sobrecargada de métodos innecesarios.

5. Dependency Inversion Principle (DIP):

- Descripción: Las clases de alto nivel no deben depender de clases de bajo nivel. Ambas deben depender de abstracciones. Implementa un ejemplo donde las dependencias estén invertidas, haciendo que las clases de alto nivel dependan de interfaces o abstracciones en lugar de implementaciones concretas.
- Instrucciones: Crea un sistema donde las clases de alto nivel no dependan de implementaciones concretas, sino de abstracciones, y asegúrate de que las dependencias sean inyectadas o suministradas externamente para facilitar la flexibilidad y extensibilidad.

## Entrega

1. Repositorio:

- Sube tu proyecto a una plataforma como GitHub.
- El repositorio debe estar bien organizado, con una estructura clara de carpetas y un archivo .gitignore para evitar incluir archivos innecesarios en el control de versiones.
- Cada principio debe estar implementado en un archivo o módulo separado, bien estructurado, y con nombres que reflejen claramente qué principio SOLID está siendo aplicado.

2. Demostración:

- Explica el desarrollo de todo el proyecto en una grabación o presentación, donde describas cómo implementaste cada principio SOLID.
- Asegúrate de explicar cómo investigaste cada principio y por qué tu implementación es fiel a los principios de SOLID.
- Muestra cómo tu código es extensible, modular y cumple con los estándares de calidad, destacando las soluciones implementadas para evitar problemas comunes en el diseño de software.

3. Documentación:

- Incluye un archivo README.md que detalle:
  - Introducción: Explicación breve sobre SOLID y su importancia en el diseño de software.
  - Proceso de desarrollo: Explica cómo abordaste cada principio y describe las decisiones técnicas que tomaste durante la implementación.
  - Desafíos enfrentados: Describe los desafíos que enfrentaste durante el desarrollo del proyecto y cómo los resolviste.
  - Ejecución del proyecto: Instrucciones claras sobre cómo ejecutar tu proyecto (incluyendo la instalación de dependencias, si las hubiera, mediante npm o yarn).
  - Mejoras futuras: Menciona posibles mejoras o extensiones que se podrían agregar al proyecto.

## Criterios de Evaluación

1. Investigación y Comprensión de SOLID:

- Evaluaremos tu capacidad para investigar, comprender y aplicar correctamente cada principio SOLID.

2. Calidad del Código:

- Tu código debe ser limpio, modular y seguir las mejores prácticas de desarrollo, con nombres de variables y funciones claros y adecuados.

3. Modularización y Organización:

- El código debe estar bien organizado en módulos, cada uno cumpliendo con el principio SOLID que representa.

4. Documentación y Demostración:

- La documentación debe ser clara y completa, explicando detalladamente el proceso y las decisiones. La demostración debe mostrar un entendimiento profundo del proyecto y de cómo SOLID mejora el diseño del software.

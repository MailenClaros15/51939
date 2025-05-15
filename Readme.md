# 📖 Analizador ANTLR4 - Mailen Claros

Este proyecto implementa un analizador léxico y sintáctico usando **ANTLR4** para un lenguaje sencillo con bucles `mientras` y sentencias `imprimir`.

---

## 📂 📦 Estructura del proyecto

---

## 📦 📥 Instalación y configuración

### 📌 Requisitos

- [Java JDK](https://www.oracle.com/java/technologies/javase-downloads.html)
- [Node.js](https://nodejs.org/es/)
- ANTLR 4.13.1 (incluido en `/tools`)
📌 Ejemplo de uso

mientras verdadero {
  imprimir("hola");
}
Código de entrada:
i
mientras verdadero {
  imprimir("hola");
}

Entrada válida.

Árbol de derivación:
(programa (instruccion (salida IMPRIMIR ( LPAREN (cadena " Hola " ) RPAREN SEMI)) ...)

📌 📑 Autor
Mailen Claros

GitHub
Proyecto de práctica educativa.

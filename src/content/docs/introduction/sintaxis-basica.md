---
title: "Sintaxis básica"
description: "Domina Python desde cero, curso basico a avanzado para desarrollo web, data science, inteligencia artificial..."
---

Este Parte cubre los fundamentos de la sintaxis de Python, incluyendo cómo trabajar con variables, los tipos de datos más comunes y los operadores.

### Variables

Una variable es un nombre que se utiliza para referirse a una ubicación de memoria donde se almacena un valor. En Python, no es necesario declarar explícitamente el tipo de una variable; el intérprete lo infiere automáticamente.

#### **Reglas para nombrar variables:**

- Los nombres de las variables deben comenzar con una letra (a-z, A-Z) o un guion bajo (\_).

- El resto del nombre puede contener letras, números (0-9) o guiones bajos.

- Los nombres de las variables distinguen entre mayúsculas y minúsculas (es decir, miVariable y miVariable son diferentes).

- No se pueden usar palabras reservadas de Python (como if, for, while, etc.) como nombres de variables.

```py

Ejemplos:

nombre = "Juan"  # Variable de tipo string
edad = 30        # Variable de tipo entero
altura = 1.75    # Variable de tipo flotante
es_estudiante = True  # Variable de tipo booleano
_contador = 0    # Variable válida que comienza con un guion bajo

```

### Tipos de Datos

Python proporciona varios tipos de datos integrados que se utilizan para representar diferentes tipos de valores. Los más comunes son:

- **Enteros (int):** Representan números enteros sin parte decimal.

```py

Ejemplos:

number_int1 = 10
number_int2 = -5
number_int3 = 1000

```

- **Flotantes (float):** Representan números reales con parte decimal.

```py

Ejemplos:
pi = 3.14
number_fnegative = -0.5
number_float = 2.0


```

- **Cadenas (str):** Representan secuencias de caracteres. Se pueden definir utilizando comillas simples (' ') o dobles (" ").

```py

Ejemplos:

saludo = "Hola"
text = 'Mundo'
lenguaje = "Python"

```

- **Booleanos (bool):** Representan valores de verdad: True (verdadero) o False (falso).

```py

Ejemplos:
bool1 = True
bool2 =  False

```

- **Más ejemplos**

```py


Ejemplos:

entero = 10
flotante = 3.14
cadena = "Hola, Python!"
booleano = True

print(type(entero))    # Imprime: <class 'int'>
print(type(flotante))  # Imprime: <class 'float'>
print(type(cadena))    # Imprime: <class 'str'>
print(type(booleano))  # Imprime: <class 'bool'>


```

### Operadores

Los operadores son símbolos que realizan operaciones sobre variables y valores. Python proporciona varios tipos de operadores:

- **Operadores Aritméticos:** Realizan operaciones matemáticas.

| Operador | Descripción        | Ejemplo      |
|----------|--------------------|--------------|
| +        | Suma               | 5 + 2 = 7    |
| -        | Resta              | 5 - 2 = 3    |
| *        | Multiplicación     | 5 * 2 = 10   |
| /        | División           | 5 / 2 = 2.5  |
| //       | División Entera    | 5 // 2 = 2   |
| %        | Módulo (Resto)     | 5 % 2 = 1    |
| **       | Exponenciación     | 5 ** 2 = 25  |


- **Operadores de Comparación:** Comparan valores.


| Operador | Descripción         | Ejemplo         |
|----------|---------------------|-----------------|
| ==       | Igual a             | 5 == 2 es False |
| !=       | No igual a          | 5 != 2 es True  |
| >        | Mayor que           | 5 > 2 es True   |
| <        | Menor que           | 5 < 2 es False  |
| >=       | Mayor o igual que   | 5 >= 2 es True  |
| <=       | Menor o igual que   | 5 <= 2 es False |


- **Operadores Lógicos:** Realizan operaciones lógicas.


| Operador | Descripción | Ejemplo           |
|----------|-------------|-------------------|
| and      | Y lógico    | True and False es False |
| or       | O lógico    | True or False es True |
| not      | No lógico   | not True es False |


- **Operadores de Asignación:** Asignan valores a las variables.

| Operador | Descripción           | Ejemplo                       |
|----------|-----------------------|-------------------------------|
| =        | Asignación simple     | x = 5                         |
| +=       | Suma y asignación     | x += 3 es equivalente a x = x + 3 |
| -=       | Resta y asignación    | x -= 3 es equivalente a x = x - 3 |
| *=       | Multiplicación y asignación| x *= 3 es equivalente a x = x * 3 |
| /=       | División y asignación | x /= 3 es equivalente a x = x / 3 |
| //=      | División entera y asignación| x //= 3 es equivalente a x = x // 3 |
| %=       | Módulo y asignación   | x %= 3 es equivalente a x = x % 3 |
| **=      | Exponenciación y asignación| x **= 3 es equivalente a x = x ** 3 |


### Ejemplos:

```py

a = 10
b = 3

print(a + b) # Suma: 13
print(a - b) # Resta: 7
print(a \* b) # Multiplicación: 30
print(a / b) # División: 3.333...
print(a // b) # División entera: 3
print(a % b) # Módulo: 1
print(a \*\* b) # Exponenciación: 1000

x = 5
x += 2 # x ahora es 7
print(x)

y = 5
y == 5 #esto da True
y != 5 #esto da False

p = True
q = False
print(p and q) #imprime False
print(p or q) #imprime True
print(not p) #imprime False

```
<!-- 
### Ejercicios

- Escribe un programa que pida al usuario su nombre y edad, y luego imprima un mensaje saludándolo y mostrando su edad.

- Escribe un programa que calcule el área de un triángulo. Pide al usuario que ingrese la base y la altura.

- Escribe un programa que determine si un número ingresado por el usuario es par o impar.

- Escribe un programa que convierta grados Celsius a Fahrenheit. La fórmula es: F = (C \* 9/5) + 32.

- Escribe un programa que calcule el promedio de tres números ingresados por el usuario. -->

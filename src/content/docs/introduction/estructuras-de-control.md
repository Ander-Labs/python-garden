---
titulo: Python Garden
description: Domina Python desde cero, curso basico a avanzado para desarrollo web, data science, inteligencia artificial...
---

Esta pagina cubre las estructuras de control en Python, incluyendo condicionales (if, else, elif) y bucles (for, while).

### Condicionales
Las sentencias condicionales se utilizan para ejecutar diferentes bloques de código dependiendo de si una condición es verdadera o falsa.

#### Sentencia if
La sentencia if se utiliza para ejecutar un bloque de código si una condición es verdadera.

Sintaxis:

```Py

if condicion:
    # Código a ejecutar si la condición es verdadera

# Ejemplo:

edad = 20
if edad >= 18:
    print("Eres mayor de edad")



```

#### Sentencia else

La sentencia else se utiliza para ejecutar un bloque de código si la condición de la sentencia if es falsa.

Sintaxis:
```Py  

if condicion:
    # Código a ejecutar si la condición es verdadera
else:
    # Código a ejecutar si la condición es falsa

Ejemplo:

edad = 15
if edad >= 18:
    print("Eres mayor de edad")
else:
    print("Eres menor de edad")
```



#### Sentencia elif

La sentencia elif (abreviatura de "else if") se utiliza para verificar múltiples condiciones. Si la condición de la sentencia if es falsa, se evalúa la condición de la primera sentencia elif. Si esa condición es verdadera, se ejecuta su bloque de código. Si es falsa, se evalúan las siguientes sentencias elif, y así sucesivamente.

Sintaxis:

```Py  

if condicion1:
    # Código a ejecutar si la condición1 es verdadera
elif condicion2:
    # Código a ejecutar si la condición2 es verdadera
elif condicion3:
    # Código a ejecutar si la condición3 es verdadera
...
else:
    # Código a ejecutar si ninguna de las condiciones anteriores es verdadera

Ejemplo:

calificacion = 85
if calificacion >= 90:
    print("Excelente")
elif calificacion >= 80:
    print("Bueno")
elif calificacion >= 70:
    print("Aprobado")
else:
    print("Reprobado")
```


#### Bucles


Los bucles se utilizan para ejecutar un bloque de código repetidamente. Python proporciona dos tipos de bucles: for y while.

Bucle for
El bucle for se utiliza para iterar sobre una secuencia (como una lista, tupla, cadena) o cualquier otro objeto iterable.

Sintaxis:
```Py  

for variable in secuencia:
    # Código a ejecutar para cada elemento de la secuencia

Ejemplo:

frutas = ["manzana", "banana", "cereza"]
for fruta in frutas:
    print(fruta)
```


También se puede usar la función range() para generar una secuencia de números y usarla en un bucle for:


```Py  

for i in range(5):  # Itera de 0 a 4
    print(i)

for i in range(2, 6):  # Itera de 2 a 5
    print(i)

for i in range(0, 10, 2):  # Itera de 0 a 8, con un paso de 2
    print(i)
```



#### Bucle while
El bucle while se utiliza para ejecutar un bloque de código repetidamente mientras una condición sea verdadera.

Sintaxis:
```Py  

while condicion:
    # Código a ejecutar mientras la condición sea verdadera

Ejemplo:

contador = 0
while contador < 5:
    print(contador)
    contador += 1
```


#### Sentencias break y continue

break: Se utiliza para salir de un bucle prematuramente.

continue: Se utiliza para saltar a la siguiente iteración del bucle, omitiendo el resto del código dentro del bucle para la iteración actual.

```Py 

# Ejemplo con break:

for numero in range(10):
    if numero == 5:
        break  # Sale del bucle cuando numero es 5
    print(numero)

# Ejemplo con continue:

for numero in range(10):
    if numero % 2 == 0:
        continue  # Salta a la siguiente iteración si el número es par
    print(numero)
 ```

# Normalizar JSON

### Clase 22 Desafio 1

- Normalizar la estructura del objeto en formato JSON empresa.json que describe el organigrama de una empresa. El gerente y el encargado figuran en el array de empleados de la empresa.
- Imprimir por consola el objeto normalizado y la longitud del objeto original y del normalizado. Comparar los resultados.
  - Nota: En adelante, utilizar la siguiente función `print` para imprimir el contenido de un
    objeto:
  ```
   const util = require('util')
   function print(objeto) {
   console.log(util.inspect(objeto,false,12,true))
   }
  ```

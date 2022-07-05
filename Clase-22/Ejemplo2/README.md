# Normalizar JSON

## Clase 22 Desafio 2

1. Vamos a trabajar con el objeto del blog, pero ahora añadiéndole información
   redundante que va a ser optimizada por Normalizr.
2. Dispondremos de un array de artículos, donde habrá autores y comentadores.
3. El autor de un artículo puede ser comentador de otro y viceversa.
4. De esta manera habrá duplicación de información, lo que producirá que el objeto
   no posea información centralizada y sea más extenso.
5. Definiremos un conjunto de esquemas para quitar esas redundancias.
6. Primero mostraremos el objeto original y su longitud en bytes, luego
   normalizaremos y comprobaremos los datos.
7. Por último desnormalizaremos, verificando los datos originales.

```
const originalData = {
  Id:"999",
  posts:[
    {
      id:"123",
      author:{
        id:"1",
        nombre:"Pablo",
        apellido:"Perez",
        DNI:"20442654",
        direccion:"CABA 123",
        telefono:"1567876547"
      },
      title:"My awesome blog post",
      comments:[
        {
          id:"324",
          commenter:{
            id:"2",
            nombre:"Nicole",
            apellido:"Gonzalez",
            DNI:"20442638",
            direccion:"CABA 456",
            telefono:"1567811543"
          }
        },{
          id:"325",
          commenter:{
            id:"3",
            nombre:"Pedro",
            apellido:"Mei",
            DNI:"20446938",
            direccion:"CABA 789",
            telefono:"1567291542"
          }
        }
      ]
    },
    {
      id:"1123",
      author:{
        id:"2",
        nombre:"Nicole",
        apellido:"Gonzalez",
        DNI:"20442638",
        direccion:"CABA 456",
        telefono:"1567811543"
      },
      title:"My awesome blog post",
      comments:[
        {
          id:"1324",
          commenter:{
            id:"1",
            nombre:"Pablo",
            apellido:"Perez",
            DNI:"20442654",
            direccion:"CABA 123",
            telefono:"1567876547"
          }
        },
        {
          id:"1325",
          commenter:{
            id:"3",
            nombre:"Pedro",
            apellido:"Mei",
            DNI:"20446938",
            direccion:"CABA 789",
            telefono:"1567291542"
          }
        }
      ]
    },
    {
      id:"2123",
      author:{
        id:"3",
        nombre:"Pedro",
        apellido:"Mei",
        DNI:"20446938",
        direccion:"CABA 789",
        telefono:"1567291542"
      },
      title:"My awesome blog post",
      comments:[
        {
          id:"2324",
          commenter:{
            id:"2",
            nombre:"Nicole",
            apellido:"Gonzalez",
            DNI:"20442638",
            direccion:"CABA 456",
            telefono:"1567811543"
          }
        },
        {
          id:"2325",
          commenter:{
            id:"1",
            nombre:"Pablo",
            apellido:"Perez",
            DNI:"20442654",
            direccion:"CABA 123",
            telefono:"1567876547"
          }
        }
      ]
    }
  ]
}
```

### Conclusion

- normalizedData es es objeto resultante del proceso de normalización.
- Al revisar su estructura, se puede comprobar que las redundancias fueron eliminadas y su tamaño es menor que el del objeto original.
- Luego hacemos el proceso inverso con denormalize
- Verificamos la estructura del objeto desnormalizado y vemos que hemos recuperado los datos originales y el tamaño del objeto corresponde.
- Para el ejemplo dado, logramos una reducción de tamaño de 1381 bytes de los datos originales a 961 bytes normalizados, lo que representa un 30% de compresión de la información.
- Le eliminación de las redundancias implica una disminución del tamaño de la estructura que contiene nuestros datos

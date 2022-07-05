# Api Mock

### Clase 21 Desafio 3

- El proyecto tiene cinco rutas:
  - <b>POST</b> `/api/usuarios/popular?cant=n`: si no específico cant me genera 50 objetos mock
  - <b>GET</b> `/api/usuarios/:id?`: con id me trae un mock; sin id devuelve todos los mocks
  - <b>POST</b> `/api/usuarios`: incorpora un nuevo mock
  - <b>PUT</b> `/api/usuarios/:id`: actualiza un mock total o parcialmente por campo
  - <b>DELETE</b> `/api/usuarios/:id`: borra un mock específico
- Los usuarios tienen: nombre, email, website, e imagen.
- Cada una puede generar, listar, incorporar, actualizar y borrar mocks.
- Los datos son persistentes en memoria.

# adoptapy-back

_ayuda a encontrar hogares, adoptapy se dedica a proporcionar a los perros y gatos una segunda oportunidad de encontrar hogares seguros y cariñosos._

## Dependencies 📋

```
1-dotenv
2-express
3-express-validator
4-mongoose
5-multer
```

## devDependencies 🔧

```
1-nodemon
```

## Endpoints 🛠️

### Test

_GET Testea el funcionamiento de la API_
```
/api/test
```

### Adopciones

_GET Obtiene todos los post de adopcion_

```
/api/adoptions/list
```
_GET Obtiene un post por el id unico_

```
/api/adoptions/list/:id
```
_GET Filtra por especie todos los post de adopciones_

```
/api/adoptions/list/specie/:petSpecie
```
_GET Filtra por sexo todos los post de adopciones_
```
/api/adoptions/list/sex/:petSex
```
_PUT Edita un post por el id unico_

```
/api/adoptions/editAdoption/:id
```
_DELETE Elimina un post por el id unico_

```
/api/adoptions/deleteAdoption/:id
```
_POST Crea un nuevo post de adopciones_

```
/api/adoptions/createAdoption
```

## Licencia 📄

Este proyecto está bajo la Licencia GNU GENERAL PUBLIC LICENSE V2 - mira el archivo [LICENSE.md](LICENSE.md) para detalles

---
⌨️ con ❤️ por [ManuelMaciel](https://github.com/ManuelMaciel) 😊
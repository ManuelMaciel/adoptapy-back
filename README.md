# AdoptaPY

![](https://img.shields.io/badge/Ask%20me-anything-1abc9c.svg) ![](https://img.shields.io/github/license/manuelmaciel/adoptapy-back.svg) ![](https://img.shields.io/github/stars/manuelmaciel/adoptapy-back.svg) ![](https://img.shields.io/github/issues/manuelmaciel/adoptapy-back.svg) ![](https://img.shields.io/badge/Maintained%3F-yes-green.svg)![](https://img.shields.io/github/followers/manuelmaciel.svg?style=social&label=Follow&maxAge=2592000)
## Introduction

**Welcome to AdoptaPY API.**

_AdoptaPY is a platform dedicated to giving dogs and cats with a second chance to find safe and loving homes._

![](https://raw.githubusercontent.com/ManuelMaciel/adoptapy-back/main/assets/readme-img.png)
## Installation

### Local

Make sure that git and node.js are installed on your computer. Then you can clone this repository :

```bash
git clone https://github.com/ManuelMaciel/adoptapy-back.git
cd adoptapy-back
```

Install the dependencies :

```bash
npm install
```
### Dependencies

```
- bcryptjs
- cloudinary
- cors
- dotenv
- express
- express-validator
- helmet
- jsonwebtoken
- mongoose
- mongoose-paginate-v2
- multer
- multer-storage-cloudinary
- nodemailer
- passport
- uuid
- nodemon
- validator
```


And launch the project :

```bash
> npm run dev
```

In production run the command:

```bash
> npm run start
```

## Usage

### Methods

This API allow `GET`, `POST`, `PUT` and `DELETE` request.

### Example

Let's start by making a `GET` request to get the entire list of adoption posts:

`https://adoptapy.herokuapp.com/api/adoptions/`

This is the response:

```json
"data": {
    "docs": [
      {
        "petData": {
          "petAge": {
            "month": 8,
            "year": 2
          },
          "petLocation": {
            "latitude": -25.4085867,
            "longitude": -57.5580932
          },
          "petVaccines": true,
          "petSterilized": false,
          "petPictures": [
            "https://res.cloudinary.com/adoptapy/image/upload/v1621992230/adoptapy/csju3fc04nigu5hhvz1x.jpg"
          ],
          "petName": "Doggy",
          "petSpecie": "perro",
          "petSize": "mediano",
          "petSex": "macho",
          "petBreed": "Labrador",
          "petDescription": "A doggy le da miedo los sonidos fuertes, le gusta dormír en la cama, y en cuánto a comida es re fino",
          "petCity": "San Antonio"
        },
        "petContact": {
          "whatsapp": true,
          "name": "Manuel",
          "number": "0972436821"
        },
        "date": "2021-05-26T01:00:36.876Z",
        "_id": "60ada3274195d40015103d0c",
        "expireAt": "2021-05-26T01:23:51.536Z",
        "__v": 0
      },
      {
          ...
      },
    ],
    "totalDocs": 60,
    "limit": 10,
    "totalPages": 6,
    "page": 1,
    "pagingCounter": 1,
    "hasPrevPage": false,
    "hasNextPage": true,
    "prevPage": null,
    "nextPage": 2
  }
```
you can make a filter using parameters like```?specie=``` or ```?sex=``` or you can also use both together ```?specie=perro&sex=macho```

### Adoptions, Lost, Found post  endpoints

```bash
Found and lost endpoints are exactly the same, only the /adoptions is changed to /lost if it is a lost endpoint, and /found if it is a found endpoint.
```

`POST` create a new adoption post **auth not required** :

`https://adoptapy.herokuapp.com/api/adoptions/`

`GET` obtain a post for the unique id :

`https://adoptapy.herokuapp.com/api/adoptions/60ada3274195d40015103d0c`

`PUT` edit a adoption post by the id **auth admin is required** :

`https://adoptapy.herokuapp.com/api/adoptions/:id`

`DELETE` delete an adoption post by id **auth admin is required **:

`https://adoptapy.herokuapp.com/api/adoptions/:id`

`GET` fetch all posts filtered by specie :

`https://adoptapy.herokuapp.com/api/adoptions?specie=perro`

`GET` fetch all posts filtered by sex :

`https://adoptapy.herokuapp.com/api/adoptions?sex=hembra`


```bash
authorizations are the same on all endpoints
```

the parameters to insert a new pet depend on the enpoint, they are all the same data.

| parameters |  type | endpoint  |
|---|---|---|
|petName|string|/adoptions, /lost, /found|
|petSpecie|string|/adoptions, /lost, /found|
|month|numeric|/adoptions|
|year|numeric|/adoptions|
|petSize|string|/adoptions, /lost, /found|
|petSex|string|/adoptions, /lost, /found|
|petBreed|string|/adoptions, /lost, /found|
|petDescription|string|/adoptions, /lost, /found|
|petCity|string|/adoptions, /lost, /found|
|latitude|numeric|/adoptions, /lost, /found|
|longitude|numeric|/adoptions, /lost, /found|
|petPictures|file|/adoptions, /lost, /found|
|name|string|/adoptions, /lost, /found|
|number|numeric|/adoptions, /lost, /found|
|whatsapp|boolean|/adoptions, /lost, /found|
|petVaccines|boolean|/adoptions, /lost, /found|
|petSterilized|boolean|/adoptions, /lost, /found|
|postType|string|/adoptions|

`the postType parameter is only needed in /adoptions and requires to send "adoption" to verify the age, if not sent it cannot accept the data insertion.`



### Licence
This project is licensed under the GNU GENERAL PUBLIC LICENSE V2 - view the file [LICENSE.md](LICENSE.md) for details.

### To Do List

- [x] Make the schema, controller and route of Rescue, only organizations will be able to publish `finish`
- [x] Make the invitation token to create an organization `finish`
- [x] Validate each publication entry `finish`
- [x] Being able to upload more than one image to cloudinary `finish`
- [x] verify the data before uploading the image
<!-- - [ ] Make a model to gather users and give them a respective role -->
<!-- - [ ] Add a section where users will be able to delete their posts, through an admin. -->
- [x] Finish the first version :)

⌨️ with ❤️ by [ManuelMaciel](https://github.com/ManuelMaciel) 😊

# AdoptaPY

![](https://img.shields.io/badge/Ask%20me-anything-1abc9c.svg) ![](https://img.shields.io/github/license/manuelmaciel/adoptapy-back.svg) ![](https://img.shields.io/github/stars/manuelmaciel/adoptapy-back.svg) ![](https://img.shields.io/github/issues/manuelmaciel/adoptapy-back.svg) ![](https://img.shields.io/badge/Maintained%3F-yes-green.svg)![](https://img.shields.io/github/followers/manuelmaciel.svg?style=social&label=Follow&maxAge=2592000)
## Introduction

**Welcome to AdoptaPY API.**

_AdoptaPY is dedicated to providing dogs and cats with a second chance at finding safe and loving homes._

![](https://res.cloudinary.com/adoptapy/image/upload/v1620443346/project-img/undraw_pet_adoption_2qkw_xmv1a6.png)
## Installation

### Local

Make sure git and node.js are installed on your computer. Then you can clone this repository :

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
- helmet
- jsonwebtoken
- mongoose
- multer
- multer-storage-cloudinary
- uuid
- nodemon
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

Let's start by making a `GET` request to get a list of all the adoption posts:

`https://adoptapy.herokuapp.com/api/adoptions/list`

Here is the response :

```json
"data": [
    {
      "petLocation": {
          "latitude": 40.73061,
          "longitude": -73.935242
      },
      "petContact": {
          "name": "Veronica",
	  "number": "606-000-0000"
      },
      "petPictures": [
	  "https://res.cloudinary.com/adoptapy/image/upload/v1620445044/adoptapy/bpv48apcud2u8xp4zma3.jpg"
      ],
      "date": "2021-05-08T03:26:43.110Z",
      "_id": "60960774c7570e001552a7c1",
      "petName": "Draco",
      "petSpecie": "Dog",
      "petAge": "3 years",
      "petSize": "Big",
      "petSex": "Male",
      "petBreed": "Husky",
      "petDescription": "Cute Dog :3",
      "petCity": "New York",
    }
```

### Adoptions, Lost, Found post  endpoints

```bash
Found and lost endpoints are exactly the same, only the /adoptions is changed to /lost if it is a lost enpoint and /found if it is a found endpoint.
```

`GET` obtains a post for the unique id :

`https://adoptapy.herokuapp.com/api/adoptions/list/1`

`GET` fetches all posts filtered by specie :

`https://adoptapy.herokuapp.com/api/adoptions/list/specie/:petSpecie`

`GET` fetches all posts filtered by sex :

`https://adoptapy.herokuapp.com/api/adoptions/list/sex/:petSex`

`GET` fetches all posts filtered by city:

`https://adoptapy.herokuapp.com/api/adoptions/list/city/:petCity`

`GET` fetches all posts filtered by size:

`https://adoptapy.herokuapp.com/api/adoptions/list/size/:petSize`

`POST` create a new publication about an adoption **auth not required** :

`https://adoptapy.herokuapp.com/api/adoptions/createAdoption`

`PUT` edits a publication of adoption by the id **auth admin is required** :

`https://adoptapy.herokuapp.com/api/adoptions/editAdoption/:id`

`DELETE` deletes an adoption publication by id **auth admin is required **:

`https://adoptapy.herokuapp.com/api/adoptions/deleteAdoption/:id`

```bash
authorizations are the same on all endpoints
```

### Organizations endpoints

`GET` Obtains the organization's profile data :

`https://adoptapy.herokuapp.com/api/org/list/:id`

`GET` obtains a list of all organizations :

`https://adoptapy.herokuapp.com/api/org/list`

`GET` obtains a list of all organizations by city :

`https://adoptapy.herokuapp.com/api/org/list/:city`

`POST` create a new organization **invitation token required, not yet implemented.**:

`https://adoptapy.herokuapp.com/api/org/createOrganization`

`POST` to login:

`https://adoptapy.herokuapp.com/ap/org/signin`

`PUT` edit an organization's data:

`https://adoptapy.herokuapp.com/ap/org/edit/:id`

`PUT` eliminates an organization by id:

`https://adoptapy.herokuapp.com/ap/org/delete/:id`

### Organizations endpoints

`POST` create a new admin  **only admins can create admins, not yet implemented.**:

`https://adoptapy.herokuapp.com/api/admin/createAdmin`

`POST` to login:

`https://adoptapy.herokuapp.com/api/admin/signin`

### Licence
This project is licensed under the GNU GENERAL PUBLIC LICENSE V2 - view the file [LICENSE.md](LICENSE.md) for details.

### To Do List

- [ ] Make the schema, controller and route of Rescue, only organizations will be able to publish
- [ ] Make the invitation token to create an organization
- [ ] Validate each publication entry
- [ ] Being able to upload more than one image to cloudinary
- [ ] Make a model to gather users and give them a respective role
- [ ] Add a section so that those who published can delete their posts by means of an admin.
- [x] Finish the first version :)

⌨️ with ❤️ by [ManuelMaciel](https://github.com/ManuelMaciel) 😊

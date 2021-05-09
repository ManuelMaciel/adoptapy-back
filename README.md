# AdoptaPY

![](https://img.shields.io/badge/Ask%20me-anything-1abc9c.svg) ![](https://img.shields.io/github/license/manuelmaciel/adoptapy-back.svg) ![](https://img.shields.io/github/stars/manuelmaciel/adoptapy-back.svg) ![](https://img.shields.io/github/issues/manuelmaciel/adoptapy-back.svg) ![](https://img.shields.io/badge/Maintained%3F-yes-green.svg)![](https://img.shields.io/github/followers/manuelmaciel.svg?style=social&label=Follow&maxAge=2592000)
## Introduction

**Welcome to AdoptaPY API.**

_AdoptaPY is a platform dedicated to giving dogs and cats with a second chance to find safe and loving homes._

![](https://res.cloudinary.com/adoptapy/image/upload/v1620443346/project-img/undraw_pet_adoption_2qkw_xmv1a6.png)
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

Let's start by making a `GET` request to get the entire list of adoption posts:

`https://adoptapy.herokuapp.com/api/adoptions/`

This is the response:

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
Found and lost endpoints are exactly the same, only the /adoptions is changed to /lost if it is a lost endpoint, and /found if it is a found endpoint.
```

`POST` create a new adoption post **auth not required** :

`https://adoptapy.herokuapp.com/api/adoptions/`

`GET` obtain a post for the unique id :

`https://adoptapy.herokuapp.com/api/adoptions/1`

`PUT` edit a adoption post by the id **auth admin is required** :

`https://adoptapy.herokuapp.com/api/adoptions/:id`

`DELETE` delete an adoption post by id **auth admin is required **:

`https://adoptapy.herokuapp.com/api/adoptions/:id`

`GET` fetch all posts filtered by specie :

`https://adoptapy.herokuapp.com/api/adoptions/specie/:petSpecie`

`GET` fetch all posts filtered by sex :

`https://adoptapy.herokuapp.com/api/adoptions/sex/:petSex`

`GET` fetch all posts filtered by city:

`https://adoptapy.herokuapp.com/api/adoptions/city/:petCity`

`GET` fetch all posts filtered by size:

`https://adoptapy.herokuapp.com/api/adoptions/size/:petSize`

```bash
authorizations are the same on all endpoints
```

### Organizations endpoints

`POST` create a new organization **invitation token required, not implemented yet.**:

`https://adoptapy.herokuapp.com/api/org/`

`GET` Obtain the organization's profile data :

`https://adoptapy.herokuapp.com/api/org/:id`

`PUT` edit an organization's data:

`https://adoptapy.herokuapp.com/ap/org/:id`

`DELETE` delete an organization by id:

`https://adoptapy.herokuapp.com/ap/org/:id`

`GET` obtain a list of all organizations :

`https://adoptapy.herokuapp.com/api/org`

`GET` obtain a list of all organizations by city :

`https://adoptapy.herokuapp.com/api/org/:city`

`POST` to login:

`https://adoptapy.herokuapp.com/ap/org/signin`

### Organizations endpoints

`POST` create a new admin  **only admins can create admins, not implemented yet.**:

`https://adoptapy.herokuapp.com/api/admin`

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
- [ ] Add a section where users will be able to delete their posts, through an admin.
- [x] Finish the first version :)

⌨️ with ❤️ by [ManuelMaciel](https://github.com/ManuelMaciel) 😊

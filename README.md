# my-contacts

MyContacts API is a simple and efficient RESTful API that serves as a contact management system. It allows users to create, retrieve, update, and delete contacts. The API is built with Node.js and Express, using PostgreSQL as the database to store contact information.
## Features

- Create a new contact with details such as name, email, phone number, and address.
- Retrieve a contact by its unique identifier or search for contacts by name, email, or phone number.
 - Update the details of an existing contact.
- Delete a contact from the system.

API Endpoints:

- GET /contacts: Retrieve a list of all contacts.
- GET /contacts/:id: Retrieve a specific contact by its ID.
- POST /contacts: Create a new contact.
- PUT /contacts/:id: Update the details of a contact.
- DELETE /contacts/:id: Delete a contact from the system.

Request and Response Examples:
```sh
POST /contacts
Request Body:
{
  "name": "John Doe",
  "email": "johndoe@example.com",
  "phone": "+1234567890",
  "address": "123 Main Street, City"
}
```
```sh
Response Body:
{
  "_id": 1,
  "name": "John Doe",
  "email": "johndoe@example.com",
  "phone": "+1234567890",
  "address": "123 Main Street, City",
  "createdAt": "2023-08-03T12:00:00Z",
  "updatedAt": "2023-08-03T12:00:00Z"
}
```

## Installation

my-contacts requires [Node.js](https://nodejs.org/) v10+ to run.

Clone the repository:

```sh
git clone https://github.com/filipedss/mycontacts-api.git
```
Change directory to the project folder:

```sh
cd mycontacts-api
```
The API will now be running on http://localhost:3000.
```sh
npm start
```
## Contributing:

If you want to contribute to this project, please follow these steps:

- Fork the repository.
- Create a new branch with a descriptive name for your feature or bug fix.
- Make your changes and commit them with clear commit messages.
- Push your changes to your forked repository.
- Submit a pull request to the main repository's master branch.




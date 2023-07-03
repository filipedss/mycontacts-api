const { v4 } = require('uuid');

let contacts = [
  {
    id: v4(),
    name: 'Filipe',
    email: 'filipssant@gmail.com',
    phone: '971065133',
    category_id: v4(),
  },
  {
    id: v4(),
    name: 'Lucas',
    email: 'lucasteste@gmail.com',
    phone: '992883282',
    category_id: v4(),
  },
];
class ContactRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacts);
    });
  }

  findById(id) {
    return new Promise((resolve) => {
      resolve(contacts.find((contact) => contact.id === id));
    });
  }

  findByEmail(email) {
    return new Promise((resolve) => {
      resolve(contacts.find((contact) => contact.email === email));
    });
  }

  delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);
      resolve();
    });
  }
}

module.exports = new ContactRepository();

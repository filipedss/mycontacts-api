const { uuid } = require('uuidv4');

const contacts = [
  {
    id: uuid(),
    name: 'Filipe',
    email: 'filipssant@gmail.com',
    phone: '971065133',
    category_id: uuid(),
  },
  {
    id: uuid(),
    name: 'Lucas',
    email: 'lucasteste@gmail.com',
    phone: '992883282',
    category_id: uuid(),
  },
];
class ContactRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacts);
    });
  }
}

module.exports = new ContactRepository();

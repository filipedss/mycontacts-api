const { v4 } = require('uuid');

const contacts = [
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
}

module.exports = new ContactRepository();

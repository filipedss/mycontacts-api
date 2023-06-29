const ContactsRepository = require('../repositories/ContactRepository');

class ContactController {
  index(request, response) {
    // Listar todos os registros
    const contacts = ContactsRepository.findAll();
    response.json(contacts);
  }

  show() {
    // Obter um registro
  }

  store() {
    // Criar um novo registro
  }

  delete() {
    // Deletar um novo registro
  }
}

module.exports = new ContactController();

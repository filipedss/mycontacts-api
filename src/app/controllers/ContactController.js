const ContactsRepository = require('../repositories/ContactRepository');

class ContactController {
  async index(request, response) {
    // Listar todos os registros
    const contacts = await ContactsRepository.findAll();
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

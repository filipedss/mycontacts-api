const ContactsRepository = require('../repositories/ContactRepository');

class ContactController {
  async index(request, response) {
    // Listar todos os registros
    const contacts = await ContactsRepository.findAll();
    response.json(contacts);
  }

  async show(request, response) {
    // Obter um registro
    const { id } = request.params;
    const contact = await ContactRepository.findById(id);

    if (!contact) {
      // 404 not found
      return response.status(404).json({ error: 'user not found' });
    }
  }

  store() {
    // Criar um novo registro
  }

  delete() {
    // Deletar um novo registro
  }
}

module.exports = new ContactController();

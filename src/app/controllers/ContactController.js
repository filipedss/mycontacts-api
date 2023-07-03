const ContactRepository = require('../repositories/ContactRepository');

class ContactController {
  async index(request, response) {
    // Listar todos os registros
    const contacts = await ContactRepository.findAll();
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
    response.json(contact);
  }

  async store(request, response) {
    // Criar um novo registro
    const {
      name, email, phone, category_id
    } = request.body;

    // name required
    if (!name) {
      return response.status(400).json({ error: 'Name is required ' });
    }

    // Check if contact already exists
    const contactExists = await ContactRepository.findByEmail(email);

    if (contactExists) {
      return response.status(400).json({ error: 'This e-mail is already been taken' });
    }

    const contact = await ContactRepository.create({
      name, email, phone, category_id,
    });

    response.json(contact);
  }

  async delete(request, response) {
    // Deletar um novo registro
    const { id } = request.params;

    const contact = await ContactRepository.findById(id);

    if (!contact) {
      // 404 not found
      return response.status(404).json({ error: 'User not found' });
    }

    await ContactRepository.delete(id);
    // 204: No content
    response.sendStatus(204);
  }
}

module.exports = new ContactController();

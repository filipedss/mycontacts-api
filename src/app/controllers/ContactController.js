class ContactController {
  index(request, response) {
    // Listar todos os registros
    response.send('SEND FROM CONTACT CONTROLLER')
  }

  show() {
    // Obter um registro
  }

  store() {
    // Criar novo registro
  }

  update() {
    // Editar um registro
  }

  delete() {
    // Deletar um registro
  }
}

// Singleton
module.exports = new ContactController();

import createConnection from '../../../database/index'
import { Usuario } from '../../../database/entity/Usuario'

class User {
  public createUser(body) {
    return createConnection().then((connection) => {
      let user = new Usuario()
      user.Nome = body.name
      user.Email = body.email
      user.Senha = body.password
      user.Token = body.token

      return connection.manager.save(user)
    })
  }
}

export default new User()

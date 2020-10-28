import { v1 as uuidv1 } from 'uuid'

export default function buildFilePayload(userID) {
  return {
    usuarioId: userID,
    eFavorito: 0,
    nome: uuidv1(),
    arquivo: uuidv1()
  }
}

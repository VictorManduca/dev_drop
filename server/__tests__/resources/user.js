import { v4 as uuidv4 } from 'uuid'

export function buildUserPayload() {
  return {
    nome: uuidv4(),
    email: uuidv4(),
    senha: uuidv4()
  }
}

import { v1 as uuidv1 } from 'uuid'

export default function buildFolderPayload(userID, categoryID, fileID) {
  return {
    usuarioId: userID,
    tipoCategoriaId: categoryID,
    arquivoId: fileID,
    nome: uuidv1()
  }
}

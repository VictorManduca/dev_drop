import { v1 as uuidv1 } from 'uuid'

export default function buildFolderPayload(userID, folderID, permissionID) {
  return {
    usuarioId: userID,
    pastaId: folderID,
    permissaoId: permissionID,
    nome: uuidv1()
  }
}

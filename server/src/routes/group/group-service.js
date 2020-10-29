import { oneFolder } from '../../repository/folder-repository'
import { onePermission } from '../../repository/permission'
import { oneUser } from '../../repository/user'

export async function checkIfDataExists(payload) {
  if (
    (await checkIfFolderExists(payload.pastaId)) &&
    (await checkIfPermissionExists(payload.permissaoId)) &&
    (await checkIfUserExists(payload.usuarioId))
  ) {
    return true
  } else {
    return false
  }
}

export async function checkIfFolderExists(folderId) {
  const folder = await oneFolder({ id: folderId })

  return folder != null
}

export async function checkIfPermissionExists(permissionId) {
  const permission = await onePermission({ id: permissionId })

  return permission != null
}

export async function checkIfUserExists(userId) {
  const user = await oneUser({ id: userId })

  return user != null
}

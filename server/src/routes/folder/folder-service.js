import { oneCategory } from '../../repository/category'
import { oneFile } from '../../repository/file-repository'
import { oneUser } from '../../repository/user'

export async function checkIfDataExists(payload) {
  if (await checkIfUserExists(payload.usuarioId)) {
    return true
  } else {
    return false
  }
}

export async function checkIfCategoryExists(categoryId) {
  const category = await oneCategory({ id: categoryId })

  return category != null
}

export async function checkIfFileExists(fileId) {
  const file = await oneFile({ id: fileId })

  return file != null
}

export async function checkIfUserExists(userId) {
  const user = await oneUser({ id: userId })

  return user != null
}

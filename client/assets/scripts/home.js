import {
  callNewFolderApi,
  callAllUserFolders,
  callDeleteFolderApi,
} from './api/call-folder'

export async function createFolder() {
  try {
    const responseApi = await callNewFolderApi({
      usuarioId: this.userId,
      tipoCategoriaIndice: this.modelFolder == true ? 1 : 2,
      nome: this.folderName,
    })

    if (responseApi.status == 201) {
      this.$toast.success('Folder Created')
    } else {
      this.$toast.error('Something went wrong')
    }
  } catch (error) {
    console.error({ error: `[scripts|home] ${error}` })
    return this.$toast.error('Something went wrong')
  }
}

export async function deleteFolder() {
  try {
    const responseApi = await callDeleteFolderApi(folderId)

    if (responseApi.status == 201) {
      this.$toast.success('Folder Deleted')
      this.$router.push({ name: 'home' })
    } else {
      this.$toast.error('Não deletada')
    }
  } catch (error) {
    return Promise.reject(`[scripts|home] ${error}`)
  }
}

export async function getAllFolders(userId) {
  try {
    const responseApi = await callAllUserFolders(userId)

    if (responseApi.status == 200) {
      return responseApi.data
    } else {
      this.$toast.error('Não deletada')
    }
  } catch (error) {
    return Promise.reject(`[scripts|home] ${error}`)
  }
}

export async function goHomeFolder() {
  try {
    return await this.$router.push({ name: 'home-folder' })
  } catch (error) {
    return Promise.reject(`[scripts|home] ${error}`)
  }
}

import { callNewFolderApi, callDeleteFolderApi } from './api/call-new-folder'
import { callNewFileApi, callDeleteFileApi } from './api/call-file'

export async function getFile(event) {
  const file = event.target.files[0]

  const result = await toBase64(file).catch((error) => Error(error))
  if (result instanceof Error) {
    console.error('Error: ', result.message)
  } else {
    this.file = result
  }
}

const toBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader()

    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = (error) => reject(error)
  })

export async function createFile() {
  try {
    // tipoCategoriaIndice: this.modalFile == true ? 1 : 2,

    const responseApi = await callNewFileApi({
      usuarioId: this.userId,
      eFavorito: this.favorite === true ? 1 : 0,
      nome: this.name,
      arquivo: this.file,
    })

    if (responseApi.status == 201) {
      return this.$toast.success('File Created')
      // this.$router.push({ name: 'login' })
    } else {
      return this.$toast.error('Something went wrong')
    }
  } catch (error) {
    console.error({ error: `[scripts|home] ${error}` })
    return this.$toast.error('Something went wrong')
  }
}

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

export async function goHomeFolder() {
  try {
    return await this.$router.push({ name: 'home-folder' })
  } catch (error) {
    return Promise.reject(`[scripts|home] ${error}`)
  }
}

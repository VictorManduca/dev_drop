import {
  callNewFileApi,
  callGetAllFoldersFile,
  callDeleteFileApi,
} from './api/call-file'

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
    const responseApi = await callNewFileApi({
      usuarioId: this.userId,
      eFavorito: this.favorite === true ? 1 : 0,
      nome: this.name,
      arquivo: this.file,
      pastaId: parseInt(localStorage.getItem('folderId')),
    })

    if (responseApi.status == 201) {
      return this.$toast.success('File Created')
    } else {
      return this.$toast.error('Something went wrong')
    }
  } catch (error) {
    console.error({ error: `[scripts|home] ${error}` })
    return this.$toast.error('Something went wrong')
  }
}

export async function getFiles(userId, folderId) {
  try {
    const responseApi = await callGetAllFoldersFile(userId, folderId)

    if (responseApi.status == 200) {
      return responseApi.data
    } else {
      return this.$toast.error('Something went wrong')
    }
  } catch (error) {
    console.error({ error: `[scripts|home] ${error}` })
    return this.$toast.error('Something went wrong')
  }
}

export async function goBack() {
  return this.$router.back()
}

export async function deleteFile() {
  try {
    const responseApi = await callDeleteFileApi({ fileId })

    if (responseApi.status == 201) {
      this.$toast.success('File Deleted')
      this.$router.push({ name: 'home-folder' })
    } else {
      this.$toast.error('Not deleted')
    }
  } catch (error) {
    return Promise.reject(`[scripts|file] ${error}`)
  }
}

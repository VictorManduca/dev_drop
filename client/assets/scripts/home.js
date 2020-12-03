import { callNewFolderApi } from './api/call-new-folder'
import { callDeleteFolderApi } from './api/call-new-folder'

export async function createFolder() {
  try {
    const responseApi = await callNewFolderApi({
      usuarioId: this.usuario,
      arquivoId: this.arquivo,
      tipoCategoriaId: this.categoria,
      nome: this.nome,
    })

    if (responseApi.status == 201) {
      this.$toast.success('Folder Created')
      this.$router.push({ name: 'login' })
    } else {
      this.$toast.error('Something went wrong')
    }
  } catch (error) {
    return Promise.reject(`[scripts|home] ${error}`)
  }
}

export async function deleteFolder() {
  try {
    const responseApi = await callDeleteFolderApi({ id: this.id })

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

export function goHomePasta() {
  try {
    this.$router.push({ name: 'homePasta' })
  } catch (error) {
    return Promise.reject(`[scripts|home] ${error}`)
  }
}

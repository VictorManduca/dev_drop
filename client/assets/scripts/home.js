import { padStart } from 'core-js/fn/string'
import { callNewFolderApi } from './api/call-new-folder'
import { callDeleteFolderApi } from './api/call-new-folder'

export async function createFolder() {
    try{ //função que chama API
        const responseApi = await callNewFolderApi({ usuario: this.usuarioId, arquivo: this.arquivoId, categoria: this.tipoCategoriaId, nome: this.nome })

        if (responseApi.status == 201) {
            this.$toast.success('Folder Created')
            this.$router.push({ name: 'login' })
        } else {
          this.$toast.error('Something went wrong')
        }

    } catch (error) {
        return Promise.reject(`[scripts|home] ${ error }`)
    }
    
}

export async function deleteFolder() {
    try{
      const responseApi = await callDeleteFolderApi({ id: this.id })

      if (responseApi.status == 201) {
        this.$toast.success('Folder Deleted')
        this.$router.push({ name: 'home' })
      } else {
        this.$toast.error('Não deletada')
      }

    } catch (error) {
      return Promise.reject(`[scripts|home] ${ error }`)
  }
}
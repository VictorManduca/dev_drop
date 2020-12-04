import { callNewFileApi, callDeleteFileApi } from './api/call-file'

export async function createFile() {
  this.$refs.input.value = null
  this.$refs.input.click()

    try{ //função que chama API
        const responseApi = await callNewFileApi({ 
          usuarioId: this.usuario, 
          eFavorito: this.eFavorito, 
          nome: this.nome, 
          arquivo: this.arquivo })

        if (responseApi.status == 201) {
            this.$toast.success('File Created')
            this.$router.push({ name: 'login' })
        } else {
          this.$toast.error('Something went wrong create file')
        }

    } catch (error) {
        return Promise.reject(`[scripts|file] ${ error }`)
    }
    
}

export async function deleteFile() {
    try{
      const responseApi = await callDeleteFileApi({ fileId })

      if (responseApi.status == 201) {
        this.$toast.success('File Deleted')
        this.$router.push({ name: 'home-folder' })
      } else {
        this.$toast.error('Not deleted')
      }

    } catch (error) {
      return Promise.reject(`[scripts|file] ${ error }`)
  }
}
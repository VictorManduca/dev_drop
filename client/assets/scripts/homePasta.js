import { callNewFileApi } from './api/call-file'
import { callDeleteFileApi } from './api/call-file'

export async function createFile() {
    try{ //função que chama API
        const responseApi = await callNewFileApi({ usuarioId: this.usuarioId, eFavorito: this.eFavorito, nome: this.nome, arquivo: this.arquivo })

        this.$refs.input.value = null
        this.$refs.input.click()

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

handleFile({target});{
    this.form.image = ev.target.files[0]
}


export async function deleteFile() {
    try{
      const responseApi = await callDeleteFileApi({ usuarioId: this.usuarioId })

      if (responseApi.status == 201) {
        this.$toast.success('File Deleted')
        this.$router.push({ name: 'homePasta' })
      } else {
        this.$toast.error('Not deleted')
      }

    } catch (error) {
      return Promise.reject(`[scripts|file] ${ error }`)
  }
}
import { callNewAccountApi } from './api/call-new-account'

export async function newAccount() {
	try {
    if (this.email == null || this.pass == null || this.name == null) {
      this.$toast.error('Something went wrong')
    } else {
      const responseApi = await callNewAccountApi({ email: this.email, senha: this.pass, nome: this.name })

      if (responseApi.status == 201) {
        this.$toast.success('Account created successfully')
        this.$router.push({ name: 'home' })
      } else {
        this.$toast.error('Something went wrong')
      }
    }
  } catch (error) {
    return Promise.reject(`[scripts|newAccount] ${ error }`)
  }
}

export async function goBack() {
  this.$router.back()
}
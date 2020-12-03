import { callNewAccountApi } from './api/call-new-account'

export async function newAccount() {
  try {
    if (this.email == null || this.pass == null || this.name == null) {
      return this.$toast.error('Blank inputs')
    } else {
      const responseApi = await callNewAccountApi({
        email: this.email,
        senha: this.pass,
        nome: this.name,
      })

      if (responseApi.status == 201) {
        await this.$toast.success('Account created successfully')
        return await this.$router.push({ name: 'index' })
      } else {
        return this.$toast.error('Something went wrong')
      }
    }
  } catch (error) {
    console.error({ error: `[scripts|newAccount] ${error}` })
    return this.$toast.error('Something went wrong')
  }
}

export async function goBack() {
  this.$router.back()
}

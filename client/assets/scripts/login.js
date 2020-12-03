import { callLoginApi } from './api/call-login'

export async function login() {
  try {
    const responseApi = await callLoginApi({
      email: this.email,
      password: this.password,
    })

    if (responseApi.status == 200) {
      this.$toast.success('Successfully authenticated')
      this.$localStorage.setItem('usuarioId', responseApi.body.data.id)
      this.$router.push({ name: 'home' })
    } else {
      this.$toast.error('Something is wrong with your email or password')
    }
  } catch (error) {
    return Promise.reject(`[scripts|login] ${error}`)
  }
}

export async function goNewAccount() {
  return this.$router.push({ name: 'new-account' })
}

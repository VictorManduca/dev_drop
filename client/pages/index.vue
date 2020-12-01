<template src="../assets/templates/login.html"></template>

<style>
@import '../assets/styles/login.css';
</style>

<script>
import { login, goNewAccount } from '../assets/scripts/login'
import { callLoginApi } from '../assets/scripts/api/call-login'

export default {
  data: () => {
    return {
      email: null,
      password: null,
      emailNew: null,
    }
  },
  methods: {
    login,
    callLoginApi,
    goNewAccount,
  },
}
</script>

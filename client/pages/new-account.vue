<template src="../assets/templates/new_account.html"></template>

<style>
@import '../assets/styles/new_account.css';
</style>

<script>
import { newAccount, goBack } from '../assets/scripts/new-account'
import { callNewAccountApi } from '../assets/scripts/api/call-account'

export default {
  data: () => {
    return { email: null, pass: null, name: null }
  },
  methods: {
    newAccount,
    callNewAccountApi,
    goBack,
  },
}
</script>

<template src="../assets/templates/home-folder.html"></template>

<style>
@import '../assets/styles/home-folder.css';
</style>

<script>
import { createFile, deleteFile } from '../assets/scripts/home-folder'
import { callNewFileApi, callDeleteFileApi } from '../assets/scripts/api/call-file'

export default{
  data: () => {
    return {
      //todas as variáveis
      usuarioId: null,
      eFavorito: null,
      arquivo: null,
      nome: null
    }
  },
  //colocar todas as funções
  methods: {
    createFile,
    deleteFile,
    callNewFileApi,
    callDeleteFileApi,
  },
}
</script>
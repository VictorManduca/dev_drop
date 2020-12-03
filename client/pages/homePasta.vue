<template src="../assets/templates/homePasta.html"></template>

<style>
@import '../assets/styles/homePasta.css';
</style>

<script>
import { createFolder, deleteFolder } from '../assets/scripts/homePasta'
import { callNewFolderApi, callDeleteFolderApi } from '../assets/scripts/api/call-file'

export default{
  data: () => {
    return {
      //todas as variáveis
      usuarioId: null,
      eFavorito: null,
      arquivo: null,
      nome: null,
      image: ''
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
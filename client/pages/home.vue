<template src="../assets/templates/home.html"></template>

<style>
@import '../assets/styles/home.css';
</style>

<script>
import { createFolder, deleteFolder, goHomePasta } from '../assets/scripts/home'
import { callNewFolderApi, callDeleteFolderApi } from '../assets/scripts/api/call-new-folder'

export default{
  data: () => {
    return {
      //todas as variáveis
      usuarioId: null,
      arquivoId: null,
      tipoCategoriaId: null,
      nome: null,
      items: [{nome: "silvao o homi", descricao: "velho da rola grande"}]
    }
  },
  //colocar todas as funções
  methods: {
    createFolder,
    deleteFolder,
    callNewFolderApi,
    callDeleteFolderApi,
    goHomePasta
  },
}
</script>
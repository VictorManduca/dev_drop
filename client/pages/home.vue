<template src="../assets/templates/home.html"></template>

<style>
@import '../assets/styles/home.css';
</style>

<script>
import {
  createFolder,
  deleteFolder,
  createFile,
  getFile,
  goHomeFolder,
} from '../assets/scripts/home'

import {
  callNewFolderApi,
  callDeleteFolderApi,
} from '../assets/scripts/api/call-new-folder'

export default {
  data: () => {
    return {
      modalFile: null,
      modelFolder: null,

      userId: parseInt(localStorage.getItem('usuarioId')),
      file: null,
      favorite: null,
      name: null,
      folderName: null,
      items: [],
    }
  },
  methods: {
    createFile,
    getFile,
    goHomeFolder,

    createFolder,
    deleteFolder,
    callNewFolderApi,
    callDeleteFolderApi,
  },
}
</script>

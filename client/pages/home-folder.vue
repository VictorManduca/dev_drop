<template src="../assets/templates/home-folder.html"></template>

<style>
@import '../assets/styles/home-folder.css';
</style>

<script>
import { createFile, deleteFile, getFile } from '../assets/scripts/home-folder'

import {
  callNewFileApi,
  callDeleteFileApi,
} from '../assets/scripts/api/call-file'

export default {
  data: () => {
    return {
      userId: parseInt(localStorage.getItem('usuarioId')),
      file: null,
      favorite: null,
      name: null,
    }
  },
  methods: {
    createFile,
    deleteFile,
    getFile,

    callNewFileApi,
    callDeleteFileApi,
  },
}
</script>

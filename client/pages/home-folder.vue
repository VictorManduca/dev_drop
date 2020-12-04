<template src="../assets/templates/home-folder.html"></template>

<style>
@import '../assets/styles/home-folder.css';
</style>

<script>
import {
  createFile,
  deleteFile,
  getFile,
  getFiles,
  goBack,
} from '../assets/scripts/home-folder'

import {
  callNewFileApi,
  callDeleteFileApi,
} from '../assets/scripts/api/call-file'

export default {
  data: () => {
    return {
      modelFile: null,

      userId: parseInt(localStorage.getItem('usuarioId')),
      file: null,
      favorite: null,
      name: null,

      fields: [
        {
          key: 'id',
          label: 'ID',
        },
        {
          key: 'name',
          label: 'Name',
        },
        {
          key: 'favorite',
          label: 'Favorite',
        },
        {
          key: 'image',
          label: 'Image',
        },
      ],
      items: [],
    }
  },
  methods: {
    createFile,
    deleteFile,
    getFile,
    getFiles,

    callNewFileApi,
    callDeleteFileApi,

    goBack,
  },
  async beforeMount() {
    const responseFoldersApi = await getFiles(
      parseInt(localStorage.getItem('usuarioId')),
      parseInt(localStorage.getItem('folderId'))
    )

    this.items = responseFoldersApi.data
  },
}
</script>

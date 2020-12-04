<template src="../assets/templates/home.html"></template>

<style>
@import '../assets/styles/home.css';
</style>

<script>
import {
  createFolder,
  deleteFolder,
  getAllFolders,
  goHomeFolder,
} from '../assets/scripts/home'

import {
  callNewFolderApi,
  callDeleteFolderApi,
} from '../assets/scripts/api/call-folder'

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
      fields: [
        {
          key: 'id',
          label: 'ID',
        },
        {
          key: 'name',
          label: 'Name',
        },
      ],
      items: [],
    }
  },
  methods: {
    getAllFolders,
    goHomeFolder,

    createFolder,
    deleteFolder,
    callNewFolderApi,
    callDeleteFolderApi,
  },
  async beforeMount() {
    const responseFoldersApi = await getAllFolders(this.userId)

    console.info({ data: responseFoldersApi })

    this.items = responseFoldersApi.data
  },
}
</script>

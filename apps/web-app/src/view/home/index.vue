<template>
  <div class="container">
    aaaaaaaa
    <p v-for="item in fileStore">
      <a :href="item.storeUri"></a>
      <img v-if="item.fileType==='image/jpg'" :src="item.storeUri">
    </p>
  </div>
</template>
<script setup lang="ts">
import {onMounted, ref} from 'vue';
import * as api from '../../api'

const fileStore = ref([])
const getFileStore = async () =>{
  const {data} = await api.getFileStoreList()
  console.log(data);

  fileStore.value = data as []
}

onMounted(()=>{
  getFileStore()
})
</script>

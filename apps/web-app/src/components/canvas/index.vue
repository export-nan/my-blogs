<template>
  <canvas class="cvs" ref="cvs"></canvas>
</template>
<script setup lang="ts">
import {onMounted, ref} from 'vue';


const props = defineProps<{
  id: string,
}>()

const cvs = ref()


</script>
<style lang="sass">
.cvs
  width: 100%
  height: 100%
</style>

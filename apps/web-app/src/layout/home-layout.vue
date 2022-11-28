/**
* @flie 主体布局 上中下布局方案
* @author NAN
* @date 2022-10-10
*/
<template>
  <div class="layout-container">
    <header class="layout-header">
      <MenuHeader :meun="meun"></MenuHeader>
    </header>
    <main class="layout-main">
      <router-view />
    </main>
  </div>
</template>
<script setup lang="ts">
import {TMeunItem} from '@/components/menu/menu-header'
import MenuHeader from '../components/menu/menu-header.vue';

const meun:TMeunItem[] = [
  {
    title: '首页',
    iconName: '#icon-home'
  },
  {
    title: '交个朋友',
    iconName: '#icon-bingyuanshenlu'
  }
]
</script>
<style scoped lang="sass">
.background
  position: fixed
  width: 100vw
  height: 100vh
  z-index: -1
  .background-cvs
    height: 100%
    width: 100%
    object-fit: 100% 100%
.layout-container
  background-color: var( --main-bgc )
  padding-top: 60px
.layout-header
  height: 60px
  position: fixed
  background-color: var( --minor-bgc )
  top: 0
  width: 100%

.layout-main
  min-height: calc( 100vh - 60px)

.layout-footer
  min-height: 60px
</style>

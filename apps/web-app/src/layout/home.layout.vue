/**
* @flie 主体布局 上中下布局方案
* @author NAN
* @date 2022-10-10
*/
<template>
  <div class="layout-container">
    <header class="layout-header">
      <h2 class="title">NAN-Blogs</h2>
    </header>
    <main class="layout-main">
      <router-view />
    </main>
  </div>
</template>
<style scoped lang="sass">
.layout-header
  height: 60px


.layout-main
  min-height: calc( 100vh - 60px - 60px )

.layout-footer
  min-height: 60px
</style>

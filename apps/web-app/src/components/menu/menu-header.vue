<template>
  <div class="menu flex_jcsb" ref="menu">
    <!-- <canvas class="menu-cvs" id="men-cvs"></canvas> -->
    <div class="menu-title">
      {{props.meun[actvieMeunItem].title}}
    </div>
    <a v-for="(item, key) in props.meun" class="menu-item"
      :class="{active: actvieMeunItem === key}"
      href="#" @click="(e)=>{
        actvieMeunItem = key
        // computeMeunGraph(e.target as HTMLElement)
      }"
      :key="key"
    >
      <span class="menu-item-span">
        <svg class="menu-item-icon" aria-hidden="true">
          <use :xlink:href="item.iconName"></use>
        </svg>
      </span>
    </a>
  </div>
</template>
<script setup lang="ts">
import {computed, onMounted, ref} from 'vue';
import {TMeunItem} from './menu-header'

// 获取 props
const props = defineProps<{
  meun: TMeunItem[]
}>();

// 当前选择的菜单项
const actvieMeunItem = ref<number>(0);
// function computeMeunGraph(target: HTMLElement){
//   const menu = <HTMLElement>document.querySelector('.menu')
//   const {offsetWidth: menuW, offsetHeight: menuH} = menu

//   const {offsetTop: targetY, offsetLeft: targetX} = target
//   const {offsetWidth: targetW, offsetHeight: targetH} = target

//   const cvs = <HTMLCanvasElement>document.querySelector('#men-cvs')
//   const ctx = cvs.getContext('2d')

//   cvs.width = menuW
//   cvs.height = menuH

//   ctx.fillStyle = '#fff'

//   ctx.beginPath()
//   ctx.moveTo(0,0)
//   ctx.lineTo(0,menuH)
//   ctx.lineTo(targetX - 8,menuH)
//   ctx.arc(targetX+targetW/2,menuH - 5,targetH/2 + 8 ,Math.PI , 0, false)
//   ctx.lineTo(targetX + targetW + 8, menuH)
//   ctx.lineTo(menuW,menuH)
//   ctx.lineTo(menuW,0)
//   ctx.lineTo(0,0)
//   ctx.fill()
//   ctx.closePath()
//   //const clipPathTem = ``
// }




</script>
<style lang="sass">
.menu
  display: flex
  height: 60px
  padding: 10px 20px
  box-sizing: border-box
  flex-wrap: nowrap
  justify-content: end
  position: relative
  .menu-title
      white-space: nowrap
      line-height: 40px
      margin-right: 40px

.menu-item
  margin: 0 10px
  display: block
  border-radius: 50%
  transition: .3s margin
  box-sizing: border-box

.menu-item-span
  width: 50px
  height: 50px
  padding: 10px
  display: block
  box-sizing: border-box
  border-radius: 50%

.menu-item-icon
  width: 30px
  height: 30px
  pointer-events: none

.menu-item.active
  padding: 10px
  height: min-content
  background-color: var( --main-bgc )
  margin-top: 10px
  box-sizing: content-box
  .menu-item-span
    background-color: #ff0



.menu-cvs
  position: absolute
  z-index: -1
  top: 0
  left: 0
</style>

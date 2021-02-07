<template lang="pug">
div(class="flex-none h-screen overflow-auto border-r border-gray-300 dark:border-gray-700" style="width: 241px;")
  h1(class="py-4 text-xl border-b border-gray-300 dark:border-gray-700 flex justify-center items-end")
    span(class="mr-2 -mt-4 text-2xl") 🧰
    | Silent Kits
  nav(class="py-4 space-y-6")
    section(class="flex flex-col")
      h2(class="px-4 text-sm uppercase text-gray-500") Components
      a(href="javascript:" class="px-4 py-1 hover:bg-gray-200" @click="go('/theme-switch')") theme-switch
    section(class="flex flex-col")
      h2(class="px-4 text-sm uppercase text-gray-500") Tailwind CSS Plugins
      a(href="javascript:" class="px-4 py-1 hover:bg-gray-200" @click="go('/tailwindcss/hover')") hover

div(class="flex-1 overflow-auto flex flex-col")
  component(:is="view")

theme-switch
</template>

<script lang="ts" setup>
import {reactive} from 'vue'

import ThemeSwitch from '/theme-switch'

import useRoute from './router'

const {go, view} = useRoute()
</script>

<style>
@tailwind base;
@tailwind utilities;
</style>

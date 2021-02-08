<template lang="pug">
div(class="flex-none h-screen overflow-auto border-r border-gray-300 dark:border-gray-700" style="width: 241px;")
  h1(class="py-4 text-xl border-b border-gray-300 dark:border-gray-700 flex justify-center items-end")
    span(class="mr-2 -mt-4 text-2xl") 🧰
    | Silent Kits
  nav(class="py-4 space-y-6")
    section(v-for="(items, group) of navItems" class="flex flex-col")
      h2(class="px-4 py-1 text-sm uppercase text-gray-500 dark:text-gray-400") {{ group }}
      a(
        v-for="(name, path) of items"
        href="javascript:"
        :class="['px-4 py-1', route === path ? 'text-white bg-emerald-700' : 'hover:bg-gray-200 dark:hover:bg-gray-800']"
        @click="go(path)"
      ) {{ name }}

div(class="flex-1 overflow-auto flex flex-col")
  component(:is="view")

theme-switch
</template>

<script lang="ts" setup>
import ThemeSwitch from '/components/theme-switch'

import useRoute from './router'

const {go, route, view} = useRoute()

const navItems = {
  'Components': {
    '/components/theme-switch': 'theme-switch',
  },
  'Composables': {
    '/composables/dark': 'useDark',
  },
  'Tailwind CSS Plugins': {
    '/tailwindcss/hover': 'hover',
  },
}
</script>

<style>
@tailwind base;
@tailwind utilities;
</style>

<template lang="pug">
pre(class="m-auto text-gray-500")
  | {
  | &nbsp;&nbsp;dark: <span class="text-black dark:text-white">{{ dark }}</span>
  | }
</template>

<script lang="ts" setup>
import useDark from '/composables/dark'

const {dark} = useDark()
</script>

<template lang="pug">
pre(class="m-auto text-gray-500")
  | {
  | &nbsp;&nbsp;dark: <span class="text-purple-600 dark:text-purple-500">{{ dark }}</span>
  | }
</template>

<script lang="ts" setup>
import useDark from '/composables/dark'

const {dark} = useDark()
</script>

<template lang="pug">
div(class="self-center my-auto p-4 bg-gray-200 dark:bg-gray-800 rounded-md group space-y-4" style="width: 800px;")
  code &lt;div class="group"&gt;
  div(:class="['is-item p-4 rounded-md', normal, groupHover, hover]")
    code &lt;div class="<span class="is-group-hover">{{ groupHover }}</span> <span class="is-hover">{{ hover }}</span>"&gt;
  div(:class="['is-item p-4 rounded-md', normal, groupHover, hover]")
    code &lt;div class="<span class="is-group-hover">{{ groupHover }}</span> <span class="is-hover">{{ hover }}</span>"&gt;
  div(:class="['is-item p-4 rounded-md', normal, groupHover, hover]")
    code &lt;div class="<span class="is-group-hover">{{ groupHover }}</span> <span class="is-hover">{{ hover }}</span>"&gt;
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs} from 'vue'

export default defineComponent({
  setup () {
    const state = reactive({
      normal: 'bg-emerald-700',
      groupHover: 'group-hover:bg-lightBlue-600',
      hover: 'hover:bg-lightBlue-500',
    })

    return {
      ...toRefs(state),
    }
  },
})
</script>

<style scoped>
.group {
  & * {
    @apply transition duration-200 ease-in-out;
  }

  & .is-item {
    @apply text-white;

    & span {
      @apply text-white text-opacity-50;
    }
  }

  &:hover {
    & .is-item {
      @apply text-opacity-50;
    }

    & .is-group-hover {
      @apply text-white text-opacity-100;
    }

    & .is-item:hover .is-group-hover {
      @apply text-opacity-50;

      & ~ .is-hover {
        @apply text-white text-opacity-100;
      }
    }
  }
}
</style>

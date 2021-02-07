import {reactive, toRefs, watch} from 'vue'

let loaded = false

const mql = window.matchMedia('(prefers-color-scheme: dark)')
const state = reactive({
  dark: mql.matches,
})
const exports = toRefs(state)

export default function useDark (el: HTMLElement = document.documentElement) {
  if (!loaded) {
    loaded = true

    mql.addEventListener('change', () => {
      state.dark = mql.matches
    })

    watch(() => state.dark, dark => {
      el.classList.toggle('dark', dark)
    }, {immediate: true})
  }

  return exports
}

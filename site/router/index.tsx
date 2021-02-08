import {computed, defineAsyncComponent, reactive, toRefs} from 'vue'

import routes, {RouteComponent} from './routes'

const NotFoundView = () => (
  <div class="my-auto text-center"><strong>404</strong> Not Found</div>
)

const state = reactive({
  route: location.pathname,
})

const CurrentView = computed(() => {
  const component = routes[state.route] as RouteComponent
  return component ? defineAsyncComponent(component) : NotFoundView
})

function resolveRedirect (path: string): string {
  const component = routes[path]
  return typeof component !== 'string' ? path : resolveRedirect(component)
}

function go (to: string, replace = false) {
  const path = resolveRedirect(to)
  if (state.route !== path) {
    state.route = path
    if (replace) history.replaceState(null, '', path)
    else history.pushState(null, '', path)
  }
}

go(state.route, true)

export default function useRoute () {
  return {
    ...toRefs(state),
    view: CurrentView,
    go,
  }
}

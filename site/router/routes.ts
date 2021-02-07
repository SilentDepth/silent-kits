import {Component} from 'vue'

export type RouteComponent = () => Promise<Component>

const pages = import.meta.glob('/site/pages/**/*.vue')
const RESOLVE = /^\/site\/pages(.+?)\.vue$/

export default {
  ...Object.fromEntries(Object.entries(pages).map(([path, loader]) => {
    return [RESOLVE.exec(path)![1], loader]
  })),
  '/': '/theme-switch',
} as {[path: string]: string | RouteComponent}

const plugin = require('tailwindcss/plugin')

module.exports = function hover () {
  return plugin(({addVariant, e}) => {
    addVariant('hover', ({modifySelectors, separator}) => {
      modifySelectors(({className}) => {
        const selector = `.${e(`hover${separator}${className}`)}:hover`
        return `${selector}, .group ${selector}`
      })
    })
  })
}

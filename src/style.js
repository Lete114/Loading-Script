const { setAttributes } = require('./utils')

/**
 * 动态加载Style | dynamic loading Style
 * @param {String} text CSS 内容 | CSS Text
 * @param {object} options 可选项 | options
 */
function getStyle(text, options={}) {
  const style = document.createElement('style')
  style.textContent = text

  if (options.attrs) setAttributes(style, options.attrs)

  document.head.appendChild(style)
}

module.exports = { getStyle }

const { setAttributes } = require('./utils')

/**
 * 动态加载link | dynamic loading link
 * @param {String} href 资源地址(可以是链接或路径) | Resource address (can be a link or path)
 * @param {object} options 可选项 | options
 */
function getLink(href, options = {}) {
  const link = document.createElement('link')
  link.rel = options.rel || 'stylesheet'
  link.type = options.type || 'text/css'
  link.as = options.as || ''
  link.href = href

  if (options.attrs) setAttributes(link, options.attrs)

  document.head.appendChild(link)
}

module.exports = { getLink }

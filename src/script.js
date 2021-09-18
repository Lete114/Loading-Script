const { stdOnLoad, ieOnLoad, setAttributes } = require('./utils')

/**
 * 动态加载JavaScript | dynamic loading JavaScript
 * @param {String} src 资源地址(可以是链接或路径) | Resource address (can be a link or path)
 * @param {Function} callback 加载完成后执行的回调函数 | A callback function that executes after loading is complete
 * @param {Object} options 可选项 | options
 */
function getScript(src, callback, options = {}) {
  const script = document.createElement('script')

  if (typeof callback === 'function') {
    const onload = 'onload' in script ? stdOnLoad : ieOnLoad
    onload(script, callback)
  } else if (typeof callback === 'object') {
    options = callback
  }

  script.type = options.type || 'text/javascript'
  script.src = src

  if (options.attrs) {
    options.remove = false
    setAttributes(script, options.attrs)
  }

  if (options.text && typeof options.text === 'string') {
    options.remove = false
    script.text = options.text
  }

  document.head.appendChild(script)

  if (options.remove == null) options.remove = true
  if (options.remove) document.head.removeChild(script)
}

module.exports = { getScript }

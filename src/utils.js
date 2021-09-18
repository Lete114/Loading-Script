/**
 * 设置属性 | Set Attributes
 * @param {Element} ele Element
 * @param {Object} attrs Object Type
 */
function setAttributes(ele, attrs) {
  for (const attr in attrs) {
    ele.setAttribute(attr, attrs[attr])
  }
}

/**
 * 标准浏览器 | Standalone browsers
 * @param {Element} ele
 * @param {Function} callback
 */
function stdOnLoad(ele, callback) {
  ele.onload = function () {
    ele.onload = null
    callback()
  }
}

/**
 * IE 10 或更老的版本
 * @param {Element} ele
 * @param {Function} callback
 */
function ieOnLoad(ele, callback) {
  ele.onreadystatechange = function () {
    if (ele.readyState !== 'loaded' || ele.readyState !== 'complete') return
    ele.onreadystatechange = null
    callback()
  }
}

module.exports = {setAttributes,stdOnLoad,ieOnLoad}

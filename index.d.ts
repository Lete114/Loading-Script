/**
 * @Version 1.0.0
 * @Author Lete乐特
 * @Github https://github.com/lete114/Loading-Script
 */

class LinkOptions {

  /**
   * When 'rel' is 'preload', the 'as' attribute must be filled in to be valid
   */
  as: string

  /**
   * Resource types
   * @default 'stylesheet'
   * type: test
   * example: <link src='test.css' rel='test' />
   */
  rel: string

  /**
   * Resource types
   * @default 'text/css'
   * type: test
   * example: <link src='test.css' type='test' />
   */
  type: string

  /**
   * Sets the value of element's first attribute whose qualified name is qualifiedName to value.
   * window.document.setAttribute(qualifiedName: string, value: string): void;
   * You can pass in multiple
   * attrs: {id:'test',class:'test'}
   * example: <link href='test.css' id='test' class='test' />
   */
  attrs: object
}

class ScriptOptions {

  /**
   * Resource types
   * @default 'text/javascript'
   * type: test
   * example: <script src='test.js' type='test'></script>
   */
  type: string

  /**
   * Equivalent to inline JavaScript
   * text: console.log('test)
   * example: <script>console.log('test)</script>
   */
  text: string

  /**
   * Whether to delete the current DOM element after the request succeeds (The requested resource remains)
   * @default true
   */
  remove: boolean

  /**
   * Sets the value of element's first attribute whose qualified name is qualifiedName to value.
   * window.document.setAttribute(qualifiedName: string, value: string): void;
   * You can pass in multiple
   * attrs: {id:'test',class:'test'}
   * example: <script src='test.js' id='test' class='test'></script>
   */
  attrs: object
}

class StyleOptions {
  /**
   * Sets the value of element's first attribute whose qualified name is qualifiedName to value.
   * window.document.setAttribute(qualifiedName: string, value: string): void;
   * You can pass in multiple
   * attrs: {id:'test',class:'test'}
   * example: <style id='test' class='test'></style>
   */
  attrs: object
}

type Callback = (script: HTMLScriptElement | null) => void

declare function getLink(href: HTMLLinkElement['href'], options?: LinkOptions): void
declare function getScript(src: HTMLScriptElement['src'], options?: ScriptOptions): void
declare function getScript(src: HTMLScriptElement['src'], callback: Callback, options?: ScriptOptions): void
declare function getStyle(text: HTMLStyleElement['textContent'], options?: StyleOptions): void

export = { getLink, getScript, getStyle }

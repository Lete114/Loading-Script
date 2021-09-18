<h1 align="center"><a href="https://github.com/lete114/Loading-Script" target="_blank">Loading-Script</a></h1>

<p align="center">Dynamic Loading JavaScript</p>
<p align="center">
    <a href="https://github.com/lete114/Loading-Script/releases/"><img src="https://img.shields.io/github/package-json/v/lete114/Loading-Script/master?color=%23e58a8a&label=master" alt="master"></a>
    <a href="https://github.com/lete114/Loading-Script/blob/master/LICENSE"><img src="https://img.shields.io/github/license/lete114/Loading-Script?color=FF5531" alt="MIT License"></a>
</p>

## Installing

Using npm:

```bash
$ npm install loading-script
```

Using jsDelivr CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/loading-script/dist/loading-script.js"></script>
```

Using unpkg CDN:

```html
<script src="https://unpkg.com/loading-script/dist/loading-script.js"></script>
```

## Example Usage

### Node.js
```js
const {getScript} = require("loading-script");
getScript('test.js', function(){
  console.log('onload')
});
```

### Browser
```js
<script src="https://cdn.jsdelivr.net/npm/loading-script/dist/loading-script.js"></script>
getScript('test.js', function(){
  console.log('onload')
});
```


## License

[MIT](LICENSE)

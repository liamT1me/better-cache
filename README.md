# Better Cache

对浏览器本地缓存、会话缓存进行简单的封装

## 安装


```
$ npm install better-cache
```
or
```
$ yarn add better-cache
```
or
```
$ pnpm install better-cache
```


## 使用

直接引入js文件：
```js
<script src="/path/to/better-cache.umd.js"></script>
<script>
  storage.setLocal('foo', 'bar')
  _storage.setLocal('foo', 'bar')

  window.storage.setLocal('foo', 'bar')
  window._storage.setLocal('foo', 'bar')

  // 如果window对象中已经有了storage方法，可以使用_storage
</script>
```

```js
<script type="module" src="/path/to/better-cache.es.js"></script>
<script type="module">
  import storage from '/path/to/better-cache.es.js'

  storage.setLocal('foo', 'bar')
</script>
```

import 引入:

```javascript
import storage from 'better-cache'

storage.setLocal('foo', 'bar')
```

在vue中使用:
```javascript
import Vue from 'vue
import storage from 'better-cache'
Vue.use(storage)

this.$storage.setLocal('foo', 'bar')

// 如果vue全局方法中已经有了$storage方法，可以使用$_storage
this.$_storage.setLocal('foo', 'bar')
```


## 方法：

```javascript
// 存值
storage.setLocal('foo', 'bar')
storage.setSession('foo', 'bar')

// 取值
storage.getLocal('foo')
storage.getSession('foo')

// 删除值
storage.removeLocal('foo')
storage.removeSession('foo')

// 清空特定的值
//如果储存的key是以 GLOBAL_ 开头，则不会清空缓存
storage.clearLocal()
storage.clearSession()

// 清空全部
storage.clearLocalAll()
storage.clearSessionAll()

```

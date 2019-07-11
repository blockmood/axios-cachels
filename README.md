# axios-cachels
axios 请求缓存（避免多次重复请求）

## 安装


```
npm install axios-cachels
```

## 使用参数

| 参数 | 说明 | 默认值 |
| ------ | ------ | ------ |
| config | 参照axios | {} |
| [] | 过滤列表 | [] |


## 使用

> 参照axios,返回promise

```
import axiosCache from 'axios-cachels'


...

axiosCache.interceptors.request.use(....)

await axiosCache(config)

```

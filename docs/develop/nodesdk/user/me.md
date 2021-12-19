# 获取当前用户信息

## 使用示例

```javascript
async function demo() {
  let { data } = await client.meApi.me();
}
```

## 返回说明

使用当前用户信息填充的 [User](model.md#user) 对象

## 返回示例

`data`：

```js
{
    "id": "xxxxxx",
    "username": "机器人Demo-测试中",
    "avatar": "http://xxxx"
}
```

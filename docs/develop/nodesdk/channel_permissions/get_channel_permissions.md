# 获取子频道权限

获取指定子频道的权限

## 使用示例

```javascript
async function demo() {
  let { data } = await client.channelPermissionsApi.channelPermissions(channelId, userId);
}
```

## 参数说明

| 字段名    | 必填 | 类型   | 描述      |
| --------- | ---- | ------ | --------- |
| channelId | 是   | string | 子频道 ID |
| userId    | 是   | string | 用户 ID   |

## 返回说明

字段参见 [ChannelPermissions](model.md)

## 返回示例

`data`：

```js
{
    channel_id: 'CHANNEL_ID',
    user_id: 'USER_ID',
    permissions: '0'
}
```

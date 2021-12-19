# 修改子频道权限

--

## 使用示例

```javascript
async function demo() {
  let { data } = await client.channelPermissionsApi.putChannelPermissions(
    channelId,
    userId,
    // channelPermissions
    {
      remove: '1',
      add: '0',
    },
  );
}
```

::: warning 注意

- 要求操作人具有管理子频道的权限，如果是机器人，则需要将机器人设置为管理员。
- 参数包括 add 和 remove 两个字段，分别表示授予的权限以及删除的权限。要授予用户权限即把 add 对应位置 1，删除用户权限即把 remove 对应位置 1。当两个字段同一位都为 1，表现为删除权限。
- 本接口不支持修改可管理子频道权限。
  :::

## 参数说明

| 字段名             | 必填 | 类型                           | 描述      |
| ------------------ | ---- | ------------------------------ | --------- |
| channelId          | 是   | string                         | 子频道 ID |
| userId             | 是   | string                         | 用户 ID   |
| channelPermissions | 是   | [ChannelPermissions](model.md) | 权限参数  |

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

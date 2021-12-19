# 修改子频道

修改某个子频道的信息
<Warnning />

## 使用示例

```javascript
async function demo() {
  let { data } = await client.channelApi.patchChannel(channelId, channel);
}
```

::: warning 注意

- 要求操作人具有管理子频道的权限，如果是机器人，则需要将机器人设置为管理员。
- 修改成功后，会触发子频道更新事件
  :::

## 参数说明

| 字段名    | 必填 | 类型                | 描述       |
| --------- | ---- | ------------------- | ---------- |
| channelId | 是   | string              | 子频道 ID  |
| channel   | 是   | [Channel](model.md) | 子频道对象 |

## 返回说明

字段参见 [Channel](model.md)

## 返回示例

`data`：

```js
{
    id: 'CHANNEL_ID',
    guild_id: 'GUILD_ID',
    name: 'ostwindli话题讨论',
    topic: null,
    type: 4,
    last_message_id: null,
    last_pin_timestamp: null,
    nsfw: null,
    icon: null,
    position: 2,
    bitrate: null,
    recipients: [],
    user_limit: null,
    parent_id: '0',
    rate_limit_per_user: null,
    owner_id: null,
    application_id: null,
    op_user_id: null,
    sub_type: 0
  }
```

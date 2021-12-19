# 获取子频道列表

获取子频道 channel 列表

## 使用示例

```javascript
async function demo() {
  let { data } = await client.channelApi.channels(guildId);
}
```

## 参数说明

| 字段名  | 必填 | 类型   | 描述    |
| ------- | ---- | ------ | ------- |
| guildId | 是   | string | 频道 ID |

## 返回说明

字段参见 [Channel](model.md)

## 返回示例

`data`：

```js
[
  {
    id: 'CHANNEL_ID',
    guild_id: 'GUILD_ID',
    name: 'ostwindli的子频道',
    type: 0,
    last_message_id: '0',
    nsfw: false,
    position: 1638519748,
    parent_id: 'PARENT_ID',
    rate_limit_per_user: 0,
    owner_id: 'OWNER_ID',
    sub_type: 0,
  },
];
```

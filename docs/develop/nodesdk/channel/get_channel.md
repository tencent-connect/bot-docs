# 获取子频道详情

获取子频道 channel 详情

## 使用示例

```javascript
async function demo() {
  let { data } = await client.channelApi.channel(channelId);
}
```

## 参数说明

| 字段名    | 必填 | 类型   | 描述      |
| --------- | ---- | ------ | --------- |
| channelId | 是   | string | 子频道 ID |

## 返回说明

字段参见 [Channel](model.md)

## 返回示例

`data`：

```js
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
    sub_type: 0
}
```

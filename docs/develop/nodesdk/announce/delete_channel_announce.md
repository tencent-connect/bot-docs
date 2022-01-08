# 删除子频道公告 <Badge text="v2.2.0" />

删除子频道公告。

## 使用示例

```javascript
async function demo() {
  let { data } = await client.announceApi.deleteChannelAnnounce(channelId, messageId);
}
```

## 参数说明

| 字段名    | 必填 | 类型   | 描述                           |
| --------- | ---- | ------ | ------------------------------ |
| channelId | 是   | string | [子频道 ID](./channel.md)      |
| messageId | 是   | string | [消息 ID](../model/message.md) |

## 返回说明

成功返回空对象。

## 返回示例

`data`：

```js
{
}
```

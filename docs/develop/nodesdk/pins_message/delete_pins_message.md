# 删除精华消息 <Badge text="v2.9.0" />

用于移除子频道 `channelId` 下的精华消息 `messageId` 。

## 使用示例

```javascript
async function demo() {
  let { data } = await client.pinsMessageApi.deletePinsMessage(channelId, messageId);
}
```

## 参数说明

| 字段名    | 必填 | 类型   | 描述                             |
| --------- | ---- | ------ | -------------------------------- |
| channelId | 是   | string | [子频道 ID](../model/channel.md) |
| messageId | 是   | string | [消息 ID](../model/message.md)   |

## 返回说明

成功返回空对象。

## 返回示例

`data`：

```js
{
}
```

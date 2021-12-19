# 获取指定消息

获取指定消息

## 使用示例

```javascript
async function demo() {
  let { data } = await client.messageApi.message(channelID, messageID);
}
```

## 参数说明

| 参数      | 必填 | 类型   | 说明      |
| --------- | ---- | ------ | --------- |
| channelID | 是   | string | 子频道 id |
| messageID | 是   | string | 消息 ID   |

## 返回说明

返回[Message](model.md#message) 对象

## 返回示例

`data`:

```json
{
  "id": "abcdef01",
  "channel_id": "100001",
  "guild_id": "100000000001",
  "content": "hello",
  "timestamp": "2021-05-25T15:20:34+08:00",
  "author": {
    "id": "1000000001",
    "username": "az",
    "bot": false
  },
  "member": {
    "roles": ["1"],
    "joined_at": "2021-04-12T16:34:42+08:00"
  }
}
```

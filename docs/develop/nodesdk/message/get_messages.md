# 拉取消息列表

获取消息列表
<Warnning />

## 使用示例

```javascript
async function demo() {
  let { data } = await client.messageApi.messages(channelID, pager);
}
```

## 参数说明

| 参数      | 必填 | 类型                           | 说明      |
| --------- | ---- | ------------------------------ | --------- |
| channelID | 是   | string                         | 子频道 id |
| pager     | 否   | [MessagesPager](messagespager) | 分页信息  |

### MessagesPager

| 参数  | 必填 | 类型                                    | 说明                        |
| ----- | ---- | --------------------------------------- | --------------------------- |
| type  | 否   | [type-枚举值说明](#type-枚举值说明) | 拉取类型                    |
| id    | 否   | string                                  | 消息 ID                     |
| limit | 否   | string                                  | 每次拉取多少条消息，最大 20 |

### type 枚举值说明

| 字段名   | 类型   | 描述               |
| -------- | ------ | ------------------ |
| `around` | string | 读此 id 前后的消息 |
| `before` | string | 读此 id 之前的消息 |
| `after`  | string | 读此 id 之后的消息 |

如果 around/before/after 均为空，则拉取最新的 limit 条消息。

## 返回说明

[Message](model.md#message) 对象列表

## 返回示例

`data`：

```json
[
  {
    "id": "xxx",
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
  },
  {
    "id": "yyy",
    "channel_id": "100001",
    "guild_id": "1000000000001",
    "content": "world",
    "timestamp": "2021-05-25T15:20:32+08:00",
    "author": {
      "id": "10000001",
      "username": "az",
      "bot": false
    },
    "member": {
      "roles": ["1"],
      "joined_at": "2021-04-12T16:34:42+08:00"
    }
  }
]
```

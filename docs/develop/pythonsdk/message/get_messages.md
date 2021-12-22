# 拉取消息列表

获取消息列表。
<Warnning />

## 使用示例

```javascript
async function demo() {
  let { data } = await client.messageApi.messages(channelID, pager);
}
```

## 参数说明

| 参数      | 必填 | 类型                            | 说明      |
| --------- | ---- | ------------------------------- | --------- |
| channelID | 是   | string                          | 子频道 ID |
| pager     | 否   | [MessagesPager](#messagespager) | 分页信息  |

### MessagesPager

| 参数  | 必填 | 类型                    | 说明                          |
| ----- | ---- | ----------------------- | ----------------------------- |
| type  | 否   | [TypesEnum](#typesenum) | 拉取类型                      |
| id    | 否   | string                  | 消息 ID                       |
| limit | 否   | string                  | 每次拉取多少条消息，最大 `20` |

### TypesEnum

| 字段名   | 类型   | 描述               |
| -------- | ------ | ------------------ |
| `around` | string | 读此 id 前后的消息 |
| `before` | string | 读此 id 之前的消息 |
| `after`  | string | 读此 id 之后的消息 |

如果 `around/before/after` 均为`空`，则拉取最新的 `limit` 条消息。

## 返回说明

返回 [Message](#message) 对象数组。

### Message

| 字段名     | 类型              | 描述                                                                            |
| ---------- | ----------------- | ------------------------------------------------------------------------------- |
| id         | string            | 消息 ID                                                                         |
| channel_id | string            | 子频道 ID                                                                       |
| guild_id   | string            | 频道 ID                                                                         |
| content    | string            | 消息内容                                                                        |
| timestamp  | string            | 消息创建时间，是个 `iISO8601 timestamp` 字符串，例："2021-11-23T15:16:48+08:00" |
| author     | [User](#user)     | 消息创建者                                                                      |
| member     | [Member](#member) | 消息创建者的 member 信息                                                        |

### User

| 字段名   | 类型    | 描述         |
| -------- | ------- | ------------ |
| id       | string  | 用户 ID      |
| username | string  | 用户名       |
| bot      | boolean | 是否是机器人 |

### Member

| 字段名    | 类型     | 描述                                                                                 |
| --------- | -------- | ------------------------------------------------------------------------------------ |
| roles     | string[] | 用户在频道内的身份组 ID，默认值可参考[DefaultRoleIDs](#defaultroleids)               |
| joined_at | string   | 用户加入频道的时间，是个 `ISO8601 timestamp` 字符串，例："2021-11-23T15:16:48+08:00" |

### DefaultRoleIDs

系统默认生成下列身份组 ID。

| 身份组 ID 默认值 | 描述         |
| ---------------- | ------------ |
| 1                | 全体成员     |
| 2                | 管理员       |
| 4                | 群主/创建者  |
| 5                | 子频道管理员 |

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

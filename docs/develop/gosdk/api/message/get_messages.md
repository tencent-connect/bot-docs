# 拉取消息列表

获取消息列表。
<Warnning />

## 使用示例

```go
token := token.BotToken("appid", "token")
api := botgo.NewOpenAPI(token).WithTimeout(3 * time.Second)
ctx := context.Background()

messages, err := api.Messages(ctx, channelId, &dto.MessagesPager{
  ID:    msgId,
  Limit: "10",
  Type:  dto.MPTBefore,
})
if err != nil {
  log.Fatalln("调用 Messages 接口失败, err = ", err)
}
```

## 参数说明

| 参数      | 必填 | 类型                            | 说明      |
| --------- | ---- | ------------------------------- | --------- |
| channelId | 是   | string                          | 子频道 ID |
| MessagesPager     | 否   | [MessagesPager](#MessagesPager) | 分页信息  |

### Message

| 字段名     | 类型              | 描述                                                                            |
| ---------- | ----------------- | ------------------------------------------------------------------------------- |
| ID         | string            | 消息 ID                                                                         |
| ChannelID | string            | 子频道 ID                                                                       |
| GuildID   | string            | 频道 ID                                                                         |
| Content    | string            | 消息内容                                                                        |
| Timestamp  | [Timestamp](#Timestamp) | 消息创建时间，是个 `iISO8601 timestamp` 字符串，例："2021-11-23T15:16:48+08:00" |
| Author     | [User](#user)     | 消息创建者                                                                      |
| Member     | [Member](#member) | 消息创建者的 member 信息                                                        |

### User

| 字段名             | 类型    | 描述                                                                                               |
| ------------------ | ------- | -------------------------------------------------------------------------------------------------- |
| ID                 | string  | 用户 ID                                                                                           |
| Username           | string  | 用户名                                                                                             |
| Avatar             | string  | 用户头像地址                                                                                       |
| Bot                | bool    | 是否是机器人                                                                            ｜
| UnionOpenID        | string  | 特殊关联应用的 openid，需要特殊申请并配置后才会返回。如需申请，请联系平台运营人员。                |
| UnionUserAccount   | string  | 机器人关联的互联应用的用户信息，与 union_openid 关联的应用是同一个。如需申请，请联系平台运营人员。 |

### Member

| 字段名    | 类型          | 描述                                                                                         |
| --------- | ------------- | -------------------------------------------------------------------------------------------- |
| GuildID   | string        | 频道ID                                                                              ｜
| User      | [User](#user) | 用户基础信息，来自 QQ 资料，只有成员相关接口中会填充此信息                                   |
| Nick      | string        | 用户在频道内的昵称                                                                           |
| Roles     | string[]      | 用户在频道内的身份组 ID，默认值可参考[DefaultRoleIDs](../guild/role_model.md#DefaultRoleIDs) |
| JoinedAt | [Timestamp](#Timestamp) | 用户加入频道的时间，是个 `ISO8601 timestamp` 字符串，例："2021-11-23T15:16:48+08:00"         |

### DefaultRoleIDs

系统默认生成下列身份组 ID。

| 身份组 ID 默认值 | 描述         |
| ---------------- | ------------ |
| 1                | 全体成员     |
| 2                | 管理员       |
| 4                | 群主/创建者  |
| 5                | 子频道管理员 |

### Timestamp

| 字段名             | 类型    | 描述           |
| ------------------ | ------- | -------------|
| Timestamp          | string  | 时间         ｜

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
      "roles": [
        "1"
      ],
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
      "roles": [
        "1"
      ],
      "joined_at": "2021-04-12T16:34:42+08:00"
    }
  }
]
```

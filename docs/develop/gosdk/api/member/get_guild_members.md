# 获取频道成员列表

获取频道下的成员列表。

<Warnning />

## 使用示例

```go
token := token.BotToken("appid", "token")
api := botgo.NewOpenAPI(token).WithTimeout(3 * time.Second)
ctx := context.Background()

members, err := api.GuildMembers(ctx, guildId, &dto.GuildMembersPager{
  After: "0",
  Limit: "100",
})
if err != nil {
  log.Fatalln("调用 GuildMembers 接口失败, err = ", err)
}
```

## 参数说明

| 字段名      | 必填 | 类型                        | 描述     |
| ----------- | ---- | --------------------------- | -------- |
| guildId     | 是   | string                      | 频道 ID  |
| GuildMembersPager | 否   | [GuildMembersPager](#queryparams) | 查询参数 |

### GuildMembersPager

| 字段名 | 必填 | 类型   | 描述                                                       |
| ------ | ---- | ------ | ---------------------------------------------------------- |
| After  | 否   | string | 上一次回包中最大的用户 ID， 如果是第一次请求填 0，默认为 0 |
| Limit  | 否   | number | 分页大小，1-1000，默认是 1                                 |

## 返回说明

返回 [Member](#member) 对象数组。

## Member

| 字段名    | 类型          | 描述                                                                                         |
| --------- | ------------- | -------------------------------------------------------------------------------------------- |
| GuildID   | string        | 频道ID                                                                              |
| User      | [User](#user) | 用户基础信息，来自 QQ 资料，只有成员相关接口中会填充此信息                                   |
| Nick      | string        | 用户在频道内的昵称                                                                           |
| Roles     | string[]      | 用户在频道内的身份组 ID，默认值可参考[DefaultRoleIDs](../guild/role_model.md#DefaultRoleIDs) |
| JoinedAt | [Timestamp](#Timestamp) | 用户加入频道的时间，是个 `ISO8601 timestamp` 字符串，例："2021-11-23T15:16:48+08:00"         |

## User

| 字段名             | 类型    | 描述                                                                                               |
| ------------------ | ------- | -------------------------------------------------------------------------------------------------- |
| ID                 | string  | 用户 ID                                                                                           |
| Username           | string  | 用户名                                                                                             |
| Avatar             | string  | 用户头像地址                                                                                       |
| Bot                | bool    | 是否是机器人                                                                            |
| UnionOpenID        | string  | 特殊关联应用的 openid，需要特殊申请并配置后才会返回。如需申请，请联系平台运营人员。                |
| UnionUserAccount   | string  | 机器人关联的互联应用的用户信息，与 union_openid 关联的应用是同一个。如需申请，请联系平台运营人员。 |

## Timestamp

| 字段名             | 类型    | 描述           |
| ------------------ | ------- | -------------|
| Timestamp          | string  | 时间         |


## 返回示例

`data`：

```json
[
  {
    "user": {
      "id": "USERID",
      "username": "机器人管家-ostwindli",
      "avatar": "http://thirdqq.qlogo.cn/g?b=oidb&k=oPicoPIg01ujpSr8oosudkQ&s=0&t=1637218059",
      "bot": false,
      "public_flags": 0,
      "system": false
    },
    "nick": "阿青",
    "roles": [
      "4"
    ],
    "joined_at": "2021-11-23T15:16:48+08:00",
    "deaf": false,
    "mute": false,
    "pending": false
  }
]
```

# 获取频道成员详情

获取频道下某个成员的信息。

## 使用示例

```go
token := token.BotToken("appid", "token")
api := botgo.NewOpenAPI(token).WithTimeout(3 * time.Second)
ctx := context.Background()

member, err := api.GuildMember(ctx, guildId, userId)
if err != nil {
    log.Fatalln("调用 GuildMember 接口失败, err = ", err)
}
```

## 参数说明

| 字段名  | 必填 | 类型   | 描述    |
| ------- | ---- | ------ | ------- |
| guildId | 是   | string | 频道 ID |
| userId  | 是   | string | 用户 ID |

## 返回说明

返回 [Member](model.md) 对象。

## Member

| 字段名    | 类型          | 描述                                                                                         |
| --------- | ------------- | -------------------------------------------------------------------------------------------- |
| GuildID   | string        | 频道ID                                                                              ｜
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
| Bot                | bool    | 是否是机器人                                                                            ｜
| UnionOpenID        | string  | 特殊关联应用的 openid，需要特殊申请并配置后才会返回。如需申请，请联系平台运营人员。                |
| UnionUserAccount   | string  | 机器人关联的互联应用的用户信息，与 union_openid 关联的应用是同一个。如需申请，请联系平台运营人员。 |

## Timestamp

| 字段名             | 类型    | 描述           |
| ------------------ | ------- | -------------|
| Timestamp          | string  | 时间         ｜

## 返回示例

`data`：

```json
{
    "user": {
        "id": "用户 ID",
        "username": "用户名",
        "avatar": "用户头像地址",
        "bot": false,
        "public_flags": 0,
        "system": false
    },
    "nick": "",
    "roles": [
        "4"
    ],
    "joined_at": "2021-09-27T17:19:51+08:00",
    "deaf": false,
    "mute": false,
    "pending": false
}
```

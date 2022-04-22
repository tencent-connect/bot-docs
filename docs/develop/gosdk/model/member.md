# 成员对象(Member)

## Member

| 字段名    | 类型          | 描述                                                                                         |
| --------- | ------------- | -------------------------------------------------------------------------------------------- |
| GuildID   | string        | 频道ID                                                                              |
| User      | [User](user) | 用户基础信息，来自 QQ 资料，只有成员相关接口中会填充此信息                                   |
| Nick      | string        | 用户在频道内的昵称                                                                           |
| Roles     | string[]      | 用户在频道内的身份组 ID，默认值可参考[DefaultRoleIDs](../guild/role_model.md#DefaultRoleIDs) |
| JoinedAt | [Timestamp](#Timestamp) | 用户加入频道的时间，是个 `ISO8601 timestamp` 字符串，例："2021-11-23T15:16:48+08:00"         |

## Timestamp

| 字段名             | 类型    | 描述           |
| ------------------ | ------- | -------------|
| Timestamp          | string  | 时间         |
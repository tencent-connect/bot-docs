# 获取频道成员详情

获取频道下某个成员的信息。

## 使用示例

```python
import qqbot

token = qqbot.Token({appid}, {token})
api = qqbot.GuildMemberAPI(token, False)
members = api.get_guild_member(guild_id, user_id)
```

## 参数说明

| 字段名  | 必填 | 类型   | 描述    |
| ------- | ---- | ------ | ------- |
| guild_id | 是   | string | 频道 ID |
| user_id  | 是   | string | 用户 ID |

## 返回说明

返回 [Member](model.md) 对象。

## Member

| 字段名    | 类型          | 描述                                                                                         |
| --------- | ------------- | -------------------------------------------------------------------------------------------- |
| user      | [User](#user) | 用户基础信息，来自 QQ 资料，只有成员相关接口中会填充此信息                                   |
| nick      | string        | 用户在频道内的昵称                                                                           |
| roles     | string[]      | 用户在频道内的身份组 ID，默认值可参考[DefaultRoleIDs](../guild/role_model.md#DefaultRoleIDs) |
| joined_at | string        | 用户加入频道的时间，是个 `ISO8601 timestamp` 字符串，例："2021-11-23T15:16:48+08:00"         |

## User

| 字段名   | 类型    | 描述         |
| -------- | ------- | ------------ |
| id       | string  | 用户 ID      |
| username | string  | 用户名       |
| avatar   | string  | 用户头像地址 |
| bot      | boolean | 是否是机器人 |

## 返回示例

`data`：

```python
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

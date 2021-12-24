# 频道指定成员禁言

### 接口
`PATCH /guilds/{guild_id}/members/{user_id}/mute`

### 功能描述
- 需要使用的 token 对应的用户具备管理员权限。如果是机器人，要求被添加为管理员。

### Content-Type

`application/json`

### 参数
| 字段名    | 类型                   | 描述                                                 |
| -------  | --------------------- |----------------------------------------------------|
| mute_end_timestamp | string | 禁言到期时间戳，绝对时间戳，单位：秒（与 mute_seconds 字段同时赋值的话，以该字段为准） |
| mute_seconds | string | 禁言多少秒（两个字段二选一，默认以 mute_end_timestamp 为准）           |

### 返回
HTTP 状态码 `204`
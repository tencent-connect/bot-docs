# 删除频道身份组成员

### 接口
`DELETE /guilds/{guild_id}/members/{user_id}/roles/{role_id}`

### 功能描述
- 需要使用的 token 对应的用户具备删除身份组成员权限。如果是机器人，要求被添加为管理员。
- 如果要删除的身份组ID是`5-子频道管理员`，需要增加channel对象来指定具体是哪个子频道

### 参数
| 字段名 | 类型 | 描述 |
| --- | --- | --- |
| channel | [Channel](../channel/model.md#Channel) 对象 | 接收一个只填充了子频道id字段的对象 |

### 返回
HTTP 状态码 `204`
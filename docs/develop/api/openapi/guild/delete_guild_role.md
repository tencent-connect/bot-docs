# 删除频道身份组

### 接口

`DELETE /guilds/{guild_id}/roles/{role_id}`

### 功能描述

用于删除频道`guild_id`下 `role_id` 对应的身份组。

- 需要使用的 `token` 对应的用户具备删除身份组权限。如果是机器人，要求被添加为管理员。

### Content-Type

`application/json`

### 返回

成功返回 HTTP 状态码 `204`。

### 错误码

详见[错误码](../error/error.md)。

### 示例

请求数据包

```shell
DELETE /guilds/123456/roles/112233
```

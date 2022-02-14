# 获取频道身份组列表

### 接口

`GET /guilds/{guild_id}/roles`

### 功能描述

用于获取 `guild_id`指定的频道下的身份组列表。

### Content-Type

`application/json`

### 返回

| 字段名         | 类型                                | 描述               |
| -------------- | ----------------------------------- | ------------------ |
| guild_id       | string                              | 频道 ID            |
| roles          | [Role](role_model.md#role) 对象数组 | 一组频道身份组对象 |
| role_num_limit | string                              | 默认分组上限       |

### 错误码

详见[错误码](../error/error.md)。

### 示例

请求数据包

```shell
GET /guilds/123456/roles
```

响应数据包

```json
{
  "guild_id": "123456",
  "roles": [
    {
      "id": "4",
      "name": "创建者",
      "color": 4294927682,
      "hoist": 1,
      "number": 1,
      "member_limit": 1
    },
    {
      "id": "2",
      "name": "管理员",
      "color": 4280276644,
      "hoist": 1,
      "number": 5,
      "member_limit": 50
    }
  ],
  "role_num_limit": "30"
}
```

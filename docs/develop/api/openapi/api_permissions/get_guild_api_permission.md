# 获取频道可用权限列表

### 接口

`GET /guilds/{guild_id}/api_permission`

### 功能描述

用于获取机器人在频道 `guild_id` 内可以使用的权限列表。

### Content-Type

`application/json`

### 返回

| 字段名 | 类型                                             | 描述               |
| ------ | ------------------------------------------------ | ------------------ |
| apis   | [APIPermission](model.md#APIPermission) 对象数组 | 机器人可用权限列表 |

### 错误码

详见[错误码](../error/error.md)。

### 示例

响应数据包

```json
{
  "apis": [
    {
      "path": "/guilds/{guild_id}/members/{user_id}",
      "method": "GET",
      "desc": "获取当前频道成员信息",
      "auth_status": 0
    },
    {
      "path": "/channels/{channel_id}/messages",
      "method": "POST",
      "desc": "创建消息",
      "auth_status": 1
    }
  ]
}
```

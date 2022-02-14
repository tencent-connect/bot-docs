# 获取频道可用权限列表 <Badge text="v2.8.0" />

用于获取机器人在指定频道内可以使用的权限列表。

## 使用示例

```javascript
async function demo() {
  let { data } = await client.guildPermissionsApi.permissions(guildID);
}
```

## 参数说明

| 字段名  | 必填 | 类型   | 描述                         |
| ------- | ---- | ------ | ---------------------------- |
| guildID | 是   | string | [频道 ID](../model/guild.md) |

## 返回说明

| 字段名 | 类型                              | 描述               |
| ------ | --------------------------------- | ------------------ |
| apis   | [APIPermission[]](#apipermission) | 机器人可用权限列表 |

### APIPermission

| 字段名      | 类型   | 描述                                                    |
| ----------- | ------ | ------------------------------------------------------- |
| path        | string | API 接口名，例如 `/guilds/{guild_id}/members/{user_id}` |
| method      | string | 请求方法，例如 `GET`                                    |
| desc        | string | API 接口名称，例如 获取频道信                           |
| auth_status | number | 授权状态，auth_stats 为 `1` 时已授权                    |

## 返回示例

`data`：

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

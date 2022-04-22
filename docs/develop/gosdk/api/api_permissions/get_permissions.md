# 获取频道可用权限列表 

用于获取机器人在指定频道内可以使用的权限列表。

## 使用示例

```go
token := token.BotToken("appid", "token")
api := botgo.NewOpenAPI(token).WithTimeout(3 * time.Second)
ctx := context.Background()

permissions, err := api.GetAPIPermissions(ctx, guildId)
if err != nil {
  log.Fatalln("调用 GetAPIPermissions 接口失败, err = ", err)
}
fmt.Println(permissions)
```

## 参数说明

| 字段名  | 必填 | 类型   | 描述                         |
| ------- | ---- | ------ | ---------------------------- |
| guildId | 是   | string | [频道 ID](../../model/guild.md) |

## 返回说明

返回见[APIPermissions](#APIPermissions)

### APIPermissions

| 字段名 | 类型                              | 描述               |
| ------ | --------------------------------- | ------------------ |
| APIList   | []* [APIPermission](#APIPermission) | 机器人可用权限列表 |

### APIPermission

| 字段名      | 类型   | 描述                                                    |
| ----------- | ------ | ------------------------------------------------------- |
| Path        | string | API 接口名，例如 `/guilds/{guild_id}/members/{user_id}` |
| Method      | string | 请求方法，例如 `GET`                                    |
| Desc        | string | API 接口名称，例如 获取频道信                           |
| AuthStatus | int | 授权状态，AuthStatus 为 `1` 时已授权                    |

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

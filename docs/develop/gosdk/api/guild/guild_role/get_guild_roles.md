# 获取频道身份组列表

获取频道身份组列表。

## 使用示例

```go
token := token.BotToken("appid", "token")
api := botgo.NewOpenAPI(token).WithTimeout(3 * time.Second)
ctx := context.Background()

roles, err := api.Roles(ctx, guildId)
if err != nil {
    log.Fatalln("调用 Roles 接口失败, err = ", err)
}
```

## 参数说明

| 字段名  | 必填 | 类型   | 描述    |
| ------- | ---- | ------ | ------- |
| guildId | 是   | string | 频道 ID |

## 返回说明

| 字段名   | 类型                    | 描述               |
| -------- | ----------------------- | ------------------ |
| GuildID | string                  | 频道 ID            |
| Roles    | [Role[]](#Role) | 频道身份组对象数组 |
| NumLimit | string | 默认分组上限 |

### Role

| 字段名       | 类型   | 描述                                                           |
| ------------ | ------ | -------------------------------------------------------------- |
| ID           | string | 身份组 ID                                                      |
| Name         | string | 名称                                                           |
| Color        | uint32 | ARGB 的 HEX 十六进制颜色值转换后的十进制数值（例：4294927682） |
| Hoist        | uint32 | 是否在成员列表中单独展示: 0-否, 1-是                           |
| MemberCount  | uint32 | 人数                                                           |
| MemberLimit  | uint32 | 成员上限                                                       |

## 返回示例

`data`：

```json
{
    "guild_id":"guild_id",
    "roles":[
        {
            "id":"4",
            "name":"名称",
            "color":4294927682,
            "hoist":1,
            "number":1,
            "member_limit":1
        },
        {
            "id":"2",
            "name":"名称",
            "color":4280276644,
            "hoist":1,
            "number":4,
            "member_limit":50
        }
    ],
    "role_num_limit":"30"
}
```

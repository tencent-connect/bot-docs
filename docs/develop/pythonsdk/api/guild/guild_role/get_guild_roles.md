# 获取频道身份组列表

获取频道身份组列表。

## 使用示例

```python
import qqbot

token = qqbot.Token({appid}, {token})

api = qqbot.GuildRoleAPI(token, False)
guild_roles = api.get_guild_roles(guild_id)
```

## 参数说明

| 字段名  | 必填 | 类型   | 描述    |
| ------- | ---- | ------ | ------- |
| guild_id | 是   | string | 频道 ID |

## 返回说明

| 字段名   | 类型                    | 描述               |
| -------- | ----------------------- | ------------------ |
| guild_id | string                  | 频道 ID            |
| roles    | [GuildRole[]](#guildrole) | 频道身份组对象数组 |

### GuildRole

| 字段名       | 类型   | 描述                                                           |
| ------------ | ------ | -------------------------------------------------------------- |
| id           | string | 身份组 ID                                                      |
| name         | string | 名称                                                           |
| color        | number | ARGB 的 HEX 十六进制颜色值转换后的十进制数值（例：4294927682） |
| hoist        | number | 是否在成员列表中单独展示: 0-否, 1-是                           |
| number       | number | 人数                                                           |
| member_limit | number | 成员上限                                                       |

## 返回示例

`data`：

```python
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

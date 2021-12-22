# 删除频道身份组

删除频道身份组。

```python
import qqbot

token = qqbot.Token({appid}, {token})

api = qqbot.GuildRoleAPI(token, False)
result = api.delete_guild_role(guildId, roleId)
```

### 参数说明

| 参数    | 必填 | 类型   | 说明      |
| ------- | ---- | ------ | --------- |
| guildId | 是   | string | 频道 ID   |
| roleId  | 是   | string | 身份组 ID |

### 返回说明

是否删除成功

### 返回示例

`data`：

```python
True
```

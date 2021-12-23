# 删除频道身份组成员

删除频道身份组成员。

## 使用示例

```python
import qqbot

token = qqbot.Token({appid}, {token})

api = qqbot.GuildRoleAPI(token, False)
result = api.delete_guild_role_member(guild_id, role_id, user_id, channel)
```

::: warning 注意

- 需要使用的 token 对应的用户具备删除身份组成员权限。如果是机器人，要求被添加为管理员。
- 如果要删除的身份组 ID 是`5-子频道管理员`，需要增加 channel 对象来指定具体是哪个子频道
  :::

## 参数说明

| 字段名  | 必填 | 类型                | 描述                                 |
| ------- | ---- | ------------------- | ------------------------------------ |
| guild_id | 是   | string              | 频道 ID                              |
| role_id  | 是   | string              | 身份组 ID                            |
| user_id  | 是   | string              | 用户 ID                              |
| channel | 是   | [Channel](#channel) | 接收一个只填充了子频道 ID 字段的对象 |

### Channel

| 字段名 | 类型   | 描述      |
| ------ | ------ | --------- |
| id     | string | 子频道 ID |

## 返回说明

返回删除是否成功

## 返回示例

`data`:

```python
True
```

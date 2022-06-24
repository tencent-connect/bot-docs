# 创建频道身份组成员

创建频道身份组成员。

## 使用示例

```python
import botpy
from botpy.message import Message

class MyClient(botpy.Client):
    async def on_at_message_create(self, message: Message):
        await self.api.create_guild_role_member(
            guild_id="xxxx", 
            role_id="xxxx", 
            user_id="xxxx", 
            channel_id="xxxx"
        )

intents = botpy.Intents(public_guild_messages=True)
client = MyClient(intents=intents)
client.run(appid={appid}, token={token})
```

::: warning 注意

- 需要使用的 `token` 对应的用户具备增加身份组成员权限，如果是机器人，要求被添加为管理员。
- 如果要增加的身份组 `ID` 是子频道管理员，需要增加 `Channel` 对象来指定具体是哪个子频道。

:::

## 参数说明

| 字段名  | 必填 | 类型                | 描述                                 |
| ------- | ---- | ------------------- | ------------------------------------ |
| guild_id | 是   | string              | 频道 ID                              |
| role_id  | 是   | string              | 身份组 ID                            |
| user_id  | 是   | string              | 用户 ID                              |
| channel_id   | 否   | string          | 子频道 ID                                 |

## 返回说明

添加是否成功

## 返回示例

`data`:

```python
True
```

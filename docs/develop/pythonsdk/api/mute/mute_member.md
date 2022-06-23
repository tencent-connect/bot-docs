# 禁言指定成员

将频道指定成员（非管理员）禁言。

## 使用示例

```python
import botpy

from botpy.message import Message

class MyClient(botpy.Client):
    async def on_at_message_create(self, message: Message):
        await self.api.mute_member(guild_id="xxxx", user_id="xxxx", mute_end_timestamp="xxxx", mute_seconds="xxxx")

intents = botpy.Intents(public_guild_messages=True)
client = MyClient(intents=intents)
client.run(appid={appid}, token={token})
```

## 参数说明

| 字段名  | 必填 | 类型                      | 描述                         |
| ------- | ---- | ------------------------- | ---------------------------- |
| guild_id | 是   | string                    | [频道 ID](../../model/guild.md) |
| user_id  | 是   | string                    | [成员 ID](../../model/user.md)  |
| mute_end_timestamp  | string | 禁言到期时间戳，`绝对时间戳`，单位：`秒`（与 `seconds` 字段同时赋值的话，以该字段为准） |
| mute_seconds | string | 禁言多少秒（两个字段二选一，**默认以 `mute_end_timstamp` 为准**）                                  |

## 返回说明

成功返回空对象。

## 返回示例

`data`：

```python
True
```

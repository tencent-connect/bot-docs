# 批量禁言成员

用于将频道的指定批量成员（非管理员）禁言。要求机器人有管理员权限

该接口同样可用于批量解除禁言，具体使用见[批量解除禁言](#批量解除禁言)。

## 使用示例

```python
import botpy

from botpy.message import Message

class MyClient(botpy.Client):
    async def on_at_message_create(self, message: Message):
        user_ids = ["xxx", "xxx"]
        await self.api.mute_multi_member(guild_id="xxxx", user_ids=user_ids, mute_end_timestamp="xxxx", mute_seconds="xxxx")

intents = botpy.Intents(public_guild_messages=True)
client = MyClient(intents=intents)
client.run(appid={appid}, token={token})
```

## 参数说明

| 字段名  | 必填 | 类型                      | 描述                         |
| ------- | ---- | ------------------------- | ---------------------------- |
| guild_id | 是   | string                    | [频道 ID](../../model/guild.md) |
| user_ids            | string 列表 | 禁言成员的 user_id 列表                       |
| mute_end_timestamp  | string | 禁言到期时间戳，`绝对时间戳`，单位：`秒`（与 `seconds` 字段同时赋值的话，以该字段为准） |
| mute_seconds        | string | 禁言多少秒（两个字段二选一，**默认以 `mute_end_timstamp` 为准**）                         |

#### 批量解除禁言

该接口同样支持**批量解除禁言**，将`mute_end_timestamp`或`mute_seconds`传值为字符串`'0'`即可，同时附上需要解除禁言的 user_id 列表。

## 返回说明

返回设置成功的成员 user_id 列表

## 返回示例

`data`：

```python
List["123", "456"]
```

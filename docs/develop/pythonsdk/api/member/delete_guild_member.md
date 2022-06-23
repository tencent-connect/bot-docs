# 删除频道成员

移除频道的某个成员。

<PrivateDomain/>

## 使用示例

```python
import botpy
from botpy.message import Message

class MyClient(botpy.Client):
    async def on_at_message_create(self, message: Message):
        await self.api.get_delete_member(
            guild_id="xxxx", 
            user_id="xxx", 
            add_blacklist=True, 
            delete_history_msg_days=7
        )

intents = botpy.Intents(public_guild_messages=True)
client = MyClient(intents=intents)
client.run(appid={appid}, token={token})
```

::: warning 注意

- 需要使用的 token 对应的用户具备踢人权限。如果是机器人，要求被添加为管理员。
- 操作成功后，会触发频道成员删除事件
  :::

## 参数说明

| 字段名  | 必填 | 类型   | 描述    |
| ------- | ---- | ------ | ------- |
| guild_id | 是   | string | 频道 ID |
| user_id  | 是   | string | 用户 ID |
| add_blacklist | 是   | bool | 是否拉入黑名单 |
| delete_history_msg_days  | 是   | int | 撤回移除成员的消息，可指定撤回消息的时间范围 |

> 注：消息撤回时间范围仅支持固定的天数：3，7，15，30。 特殊的时间范围：-1: 撤回全部消息。默认值为0不撤回任何消息。


## 返回说明

无

## 返回示例

`data`:

```js
{}
```

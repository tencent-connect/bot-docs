# 发送带有按钮的消息

## 功能描述

通过在 `MessageSendRequest` 中指定 `keyboard` 字段发送带按钮的消息，支持 `keyboard 模版` 和 `自定义 keyboard` 两种请求格式。

- 要求操作人在该子频道具有`发送消息`和 对应`消息按钮组件` 的权限。
- 请求参数 `keyboard 模版` 和 `自定义 keyboard` 只能单一传值。
- `keyboard 模版`
  - 调用前需要先申请消息按钮组件模板，这一步会得到一个模板 id，在请求时填在 `keyboard` 字段上。
  - 申请消息按钮组件模板需要提供响应的 json，具体格式参考 [InlineKeyboard](../../model/inline_keyboard.md#InlineKeyboard)。
- 仅 markdown 消息支持消息按钮。

## 使用示例

### 1：使用 keyboard 模版

```python
import botpy
from botpy.message import Message
from botpy.types.message import MarkdownPayload, MessageMarkdownParams

class MyClient(botpy.Client):
    async def handle_send_markdown_by_template(self, channel_id, msg_id):
        params = [
            MessageMarkdownParams(key="title", values=["标题"]),
            MessageMarkdownParams(key="content", values=["为了成为一名合格的巫师，请务必阅读频道公告", "藏馆黑色魔法书"]),
        ]
        markdown = MarkdownPayload(template_id=65, params=params)

        # 通过api发送回复消息
        await self.api.post_message(channel_id, markdown=markdown, msg_id=msg_id)

    async def handle_send_markdown_by_content(self, channel_id, msg_id):
        markdown = MarkdownPayload(content="# 标题 \n## 简介很开心 \n内容")
        # 通过api发送回复消息
        await self.api.post_message(channel_id, markdown=markdown, msg_id=msg_id)

    async def on_at_message_create(self, message: Message):
        await message.reply(content=f"机器人{self.robot.name}收到你的@消息了: {message.content}")
        await self.handle_send_markdown_by_template(message.channel_id, message.id)
        await self.handle_send_markdown_by_content(message.channel_id, message.id)

intents = botpy.Intents(public_guild_messages=True)
client = MyClient(intents=intents)
client.run(appid={appid}, token={token})
```

### 2：使用自定义 keyboard

```python
import botpy
from botpy import BotAPI

from botpy.message import Message
from botpy.types.inline import Keyboard, Button, RenderData, Action, Permission, KeyboardRow
from botpy.types.message import MarkdownPayload, KeyboardPayload

class MyClient(botpy.Client):
    async def on_at_message_create(self, message: Message):
        await send_template_keyboard(self.api, message)
        await send_self_defined_keyboard(self.api, message)

async def send_template_keyboard(api: BotAPI, message: Message):
    markdown = MarkdownPayload(content="# 123 \n 今天是个好天气")
    keyboard = KeyboardPayload(id="62")
    await api.post_keyboard_message(message.channel_id, markdown=markdown, keyboard=keyboard)

async def send_self_defined_keyboard(api: BotAPI, message: Message):
    markdown = MarkdownPayload(content="# 标题 \n## 简介 \n内容")
    keyboard = KeyboardPayload(content=build_a_demo_keyboard())
    await api.post_keyboard_message(message.channel_id, markdown=markdown, keyboard=keyboard)

def build_a_demo_keyboard() -> Keyboard:
    """
    创建一个只有一行且该行只有一个 button 的键盘
    """
    button1 = Button(
        id="1",
        render_data=RenderData(label="button", visited_label="BUTTON", style=0),
        action=Action(
            type=2,
            permission=Permission(type=2, specify_role_ids=["1"], specify_user_ids=["1"]),
            click_limit=10,
            data="/搜索",
            at_bot_show_channel_list=True,
        ),
    )

    row1 = KeyboardRow(buttons=[button1])
    return Keyboard(rows=[row1])

intents = botpy.Intents(public_guild_messages=True)
client = MyClient(intents=intents)
client.run(appid={appid}, token={token})

```

## 返回说明

成功返回 [Message](../../model/message.md#message) 对象

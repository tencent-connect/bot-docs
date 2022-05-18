# 发送带有按钮的消息

## 功能描述

通过在 `MessageSendRequest` 中指定 `keyboard` 字段发送带按钮的消息，支持 `keyboard 模版` 和 `自定义 keyboard` 两种请求格式。

- 要求操作人在该子频道具有`发送消息`和 对应`消息按钮组件` 的权限。
- 请求参数 `keyboard 模版` 和 `自定义 keyboard` 只能单一传值。
- `keyboard 模版`
   - 调用前需要先申请消息按钮组件模板，这一步会得到一个模板 id，在请求时填在 `keyboard` 字段上。
   - 申请消息按钮组件模板需要提供响应的 json，具体格式参考 [InlineKeyboard](message_keyboard.md#inlinekeyboard)。
- 仅 markdown 消息支持消息按钮。

## 使用示例

### 1：使用 keyboard 模版

#### sync

```python
import qqbot

token = qqbot.Token({appid}, {token})

def send_template_keyboard(channel_id, msg_id):
    msg_api = qqbot.MessageAPI(t_token, False)

    markdown = MessageMarkdown(content="# 123 \n hello")
    keyword = MessageKeyboard(id='62')
    send = qqbot.MessageSendRequest(markdown=markdown, msg_id=msg_id, keyboard=keyword)
    message = msg_api.post_message(channel_id, send)
```

#### async

```python
import qqbot

token = qqbot.Token({appid}, {token})
 
async def send_template_keyboard(channel_id, msg_id):
    msg_api = qqbot.AsyncMessageAPI(t_token, False)

    markdown = MessageMarkdown(content="# 123 \n hello")
    keyword = MessageKeyboard(id='62')
    send = qqbot.MessageSendRequest(markdown=markdown, msg_id=msg_id, keyboard=keyword)
    message = await msg_api.post_message(channel_id, send)
```

### 2：使用自定义 keyboard

#### sync

```python
import qqbot

token = qqbot.Token({appid}, {token})

def send_self_defined_keyboard(channel_id, msg_id):
    msg_api = qqbot.MessageAPI(t_token, False)

    markdown = MessageMarkdown(content="# 标题 \n## 简介 \n内容")
    keyboard: MessageKeyboard = build_a_demo_keyboard()
    send = qqbot.MessageSendRequest(markdown=markdown, msg_id=msg_id, keyboard=keyboard)
    message = msg_api.post_message(channel_id, send)
```

#### async

```python
import qqbot

token = qqbot.Token({appid}, {token})
 
async def send_self_defined_keyboard(channel_id, msg_id):
    msg_api = qqbot.AsyncMessageAPI(t_token, False)

    markdown = MessageMarkdown(content="# 标题 \n## 简介 \n内容")
    keyboard: MessageKeyboard = build_a_demo_keyboard()
    send = qqbot.MessageSendRequest(markdown=markdown, msg_id=msg_id, keyboard=keyboard)
    message = await msg_api.post_message(channel_id, send)
```


```python
def build_a_demo_keyboard() -> MessageKeyboard:
    """
    创建一个只有一行且该行只有一个 button 的键盘
    """
    button1 = Button(
        '1',
        RenderData(
            "button",
            "BUTTON",
            0
        ),
        Action(
            2,
            Permission(2, specify_role_ids=["1"]),
            10,
            "/搜索",
            True
        )
    )
    row1 = InlineKeyboardRow([button1])
    inline_keyboard = InlineKeyboard([row1])
    return MessageKeyboard(content=inline_keyboard)
```

## 返回说明

成功返回 [Message](../../model/message.md#message) 对象

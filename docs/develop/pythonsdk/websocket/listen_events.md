# WSS 消息体

## 当前支持的事件类型

```python
class HandlerType(Enum):
    PLAIN_EVENT_HANDLER = 0  # 透传事件    
    GUILD_EVENT_HANDLER = 1  # 频道事件   
    GUILD_MEMBER_EVENT_HANDLER = 2  # 频道成员事件    
    CHANNEL_EVENT_HANDLER = 3  # 子频道事件    
    MESSAGE_EVENT_HANDLER = 4  # 消息事件    
    AT_MESSAGE_EVENT_HANDLER = 5  # At消息事件
```

## 当前支持的事件

```python
class WsEvent:
    EventGuildCreate = "GUILD_CREATE"
    EventGuildUpdate = "GUILD_UPDATE"
    EventGuildDelete = "GUILD_DELETE"
    
    EventChannelCreate = "CHANNEL_CREATE"
    EventChannelUpdate = "CHANNEL_UPDATE"
    EventChannelDelete = "CHANNEL_DELETE"

    EventGuildMemberAdd = "GUILD_MEMBER_ADD"
    EventGuildMemberUpdate = "GUILD_MEMBER_UPDATE"
    EventGuildMemberRemove = "GUILD_MEMBER_REMOVE"

    EventMessageCreate = "MESSAGE_CREATE"
    
    EventAtMessageCreate = "AT_MESSAGE_CREATE"
```

## 当前事件的返回类型

``` py
#透传事件（无具体的数据对象，根据后台返回Json对象）
def _plain_handler(event, data):
#频道事件
def _guild_handler(event, guild:Guild):
#频道成员事件
def _guild_member_handler(event, guild_member: GuildMember):
#子频道事件
def _channel_handler(event, channel: Channel):
#消息事件 
def _message_handler(event, message: Message):
#At消息事件
def _message_handler(event, message: Message):
```

## 使用示例

### 创建 WSS 实例并监听消息

```py
import qqbot

token = qqbot.Token({appid}, {token})


def _message_handler(event, message: Message):
    msg_api = qqbot.MessageAPI(t_token, False)
    # 打印返回信息
    qqbot.logger.info("event %s" % event + ",receive message %s" % message.content)
    # 构造消息发送请求数据对象
    send = qqbot.MessageSendRequest("<@%s>谢谢你，加油" % message.author.id, message.id)
    # 通过api发送回复消息
    msg_api.post_message(message.channel_id, send)


qqbot_handler = qqbot.Handler(qqbot.HandlerType.AT_MESSAGE_EVENT_HANDLER, _message_handler)
qqbot.listen_events(token, False, qqbot_handler)
```


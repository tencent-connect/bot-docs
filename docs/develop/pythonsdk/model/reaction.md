# 表情表态对象

在消息、帖子、评论、回复中使用的表情。

表情表态相关事件可参考[表情表态事件](../../api/gateway/guild_message_reactions.md)。

事件监听方式可参考[ws 使用](../websocket/listen_events.md)。

具体示例可参考[使用示例](#表情表态事件监听)。

## MessageReaction

| 字段名     | 类型                              | 描述                      |
| ---------- | --------------------------------- | ------------------------- |
| user_id    | string                            | [用户 ID](./user.md)      |
| guild_id   | string                            | [频道 ID](./guild.md)     |
| channel_id | string                            | [子频道 ID](./channel.md) |
| target     | [ReactionTarget](#reactiontarget) | 表态对象                  |
| emoji      | [Emoji](./emoji.md)               | 表态所用表情              |

## ReactionTarget

| 字段名 | 类型   | 描述                                                         |
| ------ | ------ | ------------------------------------------------------------ |
| id     | string | 表态对象 ID                                                  |
| type   | number | 表态对象类型，参考 [ReactionTargetType](#reactiontargettype) |

## ReactionTargetType

| 值  | 描述 |
| --- | ---- |
| 0   | 消息 |
| 1   | 帖子 |
| 2   | 评论 |
| 3   | 回复 |

## 表情表态事件监听

### 代码示例

```python
import qqbot
from qqbot.core.util.yaml_util import YamlUtil

test_config = YamlUtil.read(os.path.join(os.path.dirname(__file__), "config.yaml"))


async def _reaction_handler(event, reaction: qqbot.Reaction):
    qqbot.logger.info("event %s" % event + ", reaction channel id %s" % reaction.channel_id)


if __name__ == "__main__":
    t_token = qqbot.Token(test_config["token"]["appid"], test_config["token"]["token"])
    handler = qqbot.Handler(qqbot.HandlerType.MESSAGE_REACTIONS_EVENT_HANDLER, _reaction_handler)
    qqbot.async_listen_events(t_token, False, handler)
```

在频道内，长按某条消息进行表情回复 `👍`，ws 收到消息并打印如下 log 信息：

```python
"event MESSAGE_REACTION_ADD, reaction channel id 2568610"
```

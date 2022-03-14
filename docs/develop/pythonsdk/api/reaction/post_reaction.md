# 发表表情表态

用于在指定子频道向某条消息发表表情表态。

## 使用示例

#### sync

```python
import qqbot

token = qqbot.Token({appid}, {token})


def demo():
    api = qqbot.ReactionAPI(token, False)
    result = api.put_reaction(channel_id, message_id, EmojiType.system, "4")
```

#### async

```python
import qqbot

token = qqbot.Token({appid}, {token})


async def demo():
    api = qqbot.AsyncReactionAPI(token, False)
    result = await api.put_reaction(channel_id, message_id, EmojiType.system, "4")
```

## 参数说明

| 字段名      | 必填 | 类型                                  | 描述                             |
| ----------- | ---- | ------------------------------------- | -------------------------------- |
| channel_id  | 是   | string                                | 子频道 ID |
| message_id  | 是   | string                                | 消息 ID                     |
| type        | 是   | int                                   | 表情类型，参考[EmojiType](../../model/emoji.md#EmojiType)                     |
| emoji_id    | 是   | string                                | 表情 ID，参考 [Emoji 列表](../../model/emoji.md#Emoji-列表) 

## 返回说明

返回是否更新成功

## 返回示例

`data`：

```Python
True
```

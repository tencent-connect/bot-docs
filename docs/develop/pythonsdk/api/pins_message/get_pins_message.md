# 获取精华消息

用于获取子频道 `channelId` 内的精华消息。

## 使用示例

#### sync

```python
import qqbot

token = qqbot.Token({appid}, {token})


def demo():
    api = qqbot.PinsAPI(token, IS_SANDBOX)
    result = api.get_pins(channel_id)
```

#### async

```python
import qqbot

token = qqbot.Token({appid}, {token})


async def demo():
    api = qqbot.AsyncPinsAPI(token, IS_SANDBOX)
    result = await api.get_pins(channel_id)
```

## 参数说明

| 字段名    | 必填 | 类型   | 描述                             |
| --------- | ---- | ------ | -------------------------------- |
| channel_id | 是   | string | 子频道 ID |

## 返回说明

返回 [PinsMessage](#pinsmessage) 对象。

### PinsMessage

| 字段名      | 类型     | 描述                               |
| ----------- | -------- | ---------------------------------- |
| guild_id    | string   | 频道 ID      |
| channel_id  | string   | 子频道 ID  |
| message_ids | string[] | 消息 ID |

## 返回示例

`data`：

```json
{
  "guild_id": "xxxxxx",
  "channel_id": "xxxxxx",
  "message_ids": ["xxxxx"]
}
```

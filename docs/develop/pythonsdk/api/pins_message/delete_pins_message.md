# 删除精华消息

用于移除子频道 `channelId` 下的精华消息 `messageId` 。

## 使用示例

#### sync

```python
import qqbot

token = qqbot.Token({appid}, {token})


def demo():
    api = qqbot.PinsAPI(token, IS_SANDBOX)
    result = api.delete_pin(channel_id, message_id)
```

#### async

```python
import qqbot

token = qqbot.Token({appid}, {token})


async def demo():
    api = qqbot.AsyncPinsAPI(token, IS_SANDBOX)
    result = await api.delete_pin(channel_id, message_id)
```

## 参数说明

| 字段名    | 必填 | 类型   | 描述                             |
| --------- | ---- | ------ | -------------------------------- |
| channel_id | 是   | string | 子频道 ID |
| message_id | 是   | string | 消息 ID   |

## 返回说明

成功返回空对象。

## 返回示例

`data`：

```Python
True
```

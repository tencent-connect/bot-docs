# 撤回消息

撤回子频道内的消息。

::: warning 注意

- 管理员可以撤回普通成员的消息。
- 频道主可以撤回所有人的消息。

:::

## 使用示例

#### sync

```python
import qqbot

token = qqbot.Token({appid}, {token})

def demo():
    msg_api = qqbot.MessageAPI(token, False)  
    is_success = msg_api.recall_message(channel_id, message_id)
```

#### async
```python
import qqbot

token = qqbot.Token({appid}, {token})

async def demo():
    msg_api = qqbot.AsyncMessageAPI(token, False)  
    is_success = await msg_api.recall_message(channel_id, message_id)
```


## 参数说明

| 参数      | 必填 | 类型   | 说明                             |
| --------- | ---- | ------ | -------------------------------- |
| channel_id | 是   | string | 子频道 ID |
| message_id | 是   | string | 消息 ID  |

## 返回说明

成功返回空对象。

## 返回示例

`data`：

```python
True
```

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
    is_success = msg_api.recall_message(channel_id, message_id, True)
```

#### async
```python
import qqbot

token = qqbot.Token({appid}, {token})

async def demo():
    msg_api = qqbot.AsyncMessageAPI(token, False)  
    is_success = await msg_api.recall_message(channel_id, message_id, True)
```


## 参数说明

| 参数      | 必填 | 类型   | 说明                             |
| --------- | ---- | ------ | -------------------------------- |
| channel_id | 是   | string | 子频道 ID |
| message_id | 是   | string | 消息 ID  |
| hide_tip | 否   | bool | 是否隐藏提示小灰条，true 为隐藏，false 为显示。默认为false  |

## 返回说明

返回是否更新成功

## 返回示例

`data`：

```python
True
```

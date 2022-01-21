# 删除频道全局公告 

删除频道全局公告。

## 使用示例

#### sync
```python
import qqbot

token = qqbot.Token({appid}, {token})

def demo():
    announce_api = qqbot.AnnounceAPI(token, False)  
    is_success = announce_api.delete_announce(guild_id, message_id)
```

#### async
```python
import qqbot

token = qqbot.Token({appid}, {token})

async def demo():
    announce_api = qqbot.AsyncAnnounceAPI(token, False)  
    is_success = await announce_api.delete_announce(guild_id, message_id)
```

## 参数说明

| 字段名    | 必填 | 类型   | 描述                           |
| --------- | ---- | ------ | ------------------------------ |
| guild_id   | 是   | string | 频道 ID  |
| message_id | 是   | string | 消息 ID |

## 返回说明

成功返回空对象。

## 返回示例

`data`：

```python
True
```

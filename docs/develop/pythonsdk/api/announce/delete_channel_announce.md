# 删除子频道公告 <Badge text="v2.2.0" />

删除子频道公告。

## 使用示例

```python
import qqbot

token = qqbot.Token({appid}, {token})

announce_api = qqbot.AnnounceAPI(token, False)  
announce_api.delete_channel_announce(channel_id, message_id)
```

## 参数说明

| 字段名    | 必填 | 类型   | 描述                           |
| --------- | ---- | ------ | ------------------------------ |
| channel_id | 是   | string | 子频道 ID     |
| message_id | 是   | string | 消息 ID |

## 返回说明

成功返回空对象。

## 返回示例

`data`：

```python
True
```

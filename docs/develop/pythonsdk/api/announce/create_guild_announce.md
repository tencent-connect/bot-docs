# 创建频道全局公告 <Badge text="v2.2.0" />

将某个子频道的某条消息创建为频道全局公告。

## 使用示例

```python
import qqbot

token = qqbot.Token({appid}, {token})

announce_api = qqbot.AnnounceAPI(token, False)  
create_announce_request = CreateAnnounceRequest(channel_id, message_id)
announce_api.create_announce(guild_id, create_announce_request)
```

## 参数说明

| 字段名    | 必填 | 类型   | 描述                             |
| --------- | ---- | ------ | -------------------------------- |
| guild_id   | 是   | string | 频道 ID     |
| create_announce_request | 是   | [CreateAnnounceRequest](#muteoption) | 创建频道公告请求参数 |


### CreateAnnounceRequest

| 字段名       | 类型   | 描述                      |
| ------------ | ------ | ------------------------- |
| channel_id   | string | 子频道 ID |
| message_id | string | 消息 ID  |

## 返回说明

返回 [Announce](#announce) 对象。

### Announce

| 字段名       | 类型   | 描述                      |
| ------------ | ------ | ------------------------- |
| guild_id     | string | 频道 ID    |
| channel_id   | string | 子频道 ID |
| message_id | string | 消息 ID  |

## 返回示例

`data`：

```json
{
    "guild_id":"guild_id",
    "channel_id":"channel_id",
    "message_id":"message_id"
}
```

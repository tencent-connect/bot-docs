# 创建子频道公告 <Badge text="v2.2.0" />

将某条消息创建为子频道的公告。

## 使用示例

```python
import qqbot

token = qqbot.Token({appid}, {token})

announce_api = qqbot.AnnounceAPI(token, False)  
create_channel_announce_request = CreateChannelAnnounceRequest(message_id)
announce_api.create_channel_announce(channel_id, create_channel_announce_request)
```

## 参数说明

| 字段名    | 必填 | 类型   | 描述                             |
| --------- | ---- | ------ | -------------------------------- |
| guild_id   | 是   | string | 频道 ID     |
| create_channel_announce_request | 是   | [CreateChannelAnnounceRequest](#CreateChannelAnnounceRequest) | 创建子频道公告请求参数 |


### CreateChannelAnnounceRequest

| 字段名       | 类型   | 描述                      |
| ------------ | ------ | ------------------------- |
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

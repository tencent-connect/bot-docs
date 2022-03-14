# 创建频道公告推荐子频道

用于将指定子频道设置为当前频道的推荐子频道，并以全局公告形式展示。

::: warning 注意

- 同频道内推荐子频道最多只能创建 `3` 条。
- 推荐子频道和全局公告**不能同时存在**，会互相顶替设置。
- 只有子频道权限为全体成员可见才可设置为推荐子频道。
- **删除频道公告**推荐子频道请使用 [删除频道公告](./delete_channel_announce.md),并将 `messageId` 设置为 `all`。

:::

## 使用示例

#### sync
```python
import qqbot

token = qqbot.Token({appid}, {token})

def demo():
    announce_api = qqbot.AnnounceAPI(token, False)  
    channel_list = [RecommendChannel(channel_id, "xxx")]
    request = RecommendChannelRequest(0, channel_list)
    announce = announce_api.post_recommended_channels(guild_id, request)
```

#### async
```python
import qqbot

token = qqbot.Token({appid}, {token})

async def demo():
    announce_api = qqbot.AsyncAnnounceAPI(token, False) 
    channel_list = [RecommendChannel(channel_id, "xxx")]
    request = RecommendChannelRequest(0, channel_list)
    announce = await announce_api.post_recommended_channels(guild_id, request)
```

## 参数说明

| 字段名       | 必填 | 类型                          | 描述                         |
| ------------ | ---- | ----------------------------- | ---------------------------- |
| guildId      | 是   | string                        | 频道 ID |
| request | 是   | [RecommendChannelRequest](#RecommendChannelRequest) | 推荐子频道列表           |

### RecommendChannelRequest

| 字段名             | 必填 | 类型                                    | 描述                                            |
| ------------------ | ---- | --------------------------------------- | ----------------------------------------------- |
| announces_type     | 否   | number                                  | 公告类别 0:成员公告，1:欢迎公告，默认为成员公告 |
| recommend_channels | 是   | RecommendChannel[](#recommendchannel) 列表 | 推荐子频道列表                                  |

### RecommendChannel

| 字段名     | 类型   | 描述                      |
| ---------- | ------ | ------------------------- |
| channel_id | string | 子频道 ID |
| introduce  | string | 推荐语                    |

## 返回说明

返回 [Announce](#announce) 对象。

### Announce

| 字段名             | 类型                                         | 描述                             |
| ------------------ | -------------------------------------------- | -------------------------------- |
| guild_id           | string                                       | 频道 ID     |
| channel_id         | string                                       | 子频道 ID |
| message_id         | string                                       | 消息 ID  |
| announce_type      | number                                       | 推荐类别 0:成员公告; 1:欢迎公告  |
| recommend_channels | [RecommendChannel](#recommendchannel) 列表 | 推荐子频道详情列表               |

## 返回示例

`data`：

```json
{
  "guild_id": "xxxxxx",
  "channel_id": "xxxxx",
  "message_id": "",
  "announces_type": 0,
  "recommend_channels": [
    {
      "channel_id": "xxxx",
      "introduce": "推荐语"
    },
    {
      "channel_id": "xxxx",
      "introduce": "推荐语"
    }
  ]
}
```

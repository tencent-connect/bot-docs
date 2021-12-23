# 获取子频道信息

获取子频道 channel 详情

## 使用示例

```py
import qqbot

token = qqbot.Token({appid}, {token})

api = qqbot.ChannelAPI(token, False)
channel = api.get_channel(channel_id)
```

## 参数说明

| 字段名     | 类型   | 描述      |
| ---------- | ------ | --------- |
| channel_id | String | 子频道 ID |

## 返回说明

字段参见 [Channel](#Channel)


# 子频道对象(Channel)

子频道对象中所涉及的 ID 类数据，都仅在机器人场景流通，与真实的 ID 无关。请不要理解为真实的 ID

### Channel
| 字段名    | 类型   | 描述                                           |
| --------- | ------ | ---------------------------------------------- |
| id        | String | 子频道id                                       |
| guild_id  | String | 频道id                                         |
| name      | String | 子频道名                                       |
| type      | int    | 子频道类型 [ChannelType](#channeltype)         |
| sub_type  | int    | 子频道子类型 [ChannelSubType](#channelsubtype) |
| position  | int    | 排序，必填，而且不能够和其他子频道的值重复     |
| parent_id | String | 分组 id                                        |
| owner_id  | String | 创建人 id                                      |

### ChannelType

| 值    | 描述         |
| ----- | ------------ |
| 0     | 文字子频道   |
| 1     | 保留，不可用 |
| 2     | 语音子频道   |
| 3     | 保留，不可用 |
| 4     | 子频道分组   |
| 10005 | 直播子频道   |
| 10006 | 应用子频道   |
| 10007 | 论坛子频道   |

注：由于 QQ 频道还在持续的迭代中，经常会有新的子频道类型增加，文档更新不一定及时，开发者识别 `ChannelType` 时，请注意相关的未知 ID 的处理。

### ChannelSubType

| 值  | 描述 |
| --- | ---- |
| 0   | 闲聊 |
| 1   | 公告 |
| 2   | 攻略 |
| 3   | 开黑 |

## 返回示例

`data`：

```python
{
    "id":"channel_id",
    "guild_id":"guild_id",
    "name":"子频道名",
    "type":0,
    "last_message_id":"21",
    "nsfw":false,
    "position":2,
    "parent_id":"分组 id  ",
    "rate_limit_per_user":0,
    "owner_id":"0",
    "sub_type":0
}
```
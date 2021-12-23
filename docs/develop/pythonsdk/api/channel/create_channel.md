# 创建子频道

创建一个子频道。
<Warnning />

## 使用示例

```python
import qqbot

token = qqbot.Token({appid}, {token})

api = qqbot.ChannelAPI(token, False)
channel = api.create_channel(channel_id, channel)
```

::: warning 注意

- 要求操作人具有管理频道的权限，如果是机器人，则需要将机器人设置为管理员。
- 创建成功后，返回创建成功的子频道对象，同时会触发一个频道创建的事件通知。
- 目前不支持创建的子频道类型
    - 子频道分组
    - 私密子频道

:::

## 参数说明

| 字段名  | 必填 | 类型                | 描述       |
| ------- | ---- | ------------------- | ---------- |
| guildId | 是   | string              | 频道 ID    |
| channel | 是   | [Channel](#channel) | 子频道对象 |

### Channel

| 字段名    | 类型   | 必填 | 描述                                           |
| --------- | ------ | ---- | ---------------------------------------------- |
| name      | string | 是   | 子频道名                                       |
| type      | number | 是   | 子频道类型 [ChannelType](#channeltype)         |
| sub_type  | number | 是   | 子频道子类型 [ChannelSubType](#channelsubtype) |
| position  | number | 否   | 排序，必填，而且不能够和其他子频道的值重复     |
| parent_id | string | 否   | 分组 ID                                        |

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

## 返回说明

返回 [ChannelRes](#channelres) 对象。

### ChannelRes

| 字段名    | 类型   | 描述                                           |
| --------- | ------ | ---------------------------------------------- |
| id        | string | 子频道 ID                                      |
| guild_id  | string | 频道 ID                                        |
| name      | string | 子频道名                                       |
| type      | number | 子频道类型 [ChannelType](#channeltype)         |
| sub_type  | number | 子频道子类型 [ChannelSubType](#channelsubtype) |
| position  | number | 排序，必填，而且不能够和其他子频道的值重复     |
| owner_id | string | 创建者 ID                                        |

## 返回示例

`data`：

```python
{
    "id": "channel_id",
    "guild_id": "guild_id",
    "name": "channel_test",
    "type": 1,
    "position": 1640240055,
    "owner_id": "2854198244",
    "sub_type": 0
}
```

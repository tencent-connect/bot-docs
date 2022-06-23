# 创建子频道

创建一个子频道。
<PrivateDomain/>

## 使用示例

```python
import botpy
from botpy.message import Message
from botpy.types.channel import ChannelSubType, ChannelType

class MyClient(botpy.Client):
    async def on_at_message_create(self, message: Message):
        await self.api.create_channel(
          guild_id=message.guild_id,
          name="创建子频道",
          type=ChannelType.TEXT_CHANNEL,
          sub_type=ChannelSubType.TALK,
          position=1,
          parent_id=1,
        )

intents = botpy.Intents(public_guild_messages=True)
client = MyClient(intents=intents)
client.run(appid={appid}, token={token})
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
| guild_id | 是   | string              | 频道 ID    |
| name      | 是 | string   | 子频道名                                       |
| type      | 是 | [ChannelType](#channeltype)   | 子频道类型          |
| sub_type  | 是 | [ChannelSubType](#channelsubtype)   | 子频道子类型  |
| position  | 否 | int   | 排序，非必填     |
| parent_id | 否 | int   | 分组 ID                                        |


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

| 字段名   | 类型   | 描述                                           |
| -------- | ------ | ---------------------------------------------- |
| id       | string | 子频道 ID                                      |
| guild_id | string | 频道 ID                                        |
| name     | string | 子频道名                                       |
| type     | int | 子频道类型 [ChannelType](#channeltype)         |
| sub_type | int | 子频道子类型 [ChannelSubType](#channelsubtype) |
| position | int | 排序，非必填                                   |
| owner_id | string | 创建者 ID                                      |

## 返回示例

`data`：

```json
{
  "id": "channel_id",
  "guild_id": "guild_id",
  "name": "channel_test",
  "type": 1,
  "sub_type": 0,
  "position": 1640240055,
  "owner_id": "2854198244"
}
```

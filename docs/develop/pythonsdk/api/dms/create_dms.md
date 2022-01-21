# 创建私信会话

用于机器人和在同一个频道内的成员创建私信会话。

:::warning 注意

机器人和用户存在共同频道才能创建私信会话。

:::

## 使用示例

#### sync

```python
import qqbot

token = qqbot.Token({appid}, {token})


def demo():
    api = qqbot.DmsAPI(token, False)
    request = qqbot.CreateDirectMessageRequest(source_guild_id, recipient_id)
    dms = api.create_direct_message(request)
```

#### async

```python
import qqbot

token = qqbot.Token({appid}, {token})


async def demo():
    api = qqbot.AsyncDmsAPI(token, False)
    dms_request = qqbot.CreateDirectMessageRequest(source_guild_id, recipient_id)
    dms = await api.create_direct_message(request)
```

## 参数说明

| 字段名 | 必填 | 类型                        | 描述           |
| ------ | ---- | --------------------------- | -------------- |
| dms_request  | 是   | [CreateDirectMessageRequest](#CreateDirectMessageRequest) | 创建私信结构体 |

### CreateDirectMessageRequest

| 字段名          | 必填 | 类型   | 描述                           |
| --------------- | ---- | ------ | ------------------------------ |
| source_guild_id | 是   | string | [源频道 ID](../../model/guild.md) |
| recipient_id    | 是   | string | [接收者 ID](../../model/user.md)  |

## 返回说明

返回[DMS](#dms)对象。

### DMS

| 字段名      | 类型   | 描述                    |
| ----------- | ------ | ----------------------- |
| guild_id    | string | 私信会话关联的频道 ID   |
| channel_id  | string | 私信会话关联的子频道 ID |
| create_time | string | 创建私信会话时间戳      |

## 返回示例

```json
{
  "guild_id": "xxxxxx",
  "channel_id": "xxxxxx",
  "create_time": "1642545606"
}
```

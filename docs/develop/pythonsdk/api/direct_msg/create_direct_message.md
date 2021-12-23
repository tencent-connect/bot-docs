# 创建私信会话

## 功能描述

- 机器人和同在一个频道内的成员创建私信会话。
- 创建成功后，返回创建成功的频道 id ，子频道 id 和创建时间。

## 使用示例

```py
import qqbot

token = qqbot.Token({appid}, {token})

api = qqbot.MessageAPI(token, False)
request = CreateDirectMessageRequest("guild_id", "user_id")
direct_message_guild = api.create_direct_message_guild(request)
```

## 参数说明

| 字段名      | 类型   | 描述      |
| ----------- | ------ | --------- |
| request    | [CreateDirectMessageRequest](#CreateDirectMessageRequest) | 私信频道创建请求   |

## CreateDirectMessageRequest

| 字段名          | 类型   | 描述      |
| --------------- | ------ | --------- |
| source_guild_id | string | 源频道 ID |
| user_id    | string | 接收者 ID |

## 返回说明

成功创建后，返回[DirectMessageGuild](#DirectMessageGuild)对象返回创建成功的频道 ID，子频道 ID 和创建时间。

## DirectMessageGuild

| 字段名      | 类型   | 描述      |
| ----------- | ------ | --------- |
| guild_id    | string | 频道 ID   |
| channel_id  | string | 子频道 ID |
| create_time | string | 创建时间  |

## 返回示例

`data`：

```json
{
  "guild_id": "xxxxxx",
  "channel_id": "xxxxxx",
  "create_time": "1638323931"
}
```
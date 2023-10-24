# 获取精华消息

## 接口

`GET /channels/{channel_id}/pins`

## 功能描述

用于获取子频道 `channel_id` 内的精华消息。

## Content-Type

`application/json`

## 返回

返回 [PinsMessage](model.md#PinsMessage) 对象。

## 错误码

详见[错误码](../../../../openapi/error/error.md)。

## 示例

响应数据包

```json
{
  "guild_id": "xxxxxx",
  "channel_id": "xxxxxx",
  "message_ids": ["xxxxx"]
}
```

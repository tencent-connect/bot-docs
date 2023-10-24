# 创建子频道公告（2022年3月15日后废弃）

## 接口

`POST /channels/{channel_id}/announces`

## 功能描述

用于将子频道 `channel_id` 内的某条消息设置为子频道公告。
- **此接口在 APP `v8.8.65` 后不保证完全兼容并且2022年3月15日后会废弃，如需此功能请使用 [添加精华消息](../pins/put_pins_message.md)**

## Content-Type

`application/json`

## 参数

| 字段名        | 类型     | 描述    |
|------------|--------|-------|
| message_id | string | 消息 id |

## 返回

返回[Announces](model.md#Announces) 对象。

## 错误码

详见[错误码](../../../../openapi/error/error.md)。

## 示例

请求数据包

```json
{
  "message_id": "xxxxxx"
}
```

响应数据包

```json
{
  "guild_id": "xxxxxx",
  "channel_id": "xxxxxx",
  "message_id": "xxxxxx"
}
```

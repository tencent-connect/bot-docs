# 删除子频道公告（2022年3月15日后废弃）

## 接口

```http
DELETE /channels/{channel_id}/announces/{message_id}
```

## 功能描述

用于删除子频道 `channel_id` 下指定 `message_id` 的子频道公告（）。
- **此接口在 APP `v8.8.65` 后不保证完全兼容并且2022年3月15日后会废弃，如需此功能请使用 [删除精华消息](../pins/delete_pins_message.md)**
- `message_id` 有值时，会校验 `message_id` 合法性，若不校验校验 `message_id`，请将 `message_id` 设置为 `all`。

## Content-Type

```http
application/json
```

## 返回

成功返回 HTTP 状态码 `204`。

## 错误码

详见[错误码](../../../../openapi/error/error.md)。

## 示例

请求数据包

```code
DELETE /channels/123456/announces/112233
```

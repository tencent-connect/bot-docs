# 撤回消息

### 接口

`DELETE /channels/{channel_id}/messages/{message_id}`

### 功能描述

用于撤回子频道 `channel_id` 下的消息 `message_id。`

- 管理员可以撤回普通成员的消息。
- 频道主可以撤回所有人的消息。

### Content-Type

`application/json`

### 返回

成功返回 HTTP 状态码 `200`。

### 错误码

详见[错误码](../error/error.md)。

### 示例

请求数据包

```http
DELETE /channels/123456/messages/112233
```

# 删除子频道公告

### 接口

`DELETE /channels/{channel_id}/announces/{message_id}`

### 功能描述

- 删除指定子频道公告
- {message_id} 有值时，会校验 message_id 合法性，若不校验校验 message_id，请将 {message_id} 设置为 all

### Content-Type

`application/json`

### 返回

HTTP 状态码 `204`

### 具体错误

[错误码](../error/error.md)

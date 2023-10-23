# 发送私信

### 接口

`POST /dms/{guild_id}/messages`

### 功能描述

用于发送私信消息，前提是已经创建了私信会话。

- 私信的 `guild_id` 在[创建私信会话](post_dms.md)时以及[私信消息事件](../../gateway/direct_message.md)中获取。
- 私信场景下，每个机器人每天可以对一个用户发 2 条主动消息。
- 私信场景下，每个机器人每天累计可以发 200 条主动消息。
- 私信场景下，被动消息没有条数限制。

### Content-Type

`application/json`

### 参数

和[发送消息](../message/post_messages.md)参数一致。

### 返回

和[发送消息](../message/post_messages.md)返回一致。

### 错误码

详见[错误码](../error/error.md)。

### 示例

参见 [发送消息](../message/post_messages.md#示例)示例。

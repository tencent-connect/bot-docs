# 撤回私信

### 接口

`DELETE /dms/{guild_id}/messages/{message_id}?hidetip=false`

### 参数

| 字段名  | 类型 | 描述                                                             |
| ------- | ---- | ---------------------------------------------------------------- |
| hidetip | bool | 选填，是否隐藏提示小灰条，true 为隐藏，false 为显示。默认为false |

### 功能描述

用于撤回私信频道 `guild_id` 中 `message_id` 指定的私信消息。只能用于撤回机器人自己发送的私信。

<PrivateDomain/>

### Content-Type

`application/json`

### 返回

成功返回 HTTP 状态码 `200`。

### 错误码

详见[错误码](../error/error.md)。

### 示例

请求数据包

```http
DELETE /dms/123456/messages/112233
```

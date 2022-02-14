# 创建频道公告

### 接口

`POST /guilds/{guild_id}/announces`

### 功能描述

用于将频道内的某条消息设置为频道**全局公告**。

### Content-Type

`application/json`

### 参数

| 字段名     | 类型   | 描述      |
| ---------- | ------ | --------- |
| message_id | string | 消息 id   |
| channel_id | string | 子频道 id |

### 返回

返回[Announces](model.md#Announces) 对象。

### 错误码

详见[错误码](../error/error.md)。

### 示例

请求数据包

```json
{
  "channel_id": "123456",
  "message_id": "xxxxxx"
}
```

响应数据包

```json
{
  "guild_id": "xxxxxx",
  "channel_id": "123456",
  "message_id": "xxxxxx"
}
```

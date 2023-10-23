# 创建私信会话

### 接口

`POST /users/@me/dms`

### 功能描述

用于机器人和在同一个频道内的成员创建私信会话。

- 机器人和用户存在共同频道才能创建私信会话。
- 创建成功后，返回创建成功的频道 `id` ，子频道 `id` 和创建时间。

### Content-Type

`application/json`

### 参数

| 字段名          | 类型   | 描述      |
| --------------- | ------ | --------- |
| recipient_id    | string | 接收者 id |
| source_guild_id | string | 源频道 id |

### 返回

返回[DMS](../template/model.md#dms)对象。

### 错误码

详见[错误码](../../../gateway/error/error.md)。

### 示例

请求数据包

```json
{
  "recipient_id": "123456",
  "source_guild_id": "112233"
}
```

响应数据包

```json
{
  "guild_id": "xxxxxx",
  "channel_id": "xxxxxx",
  "create_time": "1642545606"
}
```

# 获取频道详情

### 接口

`GET /guilds/{guild_id}`

### 功能描述

用于获取 `guild_id` 指定的频道的详情。

### Content-Type

`application/json`

### 返回

返回[Guild](model.md#guild) 对象。

### 错误码

详见[错误码](../error/error.md)。

### 示例

请求数据包

```shell
GET /guilds/123456
```

响应数据包

```json
{
  "id": "123456",
  "name": "xxxxxx",
  "icon": "xxxxxx",
  "owner_id": "xxxxxx",
  "owner": false,
  "joined_at": "2022-01-13T11:02:21+08:00",
  "member_count": 5,
  "max_members": 300,
  "description": "千江有水千江月，万里无云万里天"
}
```

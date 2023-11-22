# 删除频道公告

## 接口

```http
DELETE /guilds/{guild_id}/announces/{message_id}
```

## 功能描述

用于删除频道 `guild_id` 下指定 `message_id` 的全局公告。

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
DELETE /guilds/123456/announces/112233
```

# 频道批量成员禁言

## 接口

`PATCH /guilds/{guild_id}/mute`

## 功能描述

用于将频道的指定批量成员（非管理员）禁言。

- 需要使用的 `token` 对应的用户具备管理员权限。如果是机器人，要求被添加为管理员。

该接口同样可用于批量解除禁言，具体使用见[批量解除禁言](#批量解除禁言)。

## Content-Type

`application/json`

## 参数

| 字段名             | 类型   | 描述                                                                                   |
| ------------------ | ------ | -------------------------------------------------------------------------------------- |
| mute_end_timestamp | string | 禁言到期时间戳，绝对时间戳，单位：秒（与 mute_seconds 字段同时赋值的话，以该字段为准） |
| mute_seconds       | string | 禁言多少秒（两个字段二选一，默认以 mute_end_timestamp 为准）                           |
| user_ids           | string列表 | 禁言成员的user_id列表，即[User](../../../openapi/user/model.md#user)的id                           |

### 批量解除禁言

该接口同样支持**批量解除禁言**，将`mute_end_timestamp`或`mute_seconds`传值为字符串`'0'`即可，及需要批量解除禁言的成员的user_id列表`user_ids`'。

## 返回

成功返回 HTTP 状态码 `200`，并返回设置成功的成员user_ids。

## 错误码

详见[错误码](../../../openapi/error/error.md)。

## 示例

请求数据包

```json
{
  "mute_end_timestamp": "1641916800",
  "mute_seconds": "120",
  "user_ids": ["1201318637970874066","1201318637970874067"]
}
```
响应数据包

```json
{
  "user_ids": ["1201318637970874066"]
}
```

# 频道全员禁言

## 接口

`PATCH /guilds/{guild_id}/mute`

## 功能描述

用于将频道的全体成员（非管理员）禁言。

- 需要使用的 `token` 对应的用户具备管理员权限。如果是机器人，要求被添加为管理员。

该接口同样可用于解除禁言，具体使用见[解除全员禁言](#解除禁言)。

## Content-Type

`application/json`

## 参数

| 字段名             | 类型   | 描述                                                                                   |
| ------------------ | ------ | -------------------------------------------------------------------------------------- |
| mute_end_timestamp | string | 禁言到期时间戳，绝对时间戳，单位：秒（与 mute_seconds 字段同时赋值的话，以该字段为准） |
| mute_seconds       | string | 禁言多少秒（两个字段二选一，默认以 mute_end_timestamp 为准）                           |

### 解除禁言

该接口同样支持**解除全员禁言**，将`mute_end_timestamp`或`mute_seconds`传值为字符串`'0'`即可。

## 返回

成功返回 HTTP 状态码 `204`。

## 错误码

详见[错误码](../../../openapi/error/error.md)。

## 示例

请求数据包

```json
{
  "mute_end_timestamp": "1641916800",
  "mute_seconds": "120"
}
```

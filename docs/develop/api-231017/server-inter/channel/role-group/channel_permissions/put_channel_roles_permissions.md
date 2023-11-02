# 修改子频道身份组权限

## 接口

```http
PUT /channels/{channel_id}/roles/{role_id}/permissions
```

## 功能描述

用于修改子频道 channel_id 下身份组 role_id 的权限。

- 要求操作人具有`管理子频道`的权限，如果是机器人，则需要将机器人设置为管理员。
- 参数包括`add`和`remove`两个字段，分别表示授予的权限以及删除的权限。要授予身份组权限即把`add`对应位置 1，删除身份组权限即把`remove`对应位置 1。当两个字段同一位都为 1，表现为删除权限。
- 本接口不支持修改`可管理子频道`权限。

## Content-Type

```http
application/json
```

## 参数

| 字段名                        | 类型   | 描述                               |
| ----------------------------- | ------ | ---------------------------------- |
| [add](model.md#permission)    | string | 字符串形式的位图表示赋予用户的权限 |
| [remove](model.md#permission) | string | 字符串形式的位图表示删除用户的权限 |

## 返回

成功返回 HTTP 状态码 `204`。

## 错误码

详见[错误码](../../../../openapi/error/error.md)。

## 示例

请求数据包

```json
{
  "add": "1",
  "remove": "4"
}
```

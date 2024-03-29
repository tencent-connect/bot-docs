# 创建频道身份组

## 接口

```http
POST /guilds/{guild_id}/roles
```

## 功能描述

用于在`guild_id` 指定的频道下创建一个身份组。

- 需要使用的 `token` 对应的用户具备创建身份组权限。如果是机器人，要求被添加为管理员。
- 参数为非必填，但至少需要传其中之一，默认为空或 `0`。

## Content-Type

```http
application/json
```

## 参数

| 字段名 | 类型   | 描述                                                 |
| ------ | ------ | ---------------------------------------------------- |
| name   | string | 名称(非必填)                                         |
| color  | uint32 | ARGB 的 HEX 十六进制颜色值转换后的十进制数值(非必填) |
| hoist  | int32  | 在成员列表中单独展示: 0-否, 1-是(非必填)             |

## 返回

| 字段名  | 类型                            | 描述                   |
| ------- | ------------------------------- | ---------------------- |
| role_id | string                          | 身份组 ID              |
| role    | [Role](../role/member/role_model.md#role) 对象 | 所创建的频道身份组对象 |

## 错误码

详见[错误码](../../../openapi/error/error.md)。


## 示例

请求数据包

```json
{
  "name": "test",
  "color": 99999,
  "hoist": "1"
}
```

响应数据包

```json
{
  "role_id": "10177739",
  "role": {
    "id": "10177739",
    "name": "test",
    "color": 99999,
    "hoist": 1,
    "number": 0,
    "member_limit": 2000
  }
}
```

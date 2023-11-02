# 获取子频道身份组权限

## 接口

```http
GET /channels/{channel_id}/roles/{role_id}/permissions
```

## 功能描述

用于获取子频道 `channel_id` 下身份组 `role_id` 的权限。

- 要求操作人具有管理子频道的权限，如果是机器人，则需要将机器人设置为管理员。

## Content-Type

application/json

## 返回

返回 [ChannelPermissions](model.md#channelpermissions) 对象。

## 错误码

详见[错误码](../../../../openapi/error/error.md)。

## 示例

请求数据包

```shell
GET /channels/123456/roles/112233/permissions
```

响应数据包

```json
{
  "channel_id": "123456",
  "role_id": "112233",
  "permissions": "5"
}
```

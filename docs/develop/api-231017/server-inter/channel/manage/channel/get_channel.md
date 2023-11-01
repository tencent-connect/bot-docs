# 获取子频道详情

## 接口

`GET /channels/{channel_id}`

## 功能描述

用于获取 `channel_id` 指定的子频道的详情。

## Content-Type

`application/json`

## 返回

返回[Channel](model.md#channel) 对象。

## 错误码

详见[错误码](../../../../openapi/error/error.md)。

## 示例

请求数据包

```shell
GET /channels/123456
```

响应数据包

```json
{
  "id": "123456",
  "guild_id": "xxxxxx",
  "name": "很高兴遇见你",
  "type": 4,
  "position": 2,
  "owner_id": "0",
  "sub_type": 0,
  "private_type": 0,
  "speak_permission": 0,
  "application_id": "0"
}
```

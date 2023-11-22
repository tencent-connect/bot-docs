# 获取频道消息频率的设置详情

## 接口

```http
GET /guilds/{guild_id}/message/setting
```

## 功能描述

用于获取机器人在频道 `guild_id` 内的消息频率设置。

## Content-Type

```http
application/json
```

## 返回

返回[MessageSetting](model.md#MessageSetting) 对象。

## 错误码

详见[错误码](../../../../openapi/error/error.md)。

## 示例

响应数据包

```json
{
  "disable_create_dm": true,
  "disable_push_msg": false,
  "channel_ids": [
    "1146313",
    "2651849",
    "2651149"
  ],
  "channel_push_max_num": 12
}
```

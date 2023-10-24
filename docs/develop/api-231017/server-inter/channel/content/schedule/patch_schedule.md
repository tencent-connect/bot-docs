# 修改日程

## 接口

`PATCH /channels/{channel_id}/schedules/{schedule_id}`

## 功能描述

用于修改日程子频道 `channel_id` 下 `schedule_id` 指定的日程的详情。

- 要求操作人具有`管理频道`的权限，如果是机器人，则需要将机器人设置为管理员。

## Content-Type

`application/json`

## 参数

| 字段名   | 类型                          | 描述                  |
| -------- | ----------------------------- | --------------------- |
| schedule | [Schedule](model.md#schedule) | 日程对象，不需要带 id |

## 返回

返回 [Schedule](model.md#schedule) 对象。

## 错误码

详见[错误码](../../../../openapi/error/error.md)。

## 示例

请求数据包

```json
{
  "schedule": {
    "name": "今晚八点上王者",
    "start_timestamp": "1642076453000",
    "end_timestamp": "1642083653000",
    "jump_channel_id": "0",
    "remind_type": "0"
  }
}
```

响应数据包

```json
{
  "id": "xxxxxx",
  "name": "今晚八点上王者",
  "start_timestamp": "1642076453000",
  "end_timestamp": "1642083653000",
  "creator": {
    "user": {
      "id": "xxxxxx",
      "username": "xxxxxx",
      "bot": true
    },
    "nick": "",
    "joined_at": "2022-01-13T11:02:21+08:00"
  },
  "jump_channel_id": "0",
  "remind_type": "0"
}
```

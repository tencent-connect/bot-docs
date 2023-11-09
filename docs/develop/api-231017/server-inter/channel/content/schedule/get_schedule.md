# 获取日程详情

## 接口

```http
GET /channels/{channel_id}/schedules/{schedule_id}
```

## 功能描述

获取日程子频道 `channel_id` 下 `schedule_id` 指定的的日程的详情。

## Content-Type

```http
application/json
```

## 返回

返回 [Schedule](model.md#schedule) 对象。

## 错误码

详见[错误码](../../../../openapi/error/error.md)。

## 示例

请求数据包

```shell
GET /channels/123455/schedules/112233
```

响应数据包

```json
{
  "id": "112233",
  "name": "上王者",
  "start_timestamp": "1642076400000",
  "end_timestamp": "1642083600000",
  "creator": {
    "user": {
      "id": "xxxxxx",
      "username": "xxxxxx",
      "bot": true
    },
    "nick": "",
    "joined_at": "2022-01-11T10:24:13+08:00"
  },
  "jump_channel_id": "0",
  "remind_type": "0"
}
```

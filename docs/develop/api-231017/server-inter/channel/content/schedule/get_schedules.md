# 获取频道日程列表

## 接口

`GET /channels/{channel_id}/schedules`

## 功能描述

用于获取`channel_id`指定的子频道中当天的日程列表。

- 若带了参数 `since`，则返回结束时间在 `since` 之后的日程列表；若未带参数 `since`，则默认返回当天的日程列表。

## Content-Type

`application/json`

## 参数

| 字段名 | 类型   | 描述               |
| ------ | ------ | ------------------ |
| since  | uint64 | 起始时间戳(**ms**) |

## 返回

返回 [Schedule](model.md#schedule) 对象数组。

## 错误码

详见[错误码](../../../../openapi/error/error.md)。

## 示例

请求数据包

```json
{
  "since": 1642076400000
}
```

响应数据包

```json
[
  {
    "id": "xxxxxx",
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
]
```

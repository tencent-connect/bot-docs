# 获取频道日程列表

### 接口

`GET /channels/{channel_id}/schedules`

### 功能描述
- 获取某个日程子频道里中当天的日程列表；
- 若带了参数 since，则返回结束时间在 since 之后的日程列表；若未带参数 since，则默认返回当天的日程列表。

### 查询字符串参数

| 字段名    | 类型   | 描述             |
| --------- | ------ | ---------------- |
| since | uint64 | 起始时间戳(ms) |

### 返回

返回一组 [Schedule](model.md#schedule) 对象

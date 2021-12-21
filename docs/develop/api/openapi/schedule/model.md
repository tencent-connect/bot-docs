# 日程对象(Schedule)

### Schedule
| 字段名 | 类型 | 描述 |
| - | - | - |
| id | string | 日程 id |
| name | string | 日程名称 |
| description | string | 日程描述 |
| start_timestamp | string | 日程开始时间戳(ms) |
| end_timestamp | string | 日程结束时间戳(ms) |
| creator | [Member](../member/model.md#member) | 创建者 |
| jump_channel_id | string | 日程开始时跳转到的子频道 id |
| remind_type | string | 日程提醒类型，取值参考[RemindType](#remindtype) |

### RemindType

| 提醒类型 id | 描述 |
| --- | --- |
| 0 | 不提醒 |
| 1 | 开始时提醒 |
| 2 | 开始前5分钟提醒 |
| 3 | 开始前15分钟提醒 |
| 4 | 开始前30分钟提醒 |
| 5 | 开始前60分钟提醒 |

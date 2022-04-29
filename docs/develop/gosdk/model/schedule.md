# 日程对象(Schedule) 

## Schedule

| 字段名          | 类型              | 描述                                            |
| --------------- | ----------------- | ----------------------------------------------- |
| ID              | string            | 日程 ID                                         |
| Name            | string            | 日程名称                                        |
| Description     | string            | 日程描述                                        |
| StartTimestamp  | string            | 日程开始时间戳(**`ms`**)                        |
| EndTimestamp    | string            | 日程结束时间戳(**`ms`**)                        |
| Creator         | [Member](#member) | 创建者                                          |
| JumpChannelID   | string            | 日程开始时跳转到的子频道 ID                     |
| RemindType     | string                | 日程提醒类型，取值参考[RemindType](#remindtype) |

## RemindType

| 提醒类型 id | 描述               |
| ----------- | ------------------ |
| 0           | 不提醒             |
| 1           | 开始时提醒         |
| 2           | 开始前 5 分钟提醒  |
| 3           | 开始前 15 分钟提醒 |
| 4           | 开始前 30 分钟提醒 |
| 5           | 开始前 60 分钟提醒 |

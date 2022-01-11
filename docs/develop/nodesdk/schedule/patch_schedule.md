# 修改日程 <Badge text="v2.3.0" />

修改`日程子频道`里的一个日程。

::: warning 注意

要求操作人具有管理频道的权限，如果是机器人，则需要将机器人设置为管理员。

:::

## 使用示例

```javascript
async function demo() {
  let { data } = await client.scheduleApi.patchSchedule(channelId, scheduleId, schedule);
}
```

## 参数说明

| 字段名     | 必填 | 类型                                | 描述      |
| ---------- | ---- | ----------------------------------- | --------- |
| channelId  | 是   | string                              | 子频道 ID |
| scheduleId | 是   | string                              | 日程 ID   |
| schedule   | 是   | [ScheduleToPatch](#scheduletopatch) | 日程对象  |

### ScheduleToPatch

| 字段名          | 必填 | 类型              | 描述                                            |
| --------------- | ---- | ----------------- | ----------------------------------------------- |
| name            | 否   | string            | 日程名称                                        |
| description     | 否   | string            | 日程描述                                        |
| start_timestamp | 否   | string            | 日程开始时间戳(**`ms`**)                        |
| end_timestamp   | 否   | string            | 日程结束时间戳(**`ms`**)                        |
| creator         | 否   | [Member](#member) | 创建者                                          |
| jump_channel_id | 否   | string            | 日程开始时跳转到的子频道 ID                     |
| remind_type     | 否   | string            | 日程提醒类型，取值参考[RemindType](#remindtype) |

**以上字段，需要修改哪个传哪个即可**。

## 返回说明

返回 [Schedule](#schedule) 对象。

### Schedule

| 字段名          | 类型              | 描述                                            |
| --------------- | ----------------- | ----------------------------------------------- |
| id              | string            | 日程 ID                                         |
| name            | string            | 日程名称                                        |
| description     | string            | 日程描述                                        |
| start_timestamp | string            | 日程开始时间戳(**`ms`**)                        |
| end_timestamp   | string            | 日程结束时间戳(**`ms`**)                        |
| creator         | [Member](#member) | 创建者                                          |
| jump_channel_id | string            | 日程开始时跳转到的子频道 ID                     |
| remind_type     | string            | 日程提醒类型，取值参考[RemindType](#remindtype) |

### Member

| 字段名    | 类型          | 描述                                                                                 |
| --------- | ------------- | ------------------------------------------------------------------------------------ |
| user      | [User](#user) | 用户的频道基础信息，只有成员相关接口中会填充此信息                                   |
| nick      | string        | 用户在频道内的昵称                                                                   |
| joined_at | string        | 用户加入频道的时间，是个 `ISO8601 timestamp` 字符串，例："2021-11-23T15:16:48+08:00" |

### User

| 字段名   | 类型    | 描述         |
| -------- | ------- | ------------ |
| id       | string  | 用户 ID      |
| username | string  | 用户名       |
| bot      | boolean | 是否是机器人 |

### RemindType

| 提醒类型 id | 描述               |
| ----------- | ------------------ |
| 0           | 不提醒             |
| 1           | 开始时提醒         |
| 2           | 开始前 5 分钟提醒  |
| 3           | 开始前 15 分钟提醒 |
| 4           | 开始前 30 分钟提醒 |
| 5           | 开始前 60 分钟提醒 |

## 返回示例

`data`：

```json
{
  "id": "xxxxxx",
  "name": "xxxxxx",
  "description": "xxxxxx",
  "start_timestamp": "1641913200000",
  "end_timestamp": "1641916800000",
  "creator": {
    "user": {
      "id": "xxxxxx",
      "username": "xxxxxx",
      "bot": false
    },
    "nick": "",
    "joined_at": "2021-11-24T16:51:35+08:00"
  },
  "jump_channel_id": "0",
  "remind_type": "2"
}
```

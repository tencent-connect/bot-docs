# 获取日程详情

获取某个日程的详情。

## 使用示例

```go
token := token.BotToken("appid", "token")
api := botgo.NewOpenAPI(token).WithTimeout(3 * time.Second)
ctx := context.Background()

schedule, err := api.GetSchedule(ctx, channelId, scheduleId)
if err != nil {
  log.Fatalln("调用 GetSchedule 接口失败, err = ", err)
}
```

## 参数说明

| 字段名     | 必填 | 类型   | 描述                             |
| ---------- | ---- | ------ | -------------------------------- |
| channelId  | 是   | string | [子频道 ID](../../model/channel.md) |
| scheduleId | 是   | string | 日程 ID                          |

## 返回说明

返回 [Schedule](#schedule) 对象。

### Schedule

| 字段名          | 类型              | 描述                                            |
| --------------- | ----------------- | ----------------------------------------------- |
| ID              | string            | 日程 ID                                         |
| Name            | string            | 日程名称                                        |
| Description     | string            | 日程描述                                        |
| StartTimestamp  | string            | 日程开始时间戳(**`ms`**)                        |
| EndTimestamp    | string            | 日程结束时间戳(**`ms`**)                        |
| Creator         | [Member](#member) | 创建者                                          |
| JumpChannelID   | string            | 日程开始时跳转到的子频道 ID                     |
| RemindType     | string            | 日程提醒类型，取值参考[RemindType](#remindtype) |

### Member

| 字段名    | 类型          | 描述                                                                                 |
| --------- | ------------- | ------------------------------------------------------------------------------------ |
| User      | [User](#user) | 用户的频道基础信息，只有成员相关接口中会填充此信息                                   |
| Nick      | string        | 用户在频道内的昵称                                                                   |
| JoinedAt  | Timestamp        | 用户加入频道的时间，是个 `ISO8601 timestamp` 字符串，例："2021-11-23T15:16:48+08:00" |

### User

| 字段名   | 类型    | 描述         |
| -------- | ------- | ------------ |
| ID       | string  | 用户 ID      |
| Username | string  | 用户名       |
| Bot      | boolean | 是否是机器人 |

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

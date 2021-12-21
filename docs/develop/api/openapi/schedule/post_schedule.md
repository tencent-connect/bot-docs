# 创建日程

### 接口
`POST /channels/{channel_id}/schedules`

### 功能描述
- 要求操作人具有`管理频道`的权限，如果是机器人，则需要将机器人设置为管理员。
- 创建成功后，返回创建成功的日程对象。

### 参数

| 字段名    | 类型   | 描述             |
| --------- | ------ | ---------------- |
| schedule | [Schedule](model.md#schedule) | 日程对象，不需要带id |


### 返回
返回新创建的 [Schedule](model.md#schedule) 对象

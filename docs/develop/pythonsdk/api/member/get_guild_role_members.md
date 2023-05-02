# 获取频道身份组的成员列表

获取频道下指定身份组的成员列表。

<PrivateDomain/>

## 使用示例

```python
import qqbot

token = qqbot.Token({appid}, {token})
api = qqbot.GuildMemberAPI(token, False)
members = api.get_guild_role_members(guild_id, role_id, query_params)
```

## 参数说明

| 字段名      | 必填 | 类型                        | 描述     |
| ----------- | ---- | --------------------------- | -------- |
| guild_id     | 是   | string                      | 频道 ID  |
| role_id  | 是   | string                        | 身份组 ID  |
| start_index  | 否   | string | 上一次回包中 next， 如果是第一次请求填 0，默认为 0 |
| limit  | 否   | number | 分页大小，1-400，默认是 1                                 |

## 返回说明

| 字段名   | 类型    | 描述         |
| -------- | ------- | ------------ |
| data       | [Member](#Member)  | 一组用户信息对象      |
| next | string  | 下一次请求的分页标识       |


## Member

| 字段名    | 类型          | 描述                                                                                         |
| --------- | ------------- | -------------------------------------------------------------------------------------------- |
| user      | [User](#user) | 用户的频道基础信息，只有成员相关接口中会填充此信息                                   |
| nick      | string        | 用户在频道内的昵称                                                                           |
| joined_at | string        | 用户加入频道的时间，是个 `ISO8601 timestamp` 字符串，例："2021-11-23T15:16:48+08:00"         |

## 返回示例

`data`：

```json
{
  "data": [
    {
      "user": {
        "id": "用户 ID",
        "username": "用户名",
        "avatar": "用户头像地址",
        "bot": false
      },
      "nick": "",
      "joined_at": "2021-11-23T15:16:48+08:00"
     }
   ]
  "next": "0"
}
```

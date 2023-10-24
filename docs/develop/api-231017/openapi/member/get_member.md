# 获取成员详情

## 接口

`GET /guilds/{guild_id}/members/{user_id}`

## 功能描述

用于获取 `guild_id` 指定的频道中 `user_id` 对应成员的详细信息。

## Content-Type

`application/json`

## 返回

返回[Member](model.md#member) 成员对象。

## 错误码

详见[错误码](../error/error.md)。

## 示例

请求数据包

```shell
GET /guilds/123456/members/112233
```

响应数据包

```json
{
  "user": {
    "id": "2823701233424295228",
    "username": "xxx",
    "avatar": "https://qqchannel-profile-1251316161.file.myqcloud.com/xxxxxxx",
    "bot": false,
    "union_openid": "",
    "union_user_account": ""
  },
  "nick": "",
  "roles": [
    "1"
  ],
  "joined_at": "2021-12-05T14:08:29+08:00"
}
```

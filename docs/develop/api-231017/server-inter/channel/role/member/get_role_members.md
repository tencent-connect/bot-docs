# 获取频道身份组成员列表

## 接口
```http
GET /guilds/{guild_id}/roles/{role_id}/members
```

## 功能描述
用于获取 `guild_id` 频道中指定`role_id`身份组下所有成员的详情列表，支持分页。

<PrivateDomain/>

## Content-Type
```http
application/json
```

## 参数
|字段名	|类型	|描述|
| ---- | ---- | ----- |
|start_index	|string	|将上一次回包中`next`填入， 如果是第一次请求填 0，默认为 0|
|limit	|uint32	|分页大小，1-400，默认是 1。成员较多的频道尽量使用较大的`limit`值，以减少请求数|

## 返回
|字段名	|类型	|描述|
| ---- | ---- | ----- |
|data	|[Member](model.md#member) 对象数组|	一组用户信息对象|
|next	|string	|下一次请求的分页标识|

## 有关返回结果的说明

每次返回的member数量与limit不一定完全相等。特定管理身份组下的成员可能存在一次性返回全部的情况

## 错误码

详见[错误码](../../../../openapi/error/error.md)。

## 示例

请求

```http
GET /guilds/123456/roles/4/members?limit=2
```

响应数据包
```json
{
  "data": [
    {
      "user": {
        "id": "xxx",
        "username": "xxx",
        "avatar": "xxx",
        "bot": false
      },
      "nick": "xxx",
      "joined_at": "2021-11-03T20:41:36+08:00"
    }
  ],
  "next": "0"
}
```

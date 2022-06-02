# 获取语音子频道在线成员列表 <Badge text="v2.9.5" />

用于获取 channelID 指定的语音子频道中，所有在线成员的详情列表。

<PrivateDomain/>

## 使用示例

```javascript
async function demo() {
  let { data } = await client.guildApi.guildVoiceMembers(channelID);
}
```

## 参数说明

| 字段名      | 必填 | 类型                        | 描述     |
| ----------- | ---- | --------------------------- | -------- |
| channelID     | 是   | string                      | 语音子频道 ID  |


## 返回说明

返回 [Member](#member) 对象。

## Member

| 字段名    | 类型          | 描述                                                                                         |
| --------- | ------------- | -------------------------------------------------------------------------------------------- |
| user      | [User](#user) | 用户的频道基础信息，只有成员相关接口中会填充此信息                                   |
| nick      | string        | 用户在频道内的昵称                                                                           |
| roles     | string[]      | 用户在频道内的身份组 ID，默认值可参考[DefaultRoleIDs](../guild/role_model.md#DefaultRoleIDs) |
| joined_at | string        | 用户加入频道的时间，是个 `ISO8601 timestamp` 字符串，例："2021-11-23T15:16:48+08:00"         |


查询的子频道不是语音子频道，返回的status code为400
```js
{
    "code": 13011,
    "message": "not a voice-channel"
}
```

## User

| 字段名   | 类型    | 描述         |
| -------- | ------- | ------------ |
| id       | string  | 用户 ID      |
| username | string  | 用户名       |
| avatar   | string  | 用户头像地址 |
| bot      | boolean | 是否是机器人 |

## 返回示例

`data`：

```js
[
    {
        "user": {
            "id": "14756834636912871346",
            "bot": false
        },
        "nick": "XXXXXX",
        "joined_at": "2022-04-22T11:20:52+08:00",
        "mute": false
    },
    {
        "user": {
            "id": "17125389050417448421",
            "bot": true
        },
        "nick": "",
        "joined_at": "2022-04-22T15:11:25+08:00",
        "mute": false
    }
]
```

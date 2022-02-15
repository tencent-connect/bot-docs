# 发送引用消息 <Badge text="v1.0.0" />

::: warning 注意

- 只支持引用机器人自己发送到的消息以及用户@机器人产生的消息。
- 发送成功之后，会触发一个创建消息的事件。

:::

## 使用示例

使用方式同[发送消息](./post_messages.md)，需注意参数[message_reference](#messagereference)的使用。

```javascript
async function demo() {
  let { data } = await client.messageApi.postMessage(channelID, message);
}
```

## 参数说明

| 参数      | 必填 | 类型                                | 说明       |
| --------- | ---- | ----------------------------------- | ---------- |
| channelID | 是   | string                              | 子频道 ID  |
| messsage  | 是   | [MessageToCreate](#messagetocreate) | 消息体结构 |

### MessageToCreate

| 字段名            | 类型                                             | 必填 | 描述                                                     |
| ----------------- | ------------------------------------------------ | ---- | -------------------------------------------------------- |
| content           | string                                           | 否   | 消息内容                                                 |
| embed             | [MessageEmbed](../model/message.md#messageembed) | 否   | embed 消息 ，可参考[消息模板](./message_template.md) |
| ark               | [MessageArk](../model/message.md#messageark)     | 否   | ark 消息 ，可参考 [发送模板消息](./post_ark_messages.md) |
| image             | string                                           | 否   | 图片 url 地址                                            |
| message_reference | [MessageReference](#messagereference)            | 是   | 引用消息配置                                             |

引用消息支持内嵌格式、消息模板及图片，设置相应参数即可。

## MessageReference

| 字段名                   | 类型    | 必填 | 描述                                                                                       |
| :----------------------- | :------ | :--- | :----------------------------------------------------------------------------------------- |
| message_id               | string  | 是   | 需要引用回复的消息 ID                                                                      |
| ignore_get_message_error | boolean | 否   | 是否忽略获取引用消息详情错误，默认否（如不忽略，当获取引用消息详情出错时，消息将不会发出） |

## 返回说明

返回[Message](#message) 对象。

### Message

| 字段名     | 类型              | 描述                                                                            |
| ---------- | ----------------- | ------------------------------------------------------------------------------- |
| id         | string            | 消息 ID                                                                         |
| channel_id | string            | 子频道 ID                                                                       |
| guild_id   | string            | 频道 ID                                                                         |
| content    | string            | 消息内容                                                                        |
| timestamp  | string            | 消息创建时间，是个 `iISO8601 timestamp` 字符串，例："2021-11-23T15:16:48+08:00" |
| author     | [User](#user)     | 消息创建者                                                                      |
| member     | [Member](#member) | 消息创建者的 member 信息                                                        |

### User

| 字段名   | 类型    | 描述         |
| -------- | ------- | ------------ |
| id       | string  | 用户 ID      |
| username | string  | 用户名       |
| bot      | boolean | 是否是机器人 |

### Member

| 字段名    | 类型     | 描述                                                                                 |
| --------- | -------- | ------------------------------------------------------------------------------------ |
| roles     | string[] | 用户在频道内的身份组 ID，默认值可参考[DefaultRoleIDs](#defaultroleids)               |
| joined_at | string   | 用户加入频道的时间，是个 `ISO8601 timestamp` 字符串，例："2021-11-23T15:16:48+08:00" |

### DefaultRoleIDs

系统默认生成下列身份组 ID。

| 身份组 ID 默认值 | 描述         |
| ---------------- | ------------ |
| 1                | 全体成员     |
| 2                | 管理员       |
| 4                | 群主/创建者  |
| 5                | 子频道管理员 |

## 返回示例

`data`:

```json
{
  "id": "xxxxxx",
  "channel_id": "xxxxxx",
  "guild_id": "xxxxxx",
  "content": "",
  "timestamp": "2021-05-13T14:45:45+08:00",
  "tts": false,
  "mention_everyone": false,
  "author": {
    "id": "xxxxxx",
    "username": "xxxxxx",
    "avatar": "",
    "bot": true
  },
  "pinned": false,
  "type": 0,
  "flags": 0
}
```

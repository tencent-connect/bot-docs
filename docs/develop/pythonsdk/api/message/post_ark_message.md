# 发送模板消息

::: warning 注意

- 要求操作人在该子频道具有`发送消息`和 `模板消息` 的权限。
- 调用前需要先申请消息模板，这一步会得到一个模板 id，在请求时填在 ark.template_id 上
- 发送成功之后，会触发一个创建消息的事件。
- 可用模板参考[可用模板](message_template.md)
- 如果发送的消息中包含链接（网页、图片、视频链接等），**需要提前在[机器人管理端](https://bot.q.qq.com/#/developer/developer-setting)报备**，操作流程：操作路径为：”开发设置“ -> ”消息 URL 配置“

:::

## 使用示例

需要关注`ark`字段的使用。

```python
import qqbot

token = qqbot.Token({appid}, {token})

msg_api = qqbot.MessageAPI(token, False)         
msg_api.post_message(channel_id, message_send_request)
```

## 参数说明

| 参数      | 必填 | 类型                                | 说明       |
| --------- | ---- | ----------------------------------- | ---------- |
| channelID | 是   | string                              | 子频道 ID  |
| message_send_request  | 是   | [MessageSendRequest](#MessageSendRequest) | 消息体结构 |

## MessageSendRequest

| 字段名  | 类型                          | 描述                                                                    |
| ------- | ----------------------------- | ----------------------------------------------------------------------- |
| content | string                        | 消息内容，文本内容，支持[内嵌格式](message_format.md)                   |
| embed   | [MessageEmbed](#messageembed) | embed 消息，一种特殊的 ark                                              |
| ark     | [MessageArk](#messageark)     | ark 消息                                                                |
| image   | string                        | 图片 url 地址                                                           |
| msg_id  | string                        | 要回复的消息 id。**带了 msg_id 视为被动回复消息，否则视为主动推送消息** |

## MessageEmbed

| 字段名      | 类型                                      | 描述                                                                           |
| ----------- | ----------------------------------------- | ------------------------------------------------------------------------------ |
| title       | string                                    | 标题                                                                           |
| description | string                                    | 描述                                                                           |
| prompt      | string                                    | 消息弹窗内容                                                                   |
| timestamp   | string                                    | 消息创建时间                                                                   |
| fields      | [MessageEmbedField[]](#messageembedfield) | 消息创建时间，是个 `ISO8601 timestamp` 字符串，例："2021-11-23T15:16:48+08:00" |

## MessageEmbedField

| 字段名 | 类型   | 描述   |
| ------ | ------ | ------ |
| name   | string | 字段名 |
| value  | string | 字段值 |

### 参数示例

假设模板如下，其中`#META_LIST#`类型为数组、`#META_URL#`类型为 `URL`、其他为文本。

```json
{
  "app": "com.tencent.miniapp",
  "view": "detail",
  "ver": "0.0.0.1",
  "desc": "#DESC#",
  "prompt": "[QQ小程序]#PROMPT#",
  "meta": {
    "detail": {
      "title": "#TITLE#",
      "desc": "#META_DESC#",
      "url": "#META_URL#",
      "list": "#META_LIST#"
    }
  }
}
```

请求体中的 ark 内容为

```json
{
  "ark": {
    "template_id": 1,
    "kv": [
      {
        "key": "#DESC#",
        "value": "机器人订阅消息"
      },
      {
        "key": "#PROMPT#",
        "value": "XX机器人"
      },
      {
        "key": "#TITLE#",
        "value": "XX机器人消息"
      },
      {
        "key": "#META_URL#",
        "value": "http://domain.com/"
      },
      {
        "key": "#META_LIST#",
        "obj": [
          {
            "obj_kv": [
              {
                "key": "name",
                "value": "aaa"
              },
              {
                "key": "age",
                "value": "3"
              }
            ]
          },
          {
            "obj_kv": [
              {
                "key": "name",
                "value": "bbb"
              },
              {
                "key": "age",
                "value": "4"
              }
            ]
          }
        ]
      }
    ]
  }
}
```

则实际下发的 json 为

```json
{
  "app": "com.tencent.miniapp",
  "view": "detail",
  "ver": "0.0.0.1",
  "desc": "机器人订阅消息",
  "prompt": "[QQ小程序]XX机器人",
  "meta": {
    "detail": {
      "title": "XX机器人消息",
      "url": "http://domain.com/",
      "list": [
        { "name": "aaa", "age": "3" },
        { "name": "bbb", "age": "4" }
      ]
    }
  }
}
```

## 返回说明

返回[Message](#message) 对象。

### Message

| 字段名           | 类型              | 描述                                                                            |
| ---------------- | ----------------- | ------------------------------------------------------------------------------- |
| id               | string            | 消息 id                                                                         |
| channel_id       | string            | 子频道 ID                                                                       |
| guild_id         | string            | 频道 ID                                                                         |
| content          | string            | 消息内容                                                                        |
| timestamp        | string            | 消息创建时间，是个 `iISO8601 timestamp` 字符串，例："2021-11-23T15:16:48+08:00" |
| edited_timestamp | string            | 消息编辑时间，是个 `iISO8601 timestamp` 字符串，例："2021-11-23T15:16:48+08:00" |
| mention_everyone | boolean           | 是否是@全员消息                                                                 |
| author           | [User](#user)     | 消息创建者                                                                      |
| member           | [Member](#member) | 消息创建者的 member 信息                                                        |

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

```json
{
  "id": "101234567890abcdef",
  "channel_id": "10001",
  "guild_id": "6400000001",
  "content": "<@!1234>hello world",
  "timestamp": "2021-05-13T14:45:45+08:00",
  "tts": false,
  "mention_everyone": false,
  "author": {
    "id": "12345",
    "username": "abc",
    "avatar": "",
    "bot": true
  },
  "pinned": false,
  "type": 0,
  "flags": 0
}
```

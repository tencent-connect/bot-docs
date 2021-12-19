# 发送模板消息

## 功能描述

- 要求操作人在该子频道具有`发送消息`和 `模板消息` 的权限。
- 调用前需要先申请消息模板，这一步会得到一个模板 id，在请求时填在 ark.template_id 上
- 发送成功之后，会触发一个创建消息的事件。
- 可用模板参考[可用模板](message_template.md)

## 使用示例

同[发送消息](post_messages.md#使用示例)，关注`ark`字段

## 参数说明

| 参数      | 必填 | 类型                                        | 说明       |
| --------- | ---- | ------------------------------------------- | ---------- |
| channelID | 是   | string                                      | 子频道 id  |
| messsage  | 是   | [MessageToCreate](model.md#messagetocreate) | 消息体结构 |

### 参数示例

假设模板如下，其中#META_LIST#类型为数组、#META_URL#类型为 URL 其他为文本

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
            "list": #META_LIST#
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

返回[Message](model.md#message) 对象

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

# 发送模板消息

### 接口
`POST /channels/{channel_id}/messages`

### 功能描述
- 要求操作人在该子频道具有`发送消息`和 `模板消息` 的权限。
- 调用前需要先申请消息模板，这一步会得到一个模板id，在请求时填在ark.template_id上
- 发送成功之后，会触发一个创建消息的事件。
- 可用模板参考[可用模板](message_template.md)

### Content-Type
只支持`application/json`

### 参数

| 字段名 | 类型                              | 描述     |
| ------ | --------------------------------- | -------- |
| ark    | [MessageArk](model.md#messageark) | ark 消息 |

### 返回
[Message](model.md#message) 对象

### 具体错误

[错误码](../error/error.md)

### 示例

假设模板如下，其中#META_LIST#类型为数组、#META_URL#类型为URL其他为文本
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
            "list":#META_LIST#
        }
    }
}
```

REQ BODY
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
则实际下发的json为
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
            "list":[
                {"name":"aaa","age":"3"},
                {"name":"bbb","age":"4"}
            ]
        }
    }
}
```

返回包
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



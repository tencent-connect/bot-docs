# embed消息

### 样式
![embed](./embed.jpg)

### 功能描述
- Embed是消息支持的一种特殊的格式，支持部分富文本格式

### Content-Type
`application/json`

### 参数
| 字段名 | 类型                                  | 描述           |
| ------ | ------------------------------------- | -------------- |
| embed  | [MessageEmbed](../model.md#messageembed) | embed 消息详情 |

- 其中 embed.thumbnail 为选填，没有缩略图的可以不填
- embed.fields.name 为文本

### 返回
[Message](../model.md#message) 对象

### 具体错误
[错误码](../error/error.md)

### 示例
REQ BODY
```json
{
  "embed": {
    "title": "标题",
    "prompt": "消息通知",
    "thumbnail": {
      "url": "https://pub.idqqimg.com/pc/misc/files/20190820/2f4e70ae3355ece23d161cf5334d4fc1jzjfmtep.png"
    },
    "fields": [
      {
        "name": "当前等级：黄金"
      },
      {
        "name": "之前等级：白银"
      },
      {
        "name": "😁继续努力"
      }
    ]
  }
}
```

返回包
```json
{
    "id": "101234567890abcdef",
    "channel_id": "10001",
    "guild_id": "6400000001",
    "timestamp": "2021-12-07T15:24:54+08:00",
    "tts": false,
    "mention_everyone": false,
    "author": {
        "id": "12345",
        "username": "abc",
        "avatar": "",
        "bot": true
    },
    "embeds": [
        {
            "title": "标题",
            "description": "",
            "thumbnail": {
                "url": "https://pub.idqqimg.com/pc/misc/files/20190820/2f4e70ae3355ece23d161cf5334d4fc1jzjfmtep.png"
            },
            "fields": [
                {
                    "name": "当前等级：黄金",
                    "value": ""
                },
                {
                    "name": "之前等级：白银",
                    "value": ""
                },
                {
                    "name": "😁继续努力",
                    "value": ""
                }
            ]
        }
    ],
    "pinned": false,
    "type": 0,
    "flags": 0
}
```



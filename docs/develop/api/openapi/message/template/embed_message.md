# embed 消息

### 样式

![embed](./embed.jpg)

### Content-Type

`application/json`

### 参数

| 字段名 | 类型                                     | 描述           |
| ------ | ---------------------------------------- | -------------- |
| embed  | [MessageEmbed](../model.md#messageembed) | embed 消息详情 |

- 其中 embed.thumbnail 为选填，没有缩略图的可以不填。
- embed.fields.name 为文本。

### 返回

返回[Message](../model.md#message) 对象。

### 错误码

详见[错误码](../../error/error.md)。

### 示例

请求数据包

```json
{
  "embed": {
    "title": "标题",
    "prompt": "消息通知",
    "thumbnail": {
      "url": "xxxxxx"
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
  "id": "xxxxxx",
  "channel_id": "xxxxxx",
  "guild_id": "xxxxxx",
  "timestamp": "2021-12-07T15:24:54+08:00",
  "tts": false,
  "mention_everyone": false,
  "author": {
    "id": "xxxxxx",
    "username": "abc",
    "avatar": "",
    "bot": true
  },
  "embeds": [
    {
      "title": "标题",
      "description": "",
      "thumbnail": {
        "url": "xxxxxx"
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

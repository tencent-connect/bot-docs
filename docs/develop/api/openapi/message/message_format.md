# 内嵌格式

### 功能描述

利用 `content` 字段发送内嵌格式的消息。

- 内嵌格式仅在 `content` 中会生效，在 `Ark` 和 `Embed` 中不生效。

### 支持的格式

| 类型    | 结构          | 描述                                                                  | 示例             |
| :------ | :------------ | :-------------------------------------------------------------------- | :--------------- |
| @用户   | <@user_id>    | 解析为 `@用户` 标签                                                   | <@1234000000001> |
| @所有人 | @everyone     | 解析为 `@所有人` 标签，需要机器人拥有发送 `@所有人` 消息的权限        | @everyone        |
| #子频道 | <#channel_id> | 解析为 `#子频道` 标签，点击可以跳转至子频道，仅支持当前频道内的子频道 | <#12345>         |

### 示例

请求数据包

```json
{
    "content":"<@!1234>hello world}
}
```

响应数据包

```json
{
  "id": "xxxxxx",
  "channel_id": "xxxxxx",
  "guild_id": "xxxxxx",
  "content": "<@!1234>hello world",
  "timestamp": "2021-05-13T14:45:45+08:00",
  "tts": false,
  "mention_everyone": false,
  "author": {
    "id": "xxxxxx",
    "username": "abc",
    "avatar": "",
    "bot": true
  },
  "embeds": [{}],
  "pinned": false,
  "type": 0,
  "flags": 0
}
```

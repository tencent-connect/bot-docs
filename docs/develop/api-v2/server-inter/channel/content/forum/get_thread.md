# 获取帖子详情

## 接口

```http
GET /channels/{channel_id}/threads/{thread_id}
```

## 功能描述

- 该接口用于获取子频道下的帖子详情。

<PrivateDomain/>

## Content-Type

```http
application/json
```

## 返回

| 字段名             | 类型   | 描述                                                                                   |
| ------------------ | ------ | -------------------------------------------------------------------------------------- |
| thread | [ThreadInfo](model.md#ThreadInfo) | 帖子详情对象（返回值里面的content字段，可参照[RichText](model.md#RichText)结构） |

## 错误码

详见[错误码](../../../../openapi/error/error.md)。

## 示例
```json
{
  "thread":{
    "guild_id":"75827011639035987",
    "channel_id":"2324603",
    "author_id":"144115218680332809",
    "thread_info":{
      "thread_id":"B_79051362477c03001441152186803328090X60-1645413753",
      "title":"帖子标题",
      "content":"{\"paragraphs\":[{\"elems\":[{\"text\":{\"text\":\"发送消息 | QQ机器人文档\"},\"type\":1}],\"props\":{}},{\"elems\":[{\"text\":{\"text\":\"• 主动消息：发送消息时，未填充msg_id 字段的消息。\"},\"type\":1}],\"props\":{}}]}",
      "date_time":"2022-02-21T11:22:33+08:00"
    }
  }
}
```

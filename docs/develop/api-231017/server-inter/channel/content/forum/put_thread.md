# 发表帖子

## 接口

`PUT /channels/{channel_id}/threads`

## 功能描述

- 创建成功后，返回创建成功的任务ID。

<PrivateDomain/>

## Content-Type

`application/json`

## 参数

| 字段名             | 类型   | 描述                                                                                   |
| ------------------ | ------ | -------------------------------------------------------------------------------------- |
| title   | string | 帖子标题 |
| content | string | 帖子内容 |
| format  | uint32 | [帖子文本格式](#Format) |

### Format

- 帖子文本格式

| 字段名            | 值 | 描述 |
|------------------|----|----|
| FORMAT_TEXT     | 1 | 普通文本  |
| FORMAT_HTML     | 2 | HTML     |
| FORMAT_MARKDOWN | 3 | Markdown |
| FORMAT_JSON     | 4 | JSON（content参数可参照[RichText](#RichText)结构）|

## 错误码

详见[错误码](../../../../openapi/error/error.md)。

## 返回

| 字段名             | 类型   | 描述                                                                                   |
| ------------------ | ------ | -------------------------------------------------------------------------------------- |
| task_id | string | 帖子任务ID |
| create_time | string | 发帖时间戳，单位：秒 |

## 示例

请求数据包

```json
{
    "title": "title",
    "content": "<html lang=\"en-US\"><body><a href=\"https://bot.q.qq.com/wiki\" title=\"QQ机器人文档Title\">QQ机器人文档</a>\n<ul><li>主动消息：发送消息时，未填msg_id字段的消息。</li><li>被动消息：发送消息时，填充了msg_id字段的消息。</li></ul></body></html>",
    "format": 2
}
```

响应数据包

```json
{
    "task_id": "1645413752912602306",
    "create_time": "1645503180"
}
```

# 消息对象(Message)

## Message

| 字段名           | 类型                                      | 描述                                                                            |
| ---------------- | ----------------------------------------- | ------------------------------------------------------------------------------- |
| id               | string                                    | 消息 id                                                                         |
| channel_id       | string                                    | 子频道 ID                                                                       |
| guild_id         | string                                    | 频道 ID                                                                         |
| content          | string                                    | 消息内容                                                                        |
| timestamp        | string                                    | 消息创建时间，是个 `iISO8601 timestamp` 字符串，例："2021-11-23T15:16:48+08:00" |
| edited_timestamp | string                                    | 消息编辑时间，是个 `iISO8601 timestamp` 字符串，例："2021-11-23T15:16:48+08:00" |
| mention_everyone | boolean                                   | 是否是@全员消息                                                                 |
| author           | [User](/user#user)                | 消息创建者                                                                      |
| attachments      | [MessageAttachment[]](#messageattachment) | 附件                                                                            |
| embeds           | [MessageEmbed[]](#messageembed)           | embed                                                                           |
| mentions         | [User](/user#user)                | 消息中@的人                                                                     |
| member           | [Member](d#member)       | 消息创建者的 member 信息                                                        |
| ark              | [MessageArk](#messageark)                 | ark 消息                                                                        |

## MessageToCreate

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
| timestamp   | string                                    | 消息创建时间，是个 `ISO8601 timestamp` 字符串，例："2021-11-23T15:16:48+08:00" |
| fields      | [MessageEmbedField[]](#messageembedfield) | 消息体                                                                         |

## MessageEmbedField

| 字段名 | 类型   | 描述   |
| ------ | ------ | ------ |
| name   | string | 字段名 |
| value  | string | 字段值 |

## MessageAttachment

| 字段名 | 类型   | 描述     |
| ------ | ------ | -------- |
| url    | string | 下载地址 |

## MessageArk

| 字段名      | 类型                            | 描述                      |
| :---------- | :------------------------------ | :------------------------ |
| template_id | number                          | ark 模板 id（需要先申请） |
| kv          | [MessageAkrKv[]](#messagearkkv) | kv 值列表                 |

## MessageArkKv

| 字段名 | 类型                              | 描述               |
| :----- | :-------------------------------- | :----------------- |
| key    | string                            | key                |
| value  | string                            | value              |
| obj    | [MessageArkObj[]](#messagearkobj) | ark obj 类型的列表 |

## MessageArkObj

| 字段名 | 类型                               | 描述           |
| :----- | :--------------------------------- | :------------- |
| obj_kv | [MessageArkObjKv[]](#messageobjkv) | ark objkv 列表 |

## MessageArkObjKv

| 字段名 | 类型   | 描述  |
| :----- | :----- | :---- |
| key    | string | key   |
| value  | string | value |

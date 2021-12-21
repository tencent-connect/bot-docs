# 消息对象(Message)

### Message

| 字段名           | 类型                                             | 描述                   |
| ---------------- | ------------------------------------------------ | ---------------------- |
| id               | string                                           | 消息 id                |
| channel_id       | string                                           | 子频道 id              |
| guild_id         | string                                           | 频道 id                |
| content          | string                                           | 消息内容               |
| timestamp        | ISO8601 timestamp                                | 消息创建时间           |
| edited_timestamp | ISO8601 timestamp                                | 消息编辑时间           |
| mention_everyone | bool                                             | 是否是@全员消息        |
| author           | [User](../user/model.md#user) 对象               | 消息创建者             |
| attachments      | [MessageAttachment](#messageattachment) 对象数组 | 附件                   |
| embeds           | [MessageEmbed](#messageembed) 对象数组           | embed                  |
| mentions         | [User](../user/model.md#user) 对象数组           | 消息中@的人            |
| member           | [Member](../member/model.md#member) 对象         | 消息创建者的member信息 |
| ark              | [MessageArk](#messageark) ark消息对象            | ark消息                |

### MessageEmbed
| 字段名    | 类型                                                 | 描述         |
| --------- | ---------------------------------------------------- | ------------ |
| title     | string                                               | 标题         |
| prompt    | string                                               | 消息弹窗内容 |
| thumbnail | [MessageEmbedThumbnail](#messageembedthumbnail) 对象 | 缩略图       |
| fields    | [MessageEmbedField](#messageembedfield) 对象数组     | 消息创建时间 |

### MessageEmbedThumbnail
| 字段名 | 类型   | 描述     |
| ------ | ------ | -------- |
| url    | string | 图片地址 |

### MessageEmbedField
| 字段名 | 类型   | 描述   |
| ------ | ------ | ------ |
| name   | string | 字段名 |

### MessageAttachment
| 字段名 | 类型   | 描述     |
| ------ | ------ | -------- |
| url    | string | 下载地址 |

### MessageArk
| 字段名      | 类型                                    | 描述                    |
| :---------- | :-------------------------------------- | :---------------------- |
| template_id | int                                     | ark模板id（需要先申请） |
| kv          | [MessageAkrKv](#messagearkkv) arkkv数组 | kv值列表                |

### MessageArkKv
| 字段名 | 类型                                             | 描述              |
| :----- | :----------------------------------------------- | :---------------- |
| key    | string                                           | key               |
| value  | string                                           | value             |
| obj    | [MessageArkObj](#messagearkobj) arkobj类型的数组 | ark obj类型的列表 |

### MessageArkObj
| 字段名 | 类型                                             | 描述          |
| :----- | :----------------------------------------------- | :------------ |
| obj_kv | [MessageArkObjKv](#messageobjkv) objkv类型的数组 | ark objkv列表 |

### MessageArkObjKv
| 字段名 | 类型   | 描述  |
| :----- | :----- | :---- |
| key    | string | key   |
| value  | string | value |

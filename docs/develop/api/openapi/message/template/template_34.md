# 34 大图模板

### 样式

![34](./34.png)

模板 id=34。

### 模板格式

```json
{
  "app": "com.tencent.miniapp_01",
  "view": "view_8C8E89B49BE609866298ADDFF2DBABA4",
  "ver": "1.0.1.12",
  "desc": "#DESC#",
  "prompt": "#PROMPT#",
  "meta": {
    "detail_1": {
      "title": "#METATITLE#",
      "desc": "#METADESC#",
      "icon": "#METAICON#",
      "preview": "#METAPREVIEW#",
      "url": "#METAURL#"
    }
  }
}
```

### 字段描述

| 字段名        | 类型   | 描述     |
| :------------ | :----- | :------- |
| #DESC#        | string | 描述     |
| #PROMPT#      | string | 提示消息 |
| #METATITLE#   | string | 标题     |
| #METADESC#    | string | 描述     |
| #METAICON#    | string | 小图标   |
| #METAPREVIEW# | string | 大图     |
| #METAURL#     | string | 跳转链接 |

#### 请求示例

```json
{
  "ark": {
    "template_id": 34,
    "kv": [
      {
        "key": "#DESC#",
        "value": "descaaaaaa"
      },
      {
        "key": "#PROMPT#",
        "value": "promptaaaa"
      },
      {
        "key": "#METATITLE#",
        "value": "metatitle"
      },
      {
        "key": "#METADESC#",
        "value": "metadesc"
      },
      {
        "key": "#METAICON#",
        "value": "https://tangram-1251316161.file.myqcloud.com/files/20211014/bfd7d02235e52d60b05a630ac9ef8bcc.png"
      },
      {
        "key": "#METAPREVIEW#",
        "value": "https://tangram-1251316161.file.myqcloud.com/files/20211014/bfd7d02235e52d60b05a630ac9ef8bcc.png"
      },
      {
        "key": "#METAURL#",
        "value": "https://qq.com"
      }
    ]
  }
}
```

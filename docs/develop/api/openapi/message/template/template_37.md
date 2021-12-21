# 37 大图模板

### 样式
![37](./37.png)

模板id=37

### 模板格式
```json
{
  "app": "com.tencent.imagetextbot",
  "view": "index",
  "ver": "1.0.0.11",
  "prompt": "#PROMPT#",
  "meta": {
        "robot": {
            "title":"#METATITLE#",
            "subtitle":"#METASUBTITLE#",
            "cover":"#METACOVER#",
            "jump_url":"#METAURL#"
        }
  }
}
```
### 字段描述
| 字段名         | 类型   | 描述                 |
| :------------- | :----- | :------------------- |
| #PROMPT#       | string | 提示消息             |
| #METATITLE#    | string | 标题                 |
| #METASUBTITLE# | string | 子标题               |
| #METACOVER#    | string | 大图，尺寸为 975*540 |
| #METAURL#      | string | 跳转链接             |


#### 请求示例
```json
{
  "ark": {
    "template_id": 37,
    "kv": [
      {
        "key": "#PROMPT#",
        "value": "通知提醒"
      },
      {
        "key": "#METATITLE#",
        "value": "标题"
      },
      {
        "key": "#METASUBTITLE#",
        "value": "子标题"
      },
      {
        "key": "#METACOVER#",
        "value": "https://vfiles.gtimg.cn/vupload/20211029/bf0ed01635493790634.jpg"
      },
      {
        "key": "#METAURL#",
        "value": "https://qq.com"
      }
    ]
  }
}
```


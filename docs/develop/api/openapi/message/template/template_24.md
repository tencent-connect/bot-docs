# 24 文本+缩略图模板

### 样式
![24](./24.png)

模板id=24

### 模板格式
```json
{
    "app": "com.tencent.channelrobot.smallpic",
    "view": "albumAddPic",
    "ver": "0.0.0.1",
    "desc": "#DESC#",
    "prompt": "[QQ小程序]#PROMPT#",
    "meta": {
        "detail": {
            "title": "#TITLE#",
            "desc": "#METADESC#",
            "img": "#IMG#",
            "link": "#LINK#",
            "subTitle": "#SUBTITLE#"
        }
    }
}
```
### 字段描述
| 字段名     | 类型   | 描述     |
| :--------- | :----- | :------- |
| #DESC#     | string | 描述     |
| #PROMPT#   | string | 提示文本 |
| #TITLE#    | string | 标题     |
| #METADESC# | string | 详情描述 |
| #IMG#      | string | 图片链接 |
| #LINK#     | string | 跳转链接 |
| #SUBTITLE# | string | 来源     |

#### 请求示例
```json
{
  "ark": {
    "template_id": 24,
    "kv": [
      {
        "key": "#DESC#",
        "value": "描述描述描放假大方了大家反垄断撒娇两款发动机临时卡封疆大吏撒酒疯；里导数据阿弗莱克的撒娇；廊坊述"
      },
      {
        "key": "#PROMPT#",
        "value": "通知信息xxxxx"
      },
      {
        "key": "#TITLE#",
        "value": "标题fjd;lsajfldjsalkfjdkw封疆大吏撒娇锋利的撒娇；付了定金撒标题标题标题标题fjkdlajfldjal;fd放大了发动机上来空"
      },
      {
        "key": "#METADESC#",
        "value": "Meta描述描述描述风好大换热器继往开来积分考虑到；安静了；了；防静电；来撒会今日而我却哦iopqwfjldsa"
      },
      {
        "key": "#IMG#",
        "value": "https://pub.idqqimg.com/pc/misc/files/20190820/2f4e70ae3355ece23d161cf5334d4fc1jzjfmtep.png"
      },
      {
        "key": "#LINK#",
        "value": "https://qq.com"
      },
      {
        "key": "#SUBTITLE#",
        "value": "子标题"
      }
    ]
  }
}
```


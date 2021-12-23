# 消息模板

为了丰富消息内容，SDK 提供了几种消息模板。

::: warning 注意

- 发送消息时所有字段均使用`字符串类型`。
- 如果发送的消息中包含链接（网页、图片、视频链接等），**需要提前在[机器人管理端](https://bot.q.qq.com/#/developer/developer-setting)报备**，操作流程：操作路径为：”开发设置“ -> ”消息 URL 配置“。

:::

## 可用模板

- [链接+文本列表模板](#链接、文本列表模板)
- [文本+缩略图模板](#文本、缩略图模板)
- [大图模板](#大图模板34)

## 链接、文本列表模板

### 样式(id=23)

<img :src="$withBase('/images/node-sdk/msg-tpl-23.png')" alt="接入流程">

### 模板格式

```json
{
  "app": "com.tencent.channel.robot",
  "view": "albumAddPic",
  "ver": "0.0.0.1",
  "desc": "#DESC#",
  "prompt": "[QQ小程序]#PROMPT#",
  "meta": {
    "detail": {
      "list": "#LIST#"
    }
  }
}
```

### 字段描述

| 字段名   | 类型   | 描述       |
| :------- | :----- | :--------- |
| #DESC#   | string | 描述       |
| #PROMPT# | string | 提示消息   |
| #LIST#   | array  | #LIST#数组 |

### LIST 结构

| 字段名 | 类型   | 描述                                                           |
| :----- | :----- | :------------------------------------------------------------- |
| desc   | string | 文本内容                                                       |
| link   | string | 链接，需要提前报备，如果不填就显示为文本，如果填了就显示为链接 |

#### 请求示例

```json
{
  "ark": {
    "template_id": 23,
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
        "key": "#LIST#",
        "obj": [
          {
            "obj_kv": [
              {
                "key": "desc",
                "value": "需求标题：UI问题解决"
              }
            ]
          },
          {
            "obj_kv": [
              {
                "key": "desc",
                "value": "当前状态\"体验中\"点击下列动作直接扭转状态到："
              }
            ]
          },
          {
            "obj_kv": [
              {
                "key": "desc",
                "value": "已评审"
              },
              {
                "key": "link",
                "value": "https://qun.qq.com"
              }
            ]
          },
          {
            "obj_kv": [
              {
                "key": "desc",
                "value": "已排期"
              },
              {
                "key": "link",
                "value": "https://qun.qq.com"
              }
            ]
          },
          {
            "obj_kv": [
              {
                "key": "desc",
                "value": "开发中"
              },
              {
                "key": "link",
                "value": "https://qun.qq.com"
              }
            ]
          },
          {
            "obj_kv": [
              {
                "key": "desc",
                "value": "增量测试中"
              },
              {
                "key": "link",
                "value": "https://qun.qq.com"
              }
            ]
          },
          {
            "obj_kv": [
              {
                "key": "desc",
                "value": "请关注"
              }
            ]
          }
        ]
      }
    ]
  }
}
```

## 文本、缩略图模板

### 样式(id=24)

<img :src="$withBase('/images/node-sdk/msg-tpl-24.png')" alt="接入流程">

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

## 大图模板 34

### 样式(id=34)

<img :src="$withBase('/images/node-sdk/msg-tpl-34.png')" alt="接入流程">

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

## 大图模板 37

### 样式(id=37)

<img :src="$withBase('/images/node-sdk/msg-tpl-37.png')" alt="接入流程">

### 模板格式

```json
{
  "app": "com.tencent.imagetextbot",
  "view": "index",
  "ver": "1.0.0.11",
  "prompt": "#PROMPT#",
  "meta": {
    "robot": {
      "title": "#METATITLE#",
      "subtitle": "#METASUBTITLE#",
      "cover": "#METACOVER#",
      "jump_url": "#METAURL#"
    }
  }
}
```

### 字段描述

| 字段名         | 类型   | 描述                  |
| :------------- | :----- | :-------------------- |
| #PROMPT#       | string | 提示消息              |
| #METATITLE#    | string | 标题                  |
| #METASUBTITLE# | string | 子标题                |
| #METACOVER#    | string | 大图，尺寸为 975\*540 |
| #METAURL#      | string | 跳转链接              |

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

# 消息类型(10)

## ✅文本

| | **单聊** | **群聊** | **文字子频道** | **频道私信** |
| --- | --- | --- | --- | --- |
| 机器人接收 | 支持 | 支持 | 支持 | 支持 |
| 机器人发送 | 支持 | 支持 | 支持 | 支持 |


## ⚠️图文

|  | **单聊** | **群聊** | **文字子频道** | **频道私信** |
| --- | --- | --- | --- | --- |
| 机器人接收 | 支持 | 支持 | 支持 | 支持 |
| 机器人发送 | 近期支持 | 近期支持 | 支持 | 支持 |


## ⚠️表情

内测中，近期支持

## ✅图片

|  | **单聊** | **群聊** | **文字子频道** | **频道私信** |
| --- | --- | --- | --- | --- |
| 机器人接收 | 支持 | - | - | 支持 |
| 机器人发送 | 支持 | 支持 | 支持 | 支持 |

## ✅视频

|  | **单聊** | **群聊** | **文字子频道** | **频道私信** |
| --- | --- | --- | --- | --- |
| 机器人接收 | 支持 | - | - | 支持 |
| 机器人发送 | 支持 | 支持 | 支持 | 支持 |

## ✅语音

|  | **单聊** | **群聊** | **文字子频道** | **频道私信** |
| --- | --- | --- | --- | --- |
| 机器人接收 | 支持 | - | - | - |
| 机器人发送 | 支持 | 支持 | - | - |

## ✅文件

目前接收文件仅支持，pdf、doc、txt 格式

|  | **单聊** | **群聊** | **文字子频道** | **频道私信** |
| --- | --- | --- | --- | --- |
| 机器人接收 | 支持 | - | - | - |
| 机器人发送 | 未开放 | 未开放 | - | - |

## ✅Embed

|  | **单聊** | **群聊** | **文字子频道** | **频道私信** |
| --- | --- | --- | --- | --- |
| 机器人接收 | - | - | - | - |
| 机器人发送 | 未开放 | 未开放 | 支持 | 支持 |

### 样式

<img :src="$withBotBase('/images/api-231017/message-embed.jpg')" alt="embed">

### 数据结构与协议

#### Content-Type

`application/json`

#### 参数

| 字段名 | 类型                                     | 描述           |
| ------ | ---------------------------------------- | -------------- |
| embed  | [MessageEmbed](./template/model.md#messageembed) | embed 消息详情 |

- 其中 embed.thumbnail 为选填，没有缩略图的可以不填。
- embed.fields.name 为文本。

#### 返回

返回[Message](./template/model.md#message)对象。

#### 错误码

详见[错误码](../../gateway/error/error.md)。

#### 示例

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
      "prompt": "xxxx",
      "description": "",
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
  ],
  "pinned": false,
  "type": 0,
  "flags": 0
}
```


## ✅ARK

> 部分 ARK 需要内邀开通

|  | **单聊** | **群聊** | **文字子频道** | **频道私信** |
| --- | --- | --- | --- | --- |
| 机器人接收 | | | | |
| 机器人发送 | 支持 | 支持 | 支持 | 支持 |

### 发送方式

选择合适的 ARK 模版发送，模版的有预设变量，变量类型可以是 字符串、数组、URL等。

```
// 模版CASE，其中#META_LIST#类型为数组、#META_URL#类型为 URL 其他为文本
{
  "app": "com.tencent.miniapp",
  "view": "detail",
  "ver": "0.0.0.1",
  "desc": "#DESC#",
  "prompt": "[QQ小程序]#PROMPT#",
  "meta": {
    "detail": {
      "title": "#TITLE#",
      "desc": "#META_DESC#",
      "url": "#META_URL#",
      "list": "#META_LIST#"
    }
  }
}

// 发送CASE
{
  "ark": {
    "template_id": 1,
    "kv": [
      {
        "key": "#DESC#",
        "value": "机器人订阅消息"
      },
      {
        "key": "#PROMPT#",
        "value": "XX机器人"
      },
      {
        "key": "#TITLE#",
        "value": "XX机器人消息"
      },
      {
        "key": "#META_URL#",
        "value": "http://domain.com/"
      },
      {
        "key": "#META_LIST#",
        "obj": [
          {
            "obj_kv": [
              {
                "key": "name",
                "value": "aaa"
              },
              {
                "key": "age",
                "value": "3"
              }
            ]
          },
          {
            "obj_kv": [
              {
                "key": "name",
                "value": "bbb"
              },
              {
                "key": "age",
                "value": "4"
              }
            ]
          }
        ]
      }
    ]
  }
}
```

### 数据结构与协议

消息发送接口 ark 字段值是一个 json object，具体字段如下：

| **属性** | **类型** | **必填** | **说明** |
| --- | --- | --- | --- |
| template\_id | int | 是 | 模版 id，管理端可获得或内邀申请获得 |
| kv | array | 是 | {key: xxx, value: xxx}，模版内变量与填充值的kv映射 |

特别：当预设变量是数组时，kv数组元素的结构调整为：

```
// 举个例子
{
    "key: xxx", 
    "obj": [
        {"obj_kv":[{"key": "xxx", "value": "xxx"}, {"key": "xxx", "value": "xxx"}]}, //一个 obj_kv 可以多个数组元素
        {"obj_kv":[{"key": "xxx", "value": "xxx"}, {"key": "xxx", "value": "xxx"}]}
        // 可以多个 obj_kv
    ]
}

```

## ✅Markdown

目前需要内邀开通

|  | **单聊** | **群聊** | **文字子频道** | **频道私信** |
| --- | --- | --- | --- | --- |
| 机器人接收 | | | | |
| 机器人发送 | 支持 | 支持 | 支持 | 支持 |

### 支持格式

#### 标题

```
#一号标题
##二号标题
正文
```

#### 文字样式

```
**加粗**
__下划线加粗__
_斜体_
*星号斜体*
***加粗斜体***
~~删除线~~

```

#### 链接

```
欢迎来到：[🔗腾讯网](https://www.qq.com)  
文档可以访问<https://doc.qq.com>
```

#### 图片

```
![text #208px #320px](https://resource5-1255303497.cos.ap-guangzhou.myqcloud.com/abcmouse_word_watch/markdown/building.png)
```

#### 有序列表

```
### 有序列表
1. 新人降落桃源岛的欢迎仪式
2. 阳光准则助力建设有温度的频道
3. 岛民分享吹水纳凉
```

#### 无序列表

```
### 无序列表
- 新人降落桃源岛的欢迎仪式
- 阳光准则助力建设有温度的频道
- 岛民分享吹水纳凉
```

#### 列表嵌套

```
#有序列表标题
1. 嵌套一层
    - 列表前是普通文本，则需要在列表前用空行隔开，否则无法识别
    - 如果是段落标签比如标题，则无需用空行隔开
2. 嵌套二层
    1. 我是有序列表，二级列表前面需要空4个空格
    2. 无序列表和有序列表可以相互嵌套，但是不建议无限制嵌套。
```

#### 块引用

```
> 青青子衿，悠悠我心，但为君故，沉吟至今
> 四月维夏，六月徂暑。先祖匪人，胡宁忍予
> 秋日凄凄，百卉具腓。乱离瘼矣，爰其适归？
诗经《小雅》
```

#### 水平分割线

```
这是段落1
***
这是段落2
```
#### 换多行
```
第一行

第二行

\u200B
\u200B
第三行
```

### 发送方式

自定义 markdown 消息： 【内邀使用】

```
{
  "markdown": {
    "content": "# 标题 \n## 简介很开心 \n内容[🔗腾讯](https://www.qq.com)"
  }
}
```

消息模版：QQ Bot 提供 markdown 消息模版能力。
```
// 模版例子

#{{.title}}

![img#618px #249px]({{.image}})

*{{.para1}}
*{{.para2}}

## {{.desc}}

{{.content}}[{{.link_introduction}}]({{.link}})

// 发送case
{
	"markdown": {
		"custom_template_id": "101993071_1658748972",
		"params": [{
				"key": "title",
				"values": ["标题"]
			},
			{
				"key": "image",
				"values": [
					"https://resource5-1255303497.cos.ap-guangzhou.myqcloud.com/abcmouse_word_watch/other/mkd_img.png"
				]
			},
			{
				"key": "para1",
				"values": ["段落1"]
			},
			{
				"key": "para2",
				"values": ["段落2"]
			},
			{
				"key": "desc",
				"values": ["简介"]
			},
			{
				"key": "content",
				"values": ["在这个子频道非常开心"]
			},
			{
				"key": "link_introduction",
				"values": ["链接介绍"]
			},
			{
				"key": "link",
				"values": ["https://www.qq.com"]
			}
		]
	}
}
```

### 数据结构与协议

消息发送 markdown 字段值是一个 json object，具体字段如下：

| **属性** | **类型** | **必填** | **说明** |
| --- | --- | --- | --- |
| content | string | 否 | 原生 markdown 文本内容 |
| custom_template_id | string | 否 | markdown 模版id，申请模版后获得 |
| params | Array | 否 | {key: xxx, values: xxx}，模版内变量与填充值的kv映射 |

# ARK 消息

::: tip 说明
<!-- 部分 ARK 需要内邀开通 -->
主动消息 ARK：默认开放可用。
被动消息 ARK：达到准入条件的开发者，向平台运营申请后获得权限。
:::

|  | **单聊** | **群聊** | **文字子频道** | **频道私信** |
| --- | --- | --- | --- | --- |
| 机器人接收 | - | - | - | - |
| 机器人发送 | 支持 | 支持 | 支持 | 支持 |


## 发送方式

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

## 数据结构与协议

消息发送接口 ark 字段值是一个 json object，具体字段如下：

| **属性** | **类型** | **必填** | **说明** |
| --- | --- | --- | --- |
| template_id | int | 是 | 模版 id，管理端可获得或内邀申请获得 <br/>以下默认可使用：<br/>[23 链接+文本列表模板\|QQ机器人文档](./template/template_23.html)<br/>[24 文本+缩略图模板\|QQ机器人文档](./template/template_24.html)<br/>[37 大图模板\|QQ机器人文档](./template/template_37.html) |
| kv | array | 是 | {key: xxx, value: xxx}，模版内变量与填充值的kv映射 |

特别：当预设变量是数组时，kv数组元素的结构调整为：

```json
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

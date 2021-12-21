# 23 链接+文本列表模板

### 样式
![23](./23.png)

模板id=23

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
            "list":#LIST#
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

### #LIST# 结构
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


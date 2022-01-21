# 获取当前用户频道列表

### 使用示例
#### sync
```python
import qqbot

token = qqbot.Token({appid}, {token})

def demo():
    api = qqbot.UserAPI(token, False)
    guilds = api.me_guilds()
```

#### async
```python
import qqbot

token = qqbot.Token({appid}, {token})

async def demo():
    api = qqbot.AsyncUserAPI(token, False)
    guilds = await api.me_guilds()
```


## 参数说明

| 字段名  | 必填 | 类型                      | 描述             |
| ------- | ---- | ------------------------- | ---------------- |
| options | 否   | [ReqOptions](#reqoptions) | 获取频道列表范围 |

### ReqOptions

| 字段名 | 必填 | 类型   | 描述                                             |
| ------ | ---- | ------ | ------------------------------------------------ |
| before | 否   | string | 读取此 `guild id` 之前的数据                           |
| after  | 否   | string | 读取此 `guild id` 之后的数据                           |
| limit  | 否   | number | 每次拉取多少条数据，最大不超过 `100`，默认 `100` |

::: warning 注意

before、after 同时存在时，以 before 为准。

:::

## 返回说明

返回 [Guild](#guild) 数组。

### Guild

| 字段名 | 类型    | 描述               |
| ------ | ------- | ------------------ |
| id     | string  | 频道 ID            |
| name   | string  | 频道名称           |
| icon   | string  | 频道头像地址       |
| owner  | boolean | 当前人是否是创建人 |

## 返回示例

`data`：

```json
[
  {
    "id": 'xxxxxx',
    "name": 'Ost测试频道',
    "icon": 'xxxxxx',
    "owner": false,
  },
];
```

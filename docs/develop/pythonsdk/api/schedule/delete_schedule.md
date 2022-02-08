# 删除日程 

删除`日程子频道`里的一个日程。

::: warning 注意

要求操作人具有管理频道的权限，如果是机器人，则需要将机器人设置为管理员。

:::

## 使用示例

#### sync

```python
import qqbot

token = qqbot.Token({appid}, {token})


def demo():
    api = qqbot.ScheduleAPI(token, False)
    result = api.delete_schedule(channel_id, schedule_id)
```

#### async

```python
import qqbot

token = qqbot.Token({appid}, {token})


async def demo():
    api = qqbot.AsyncScheduleAPI(token, False)
    result = await api.delete_schedule(channel_id, schedule_id)
```

## 参数说明

| 字段名     | 必填 | 类型   | 描述                             |
| ---------- | ---- | ------ | -------------------------------- |
| channel_id  | 是   | string | [子频道 ID](../../model/channel.md) |
| schedule_id | 是   | string | 日程 ID                          |

## 返回说明

返回结果为空。

## 返回示例

`data`：

```python
True
```

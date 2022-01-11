# 删除日程 <Badge text="v2.3.0" />

删除`日程子频道`里的一个日程。

::: warning 注意

要求操作人具有管理频道的权限，如果是机器人，则需要将机器人设置为管理员。

:::

## 使用示例

```javascript
async function demo() {
  let { data } = await client.scheduleApi.deleteSchedule(channelId, scheduleId);
}
```

## 参数说明

| 字段名     | 必填 | 类型   | 描述                             |
| ---------- | ---- | ------ | -------------------------------- |
| channelId  | 是   | string | [子频道 ID](../model/channel.md) |
| scheduleId | 是   | string | 日程 ID                          |

## 返回说明

返回结果为空。

## 返回示例

`data`：

```js
'';
```

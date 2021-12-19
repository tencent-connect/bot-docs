# 删除子频道

移除一个子频道 channel
<Warnning />

## 使用示例

```javascript
async function demo() {
  let { data } = await client.channelApi.deleteChannel(channelId);
}
```

::: warning 注意

- 要求操作人具有`管理频道`的权限，如果是机器人，则需要将机器人设置为管理员。
- 创建成功后，返回创建成功的子频道对象，同时会触发一个频道创建的事件通知。
- 子频道的删除是无法撤回的，一旦删除，将无法恢复。
  :::

## 参数说明

| 字段名    | 必填 | 类型   | 描述      |
| --------- | ---- | ------ | --------- |
| channelId | 是   | string | 子频道 ID |

## 返回说明

字段参见 [Channel](model.md)

## 返回示例

`data`：

```js
{
    id: 'CHENNAL_ID',
    type: 3,
    name: 'ostwindli话题讨论',
    guild_id: 'GUILD_ID'
  }
```

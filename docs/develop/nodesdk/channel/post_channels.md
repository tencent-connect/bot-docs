# 创建子频道

创建一个子频道 Channel
<Warnning />

## 使用示例

```javascript
async function demo() {
  let { data } = await client.channelApi.postChannel(guildId, channel);
}
```

::: warning 注意

- 要求操作人具有管理频道的权限，如果是机器人，则需要将机器人设置为管理员。
- 创建成功后，返回创建成功的子频道对象，同时会触发一个频道创建的事件通知。
- 目前不支持创建的子频道类型
  - 子频道分组
  - 私密子频道
:::

## 参数说明

| 字段名  | 必填 | 类型                | 描述       |
| ------- | ---- | ------------------- | ---------- |
| guildId | 是   | string              | 频道 ID    |
| channel | 是   | [Channel](model.md) | 子频道对象 |

## 返回说明

字段参见 [Channel](model.md)

## 返回示例

`data`：

```js
{
    id: 'CHANNEL_ID',
    guild_id: 'GUILD_ID',
    name: 'ostwindli的子频道',
    type: 1,
    position: 1638519748,
    owner_id: '2854209121',
    sub_type: 0
  }
```

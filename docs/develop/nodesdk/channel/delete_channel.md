# 删除子频道 <Badge text="v1.0.0" />

移除一个子频道。

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

返回一个 [ChannelRes](#channelres) 对象。

### ChannelRes

| 字段名   | 类型   | 描述                                   |
| -------- | ------ | -------------------------------------- |
| id       | string | 子频道 ID                              |
| guild_id | string | 频道 ID                                |
| name     | string | 子频道名                               |
| type     | number | 子频道类型 [ChannelType](#channeltype) |

### ChannelType

| 值    | 描述         |
| ----- | ------------ |
| 0     | 文字子频道   |
| 1     | 保留，不可用 |
| 2     | 语音子频道   |
| 3     | 保留，不可用 |
| 4     | 子频道分组   |
| 10005 | 直播子频道   |
| 10006 | 应用子频道   |
| 10007 | 论坛子频道   |

注：由于 QQ 频道还在持续的迭代中，经常会有新的子频道类型增加，文档更新不一定及时，开发者识别 `ChannelType` 时，请注意相关的未知 ID 的处理。

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

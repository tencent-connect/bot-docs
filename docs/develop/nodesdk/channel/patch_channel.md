# 修改子频道 <Badge text="v1.0.0" />

修改某个子频道的信息。

<Warnning />

## 使用示例

```javascript
async function demo() {
  let { data } = await client.channelApi.patchChannel(channelId, channel);
}
```

::: warning 注意

- 要求操作人具有管理子频道的权限，如果是机器人，则需要将机器人设置为管理员。
- 修改成功后，会触发子频道更新事件。

:::

## 参数说明

| 字段名    | 必填 | 类型                | 描述       |
| --------- | ---- | ------------------- | ---------- |
| channelId | 是   | string              | 子频道 ID  |
| channel   | 是   | [Channel](#channel) | 子频道对象 |

### Channel

| 字段名    | 必填 | 类型   | 描述                                   |
| --------- | ---- | ------ | -------------------------------------- |
| name      | 否   | string | 子频道名                               |
| type      | 否   | number | 子频道类型 [ChannelType](#channeltype) |
| position  | 否   | number | 排序                                   |
| parent_id | 否   | string | 分组 ID                                |

上述字段需要修改哪个，就传递哪个即可。

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

## 返回说明

返回 [ChannelRes](#channelres) 对象。

### ChannelRes

| 字段名    | 类型   | 描述                                           |
| --------- | ------ | ---------------------------------------------- |
| id        | string | 子频道 ID                                      |
| guild_id  | string | 频道 ID                                        |
| name      | string | 子频道名                                       |
| type      | number | 子频道类型 [ChannelType](#channeltype)         |
| sub_type  | number | 子频道子类型 [ChannelSubType](#channelsubtype) |
| position  | number | 排序，非必填                                   |
| parent_id | string | 分组 ID                                        |
| owner_id  | string | 创建人 ID                                      |

### ChannelSubType

| 值  | 描述 |
| --- | ---- |
| 0   | 闲聊 |
| 1   | 公告 |
| 2   | 攻略 |
| 3   | 开黑 |

## 返回示例

`data`：

```js
{
    id: 'CHANNEL_ID',
    guild_id: 'GUILD_ID',
    name: 'ostwindli话题讨论',
    topic: null,
    type: 4,
    last_message_id: null,
    last_pin_timestamp: null,
    nsfw: null,
    icon: null,
    position: 2,
    bitrate: null,
    recipients: [],
    user_limit: null,
    parent_id: '0',
    rate_limit_per_user: null,
    owner_id: null,
    application_id: null,
    op_user_id: null,
    sub_type: 0
  }
```

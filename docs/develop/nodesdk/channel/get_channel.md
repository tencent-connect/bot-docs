# 获取子频道详情

获取子频道详情。

## 使用示例

```javascript
async function demo() {
  let { data } = await client.channelApi.channel(channelId);
}
```

## 参数说明

| 字段名    | 必填 | 类型   | 描述      |
| --------- | ---- | ------ | --------- |
| channelId | 是   | string | 子频道 ID |

## 返回说明

字段参见 [Channel](#channel)。

### Channel

| 字段名    | 类型   | 描述                                           |
| --------- | ------ | ---------------------------------------------- |
| id        | string | 子频道 ID                                      |
| guild_id  | string | 频道 ID                                        |
| name      | string | 子频道名                                       |
| type      | number | 子频道类型 [ChannelType](#channeltype)         |
| sub_type  | number | 子频道子类型 [ChannelSubType](#channelsubtype) |
| position  | number | 排序，非必填     |
| parent_id | string | 分组 ID                                        |
| owner_id  | string | 创建人 ID                                      |

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
    name: 'ostwindli的子频道',
    type: 0,
    last_message_id: '0',
    nsfw: false,
    position: 1638519748,
    parent_id: 'PARENT_ID',
    rate_limit_per_user: 0,
    owner_id: 'OWNER_ID',
    sub_type: 0
}
```

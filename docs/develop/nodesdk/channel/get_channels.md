# 获取子频道列表

获取子频道列表。

## 使用示例

```javascript
async function demo() {
  let { data } = await client.channelApi.channels(guildId);
}
```

## 参数说明

| 字段名  | 必填 | 类型   | 描述    |
| ------- | ---- | ------ | ------- |
| guildId | 是   | string | 频道 ID |

## 返回说明

返回 [Channel](#channel) 数组。

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
[
  {
    id: 'xxxxxx',
    guild_id: 'xxxxxx',
    name: '很高兴遇见你',
    type: 4,
    position: 2,
    parent_id: '0',
    owner_id: '0',
    sub_type: 0,
  },
  {
    id: 'xxxxxx',
    guild_id: 'xxxxxx',
    name: '话题讨论',
    type: 4,
    position: 3,
    parent_id: '0',
    owner_id: '0',
    sub_type: 0,
  },
];
```

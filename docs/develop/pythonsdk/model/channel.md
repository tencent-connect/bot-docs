# 子频道对象(Channel)

子频道对象中所涉及的 ID 类数据，都仅在机器人场景流通，与真实的 ID 无关，请不要理解为真实的 ID。

### Channel

| 字段名    | 类型   | 描述                                           |
| --------- | ------ | ---------------------------------------------- |
| id        | string | 子频道 ID                                      |
| guild_id  | string | 频道 ID                                        |
| name      | string | 子频道名                                       |
| type      | number | 子频道类型 [ChannelType](#channeltype)         |
| sub_type  | number | 子频道子类型 [ChannelSubType](#channelsubtype) |
| position  | number | 排序，必填，而且不能够和其他子频道的值重复     |
| parent_id | string | 分组 ID                                        |
| owner_id  | string | 创建人 ID                                      |
| private_type     | string | 子频道私密类型 [PrivateType](#privatetype)                                                                           |
| speak_permission | number | 子频道发言权限 [SpeakPermission](#speakpermission)                                                                   |
| application_id   | string | 用于标识应用子频道应用类型，仅应用子频道时会使用该字段，具体定义请参考 [应用子频道的应用类型](#应用子频道的应用类型) |
| permissions      | string | 用户拥有的子频道权限 [Permissions](../model/channel_permission.md#permissions) 

### 有关 position 的说明

- postiton 从 `1` 开始。
- 当子频道类型为 `子频道分组（ChannelType=4）`时，由于 `position 1` 被`未分组`占用，所以 position 只能从 `2` 开始。
- 如果不传默认追加到分组下最后一个。
- 如果填写一个已经存在的值，那么会插入在原来的元素之前。
- 如果填写一个较大值，与不填是相同的表现，同时存储的值会根据真实的 position 进行重新计算，并不会直接使用传入的值。

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

注：目前只有`文字子频道`具有 `ChannelSubType` 二级分类，同时二级分类也可能会不断增加，开发者也需要注意对未知 ID 的处理。

### PrivateType

子频道私密类型。

| 值 | 描述 |
| --- | --------------------- |
| 0 | 公开频道 |
| 1 | 群主管理员可见 |
| 2 | 群主管理员 + 指定成员，可使用 [修改子频道权限接口](../channel_permissions/put_channel_permissions.md) 指定成员 |

### SpeakPermission

| 值  | 描述                                                                                                         |
| --- | ------------------------------------------------------------------------------------------------------------ |
| 0   | 无效类型                                                                                                     |
| 1   | 所有人                                                                                                       |
| 2   | 群主管理员+指定成员，可使用 [修改子频道权限接口](../channel_permissions/put_channel_permissions.md) 指定成员 |

### 应用子频道的应用类型

以下列表用于说明应用子频道的`application_id`含义。

| 值      | 描述             |
| ------- | ---------------- |
| 1000000 | 王者开黑大厅     |
| 1000001 | 互动小游戏       |
| 1000010 | 腾讯投票         |
| 1000051 | 飞车开黑大厅     |
| 1000050 | 日程提醒         |
| 1000070 | CoDM 开黑大厅    |
| 1010000 | 和平精英开黑大厅 |

注：由于 QQ 频道还在持续的迭代中，应用子频道的 `application_id` 还会持续新增，后续会不定期补充到文档中。

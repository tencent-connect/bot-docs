# 子频道对象(Channel)

子频道对象中所涉及的 ID 类数据，都仅在机器人场景流通，与真实的 ID 无关。请不要理解为真实的 ID

### Channel
| 字段名    | 类型   | 描述                                           |
| --------- | ------ | ---------------------------------------------- |
| id        | string | 子频道id                                       |
| guild_id  | string | 频道id                                         |
| name      | string | 子频道名                                       |
| type      | int    | 子频道类型 [ChannelType](#channeltype)         |
| sub_type  | int    | 子频道子类型 [ChannelSubType](#channelsubtype) |
| position  | int    | 排序，必填，而且不能够和其他子频道的值重复     |
| parent_id | string | 分组 id                                        |
| owner_id  | string | 创建人 id                                      |

### ChannelType

| 值    | 描述           |
| ----- | -------------- |
| 0     | 文字子频道     |
| 1     | 保留，不可用   |
| 2     | 语音子频道     |
| 3     | 保留，不可用   |
| 4     | 子频道分组     |
| 10005 | 直播子频道     |
| 10006 | 应用子频道     |
| 10007 | 论坛子频道     |

注：由于QQ频道还在持续的迭代中，经常会有新的子频道类型增加，文档更新不一定及时，开发者识别 `ChannelType` 时，请注意相关的未知 ID 的处理。

### ChannelSubType
| 值  | 描述 |
| --- | ---- |
| 0   | 闲聊 |
| 1   | 公告 |
| 2   | 攻略 |
| 3   | 开黑 |

注：目前只有`文字子频道`具有 `ChannelSubType` 二级分类，同时二级分类也可能会不断增加，开发者也需要注意对未知 ID 的处理。

# 获取子频道信息

获取子频道 channel 详情

## 使用示例

```go
token := token.BotToken("appid", "token")
api := botgo.NewOpenAPI(token).WithTimeout(3 * time.Second)
ctx := context.Background()

channel, channelError := api.Channel(ctx, channelID)
if channelError != nil {
    log.Fatalln("调用 Channel 接口失败, err = ", channelError)
}
```

## 参数说明

| 字段名     | 类型   | 描述      |
| ---------- | ------ | --------- |
| channelID | string | 子频道 ID |

## 返回说明

字段参见 [Channel](#Channel)

# 子频道对象(Channel)

子频道对象中所涉及的 ID 类数据，都仅在机器人场景流通，与真实的 ID 无关。请不要理解为真实的 ID

### Channel

| 字段名    | 类型   | 描述                                           |
| --------- | ------ | ---------------------------------------------- |
| ID        | string | 子频道id                                       |
| GuildID   | string | 频道id                                         |
| Name      | string | 子频道名                                       |
| Type      | int    | 子频道类型 [ChannelType](#channeltype)         |
| SubType   | int    | 子频道子类型 [ChannelSubType](#channelsubtype) |
| Position  | int64    | 排序，必填，而且不能够和其他子频道的值重复     |
| ParentID  | string | 分组 id                                        |
| OwnerID   | string | 创建人 id                                      |
| PrivateType| int   | 子频道的可见类型 [ChannelPrivateType](#ChannelPrivateType)   |
| SpeakPermission | int | 子频道发言权限 [SpeakPermissionType](#SpeakPermissionType)  |
| ApplicationID | string | 应用子频道的应用ID，仅应用子频道有效|
| Permissions | string | 用户拥有的子频道权限 |

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

注：由于 QQ 频道还在持续的迭代中，经常会有新的子频道类型增加，文档更新不一定及时，开发者识别 `ChannelType` 时，请注意相关的未知类型的处理。

### ChannelSubType

| 值  | 描述 |
| --- | ---- |
| 0   | 闲聊 |
| 1   | 公告 |
| 2   | 攻略 |
| 3   | 开黑 |

### SpeakPermissionType

| 值  | 描述 |
| --- | ---- |
| 0   | 公开发言权限 |
| 1   | 指定成员可发言 |

### ChannelPrivateType

| 值  | 描述 |
| --- | ---- |
| 0   | 公开频道 |
| 1   | 群主管理员可见 |
| 2   | 群主管理员 + 指定成员 |


## 返回示例

`data`：

```json
{
    "id":"channel_id",
    "guild_id":"guild_id",
    "name":"子频道名",
    "type":0,
    "last_message_id":"21",
    "nsfw":false,
    "position":2,
    "parent_id":"分组 id  ",
    "rate_limit_per_user":0,
    "owner_id":"0",
    "sub_type":0
}
```

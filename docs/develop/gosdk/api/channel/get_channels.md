# 获取子频道列表

``get_channels`` 获取子频道列表

## 使用示例

```go
token := token.BotToken("appid", "token")
api := botgo.NewOpenAPI(token).WithTimeout(3 * time.Second)
ctx := context.Background()

channels, channelsError := api.Channels(ctx, guildId)
if channelsError != nil {
    log.Fatalln("调用 Channels, err = ", channelsError)
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

注：由于 QQ 频道还在持续的迭代中，经常会有新的子频道类型增加，文档更新不一定及时，开发者识别 `ChannelType` 时，请注意相关的未知 ID 的处理。

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
[
    {
        "id":"channel_id",
        "guild_id":"guild_id",
        "name":"子频道名",
        "type":4,
        "position":2,
        "parent_id":"0",
        "owner_id":"0",
        "sub_type":0
    },
    {
        "id":"channel_id",
        "guild_id":"guild_id",
        "name":"子频道名",
        "type":4,
        "position":3,
        "parent_id":"0",
        "owner_id":"0",
        "sub_type":0
    }
]
```

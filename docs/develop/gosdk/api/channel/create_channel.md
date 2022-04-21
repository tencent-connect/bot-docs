# 创建子频道

创建一个子频道。
<Warnning />

## 使用示例

```go
token := token.BotToken("appid", "token")
api := botgo.NewOpenAPI(token).WithTimeout(3 * time.Second)
ctx := context.Background()

channel, channelError := api.PostChannel(ctx, guildId, &dto.ChannelValueObject{
  Name:    "子频道名",
  Type:    dto.ChannelTypeText,
  SubType: dto.ChannelSubTypeChat,
})
if channelError != nil {
  log.Fatalln("调用 PostChannel 接口失败, err = ", channelError)
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
| channel | 是   | [ChannelValueObject](#ChannelValueObject) | 子频道对象 |

### ChannelValueObject

| 字段名    | 类型   | 必填 | 描述                                           |
| --------- | ------ | ---- | ---------------------------------------------- |
| Name      | string | 是   | 子频道名                                       |
| Type      | int | 是   | 子频道类型 [ChannelType](#channeltype)         |
| SubType  | int | 是   | 子频道子类型 [ChannelSubType](#channelsubtype) |
| Position  | int64 | 否   | 排序，必填，而且不能够和其他子频道的值重复     |
| ParentID | string | 否   | 分组 ID                                        |

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

## 返回说明

返回 [Channel](#Channel) 对象。

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
  "id": "channel_id",
  "guild_id": "guild_id",
  "name": "channel_test",
  "type": 1,
  "position": 1640240055,
  "owner_id": "2854198244",
  "sub_type": 0
}
```

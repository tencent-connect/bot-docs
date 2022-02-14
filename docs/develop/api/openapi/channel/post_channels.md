# 创建子频道

### 接口

`POST /guilds/{guild_id}/channels`

### 功能描述

用于在 `guild_id` 指定的频道下创建一个子频道。

- 要求操作人具有`管理频道`的权限，如果是机器人，则需要将机器人设置为管理员。
- 创建成功后，返回创建成功的子频道对象，同时会触发一个频道创建的事件通知。

<PrivateDomain/>

### Content-Type

`application/json`

### 参数

| 字段名           | 类型        | 描述                                                                             |
| ---------------- | ----------- | -------------------------------------------------------------------------------- |
| name             | string      | 子频道名称                                                                       |
| type             | int    | 子频道类型 [ChannelType](model.md#channeltype)                                 |
| sub_type         | int         | 子频道子类型 [ChannelSubType](model.md#channelsubtype)                           |
| position         | int         | 子频道排序，必填；当子频道类型为 `子频道分组（ChannelType=4）`时，必须大于等于 2 |
| parent_id        | string      | 子频道所属分组ID                                                                 |
| private_type     | int         | 子频道私密类型 [PrivateType](model.md#privatetype)                               |
| private_user_ids | string 数组 | 子频道私密类型成员 ID                                                            |
| speak_permission | int         | 子频道发言权限 [SpeakPermission](model.md#speakpermission)                       |
| application_id   | string      | 应用类型子频道应用 AppID，仅应用子频道需要该字段                                 |

### 返回

返回[Channel](model.md#channel) 对象。

### 错误码

详见[错误码](../error/error.md)。

### 示例

请求数据包

```json
{
  "name": "私密子频道",
  "type": 0,
  "position": 1,
  "parent_id": "123456",
  "owner_id": "0",
  "sub_type": 0,
  "private_type": 1
}
```

响应数据包

```json
{
  "id": "xxxxxx",
  "guild_id": "xxxxxx",
  "name": "私密子频道",
  "type": 1,
  "position": 7,
  "parent_id": "123456",
  "owner_id": "xxxxxx",
  "sub_type": 0
}
```

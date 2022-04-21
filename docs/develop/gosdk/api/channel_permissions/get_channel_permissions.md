# 获取子频道权限

获取指定子频道的权限。

## 使用示例

```go
token := token.BotToken("appid", "token")
api := botgo.NewOpenAPI(token).WithTimeout(3 * time.Second)
ctx := context.Background()

channelPermissions, err := api.ChannelPermissions(ctx, channelId, userId)
if err != nil {
    log.Fatalln("调用 ChannelPermissions 接口失败, err = ", err)
}
```

## 参数说明

| 字段名    | 必填 | 类型   | 描述      |
| --------- | ---- | ------ | --------- |
| ChannelID | 是   | string | 子频道 ID |
| UserID    | 是   | string | 用户 ID   |

## 返回说明

返回 [ChannelPermissions](#ChannelPermissions) 对象。

### ChannelPermissions

| 字段名      | 类型                        | 描述                              |
| ----------- | --------------------------- | --------------------------------- |
| ChannelID  | string                      | 子频道 ID                         |
| UserID     | string                      | 用户 ID                           |
| Permissions | [permissions](#permissions) | 用户拥有的子频道权限，是个 string |

### Permissions

权限是 QQ 频道管理频道成员的一种方式，管理员可以对不同的人、不同的子频道设置特定的权限。用户的权限包括**个人权限**和**身份组权限**两部分，最终生效是取两种权限的并集。

权限使用位图表示，传递时序列化为十进制数值字符串。如权限值为`0x6FFF`，会被序列化为十进制`"28671"`。

| 权限         | 值                    | 描述                                                 |
| ------------ | --------------------- | ---------------------------------------------------- |
| 可查看子频道 | 0x0000000001 (1 << 0) | 目前仅支持`指定成员`可见类型，不支持`身份组`可见类型 |
| 可管理子频道 | 0x0000000002 (1 << 1) | 创建者、管理员、子频道管理员都具有此权限             |
| 可发言子频道 |	0x0000000004(1 << 2) |	支持`指定成员`发言类型，支持`身份组`发言类型            |

## 返回示例

`data`：

```json
{
    "channel_id": "1128412",
    "user_id": "9962144428931019739",
    "permissions": "6"
}
```

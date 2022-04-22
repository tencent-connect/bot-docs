# 创建频道 API 权限授权链接 

用于创建 API 接口权限授权链接，该链接指向 `guildID` 对应的频道 。调用成功后，参数指定的子频道会受到一条”申请授权【xxx】权限“消息，管理员点击可进行机器人 API 权限授予。

:::warning 注意

- 需要建立 ws 连接。
- 每天只能在一个频道内发 `3` 条（默认值）频道权限授权链接，如需调整，请联系平台申请权限。

:::

## 使用示例

```go
token := token.BotToken("appid", "token")
api := botgo.NewOpenAPI(token).WithTimeout(3 * time.Second)
ctx := context.Background()

permissionDemand, err := api.RequireAPIPermissions(ctx, guildId, &dto.APIPermissionDemandToCreate{
  ChannelID: channelId,
  APIIdentify: &dto.APIPermissionDemandIdentify{
    Path:   "/guilds/{guild_id}",
    Method: "GET",
  },
  Desc: "机器人申请对应的 API 接口权限后可以使用功能的描述",
})
if err != nil {
  log.Fatalln("调用 RequireAPIPermissions 接口失败, err = ", err)
}
```

## 参数说明

| 字段名              | 必填 | 类型                                                  | 描述                         |
| ------------------- | ---- | ----------------------------------------------------- | ---------------------------- |
| guildId             | 是   | string                                                | [频道 ID](../../model/guild.md) |
| demand | 是   | [APIPermissionDemandToCreate](#APIPermissionDemandToCreate) | 授权链接对象                 |

### APIPermissionDemandToCreate

| 字段名       | 必填 | 类型                                                        | 描述                                              |
| ------------ | ---- | ----------------------------------------------------------- | ------------------------------------------------- |
| ChannelID   | 是   | string                                                      | 授权链接发送的[子频道 ID](../../model/channel.md)    |
| APIIdentify | 是   | [APIPermissionDemandIdentify](#APIPermissionDemandIdentify) | API 权限需求标识对象                              |
| Desc         | 否   | string                                                      | 机器人申请对应的 API 接口权限后可以使用功能的描述 |

### APIPermissionDemandIdentify

| 字段名 | 类型   | 描述                                                    |
| ------ | ------ | ------------------------------------------------------- |
| Path   | string | API 接口名，例如 `/guilds/{guild_id}/members/{user_id}` |
| Method | string | 请求方法，例如 `GET`                                    |

## 返回说明

返回 [APIPermissionDemand](#APIPermissionDemand)对象。

### APIPermissionDemand

| 字段名       | 类型                                                        | 描述                                       |
| ------------ | ----------------------------------------------------------- | ------------------------------------------ |
| GuildID     | string                                                      | 申请接口权限的频道 ID                      |
| ChannelID   | string                                                      | 接口权限需求授权链接发送的子频道 ID        |
| APIIdentify | [APIPermissionDemandIdentify](#APIPermissionDemandIdentify) | 权限接口唯一标识                           |
| Title        | string                                                      | 接口权限链接中的接口权限描述信息           |
| Desc         | string                                                      | 接口权限链接中的机器人可使用功能的描述信息 |

## 返回示例

`data`：

```json
{
  "guild_id": "123456",
  "channel_id": "112233",
  "api_identify": {
    "path": "/guilds/{guild_id}",
    "method": "GET"
  },
  "title": "申请授权【获取频道】权限",
  "desc": "允许授权后才能正常使用机器人「频道权限」功能"
}
```

此时打开”**ChannelID**“对应的频道，可看到一条机器人发出的 API 授权申请消息。

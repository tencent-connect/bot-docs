# 禁言全员

将频道内全部成员（非管理员）禁言。

## 使用示例

```go
token := token.BotToken("appid", "token")
api := botgo.NewOpenAPI(token).WithTimeout(3 * time.Second)
ctx := context.Background()

err := api.GuildMute(ctx, guildId, &dto.UpdateGuildMute{
    MuteSeconds: "60",
})
if err != nil {
    log.Fatalln("调用 GuildMute 接口失败, err = ", err)
}
```


## 参数说明

| 字段名  | 必填 | 类型                      | 描述                         |
| ------- | ---- | ------------------------- | ---------------------------- |
| guildId | 是   | string                    | [频道 ID](../../model/guild.md) |
| UpdateGuildMute  | 是   | [UpdateGuildMute](#UpdateGuildMute) | 禁言时长控制参数             |

### UpdateGuildMute

| 字段名  | 类型   | 描述                                                                                    |
| ------- | ------ | --------------------------------------------------------------------------------------- |
| MuteEndTimestamp  | string | 禁言到期时间戳，`绝对时间戳`，单位：`秒`（与 `seconds` 字段同时赋值的话，以该字段为准） |
| MuteSeconds | string | 禁言多少秒（两个字段二选一，**默认以 `mute_end_timstamp` 为准**）                                  |

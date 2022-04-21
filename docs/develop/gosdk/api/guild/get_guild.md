# 获取频道详情

获取频道详情信息。

## 使用示例

```go
token := token.BotToken("appid", "token")
api := botgo.NewOpenAPI(token).WithTimeout(3 * time.Second)
ctx := context.Background()

guild, guildError := api.Guild(ctx, guildId)
if guildError != nil {
    log.Fatalln("调用 Guild 接口失败, err = ", guildError)
}
```

## 参数说明

| 字段名  | 必填 | 类型   | 描述    |
| ------- | ---- | ------ | ------- |
| guildId | 是   | string | 频道 ID |

## 返回说明

返回 [Guild](#guild) 对象。

### Guild

| 字段名       | 类型    | 描述               |
| ------------ | ------- | ------------------ |
| ID           | string  | 频道 ID            |
| Name         | string  | 频道名称           |
| Icon         | string  | 频道头像           ｜
| OwnerID      | string  | 拥有者ID          ｜
| IsOwner      | bool | 当前人是否是创建人 |
| MemberCount  | int  | 成员数             |
| MaxMembers   | int64  | 最大成员数         |
| Desc         | string  | 描述               |
| JoinedAt     | Timestamp | 当前用户加入群的时间，此字段只在GUILD_CREATE事件中使用|

## 返回示例

`data`：

```json
{
    "id":"guildId",
    "name":"频道名称",
    "owner_id":"owner_id",
    "owner":false,
    "member_count":8,
    "max_members":300,
    "description":""
}
```

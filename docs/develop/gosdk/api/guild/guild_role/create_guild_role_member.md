# 添加频道身份组成员

添加频道身份组成员。

## 使用示例

```go
token := token.BotToken("appid", "token")
api := botgo.NewOpenAPI(token).WithTimeout(3 * time.Second)
ctx := context.Background()

err := api.MemberAddRole(ctx, guildId, dto.RoleID(roleId), userId, &dto.MemberAddRoleBody{
    Channel: &dto.Channel{
        ID: channelId,
    },
})
if err != nil {
    log.Fatalln("调用 MemberAddRole 接口失败, err = ", err)
}
```

::: warning 注意

- 需要使用的 `token` 对应的用户具备增加身份组成员权限，如果是机器人，要求被添加为管理员。
- 如果要增加的身份组 `ID` 是子频道管理员，需要增加 `Channel` 对象来指定具体是哪个子频道。

:::

## 参数说明

| 字段名  | 必填 | 类型                | 描述                                 |
| ------- | ---- | ------------------- | ------------------------------------ |
| guildId | 是   | string              | 频道 ID                              |
| roleId  | 是   | string              | 身份组 ID                            |
| userId  | 是   | string              | 用户 ID                              |
| MemberAddRoleBody | 是   | [MemberAddRoleBody](#MemberAddRoleBody) | 请求体参数，目前只需要填入一个子频道 ID |

### MemberAddRoleBody

| 字段名 | 类型   | 描述      |
| ------ | ------ | --------- |
| Channel | [Channel](#channel) | 子频道对象 |

### Channel

| 字段名 | 类型   | 描述      |
| ------ | ------ | --------- |
| id     | string | 子频道 ID |


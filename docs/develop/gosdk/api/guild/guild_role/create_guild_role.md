# 创建频道身份组

创建一个频道身份组。

## 使用示例

```go
token := token.BotToken("appid", "token")
api := botgo.NewOpenAPI(token).WithTimeout(3 * time.Second)
ctx := context.Background()

roles, err := api.PostRole(ctx, guildId, &dto.Role{
    Name: "身份组",
})
if err != nil {
    log.Fatalln("调用 PostRole 接口失败, err = ", err)
}
```

::: warning 注意
需要使用的 token 对应的用户具备创建身份组权限。如果是机器人，要求被添加为管理员。
:::

## 参数说明

| 字段名   | 必填 | 类型                  | 描述           |
| -------- | ---- | --------------------- | -------------- |
| guildId  | 是   | string                | 频道 ID        |
| Role     | 是   | [Role](#Role) | 频道身份组参数 |

### Role

| 字段名 | 必填 | 类型   | 描述                                                           |
| ------ | ---- | ------ | -------------------------------------------------------------- |
| ID     |  否   | string | 身份组 ID                                                      |
| Name   |  是   | string | 名称                                                           |
| Color  |  否   | uint32 | ARGB 的 HEX 十六进制颜色值转换后的十进制数值（例：4294927682） |
| Hoist  |  否   | uint32 | 是否在成员列表中单独展示: 0-否, 1-是                           |
| MemberCount | 否 | uint32 | 人数                                                           |
| MemberLimit | 否 | uint32 | 成员上限                                                       |

## 返回说明

| 字段名  | 类型                    | 描述           |
| ------- | ----------------------- | -------------- |
| RoleID | string                  | 频道身份组 ID  |
| GuildID | string                 | 频道ID       |
| Role    | [Role](#Role) | 频道身份组对象 |                                                    |

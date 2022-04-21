# 获取当前用户频道列表

### 使用示例
``` go
token := token.BotToken("appid", "token")
api := botgo.NewOpenAPI(token).WithTimeout(3 * time.Second)
ctx := context.Background()

guilds, meGuildError := api.MeGuilds(ctx, &dto.GuildPager{})
if meGuildError != nil {
    log.Fatalln("调用 MeGuild 接口失败, err = ", meGuildError)
}
```

### 参数说明

`GuildPager`表示获取频道列表范围

｜字段名	｜必填	｜类型	｜描述 ｜
｜---------｜------｜-----｜----｜
|before	|否	|string	|读取此 guild id 之前的数据|
|after	|否	|string	|读取此 guild id 之后的数据|
|limit	|否	|number	|每次拉取多少条数据，最大不超过 100，默认 100|

::: warning 注意

before、after 同时存在时，以 before 为准。

:::

### 返回说明

当前用户所加入的所有 [Guild](#Guild) 对象列表

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

### 返回示例

`data`：

```json
[{
    "id": "696527283900292399",
    "name": "鹅们的萌宠啦咔咔啦",
    "icon": "https://groupprohead-76292.picgzc.qpic.cn/482231626508223/100?t=1626508224633",
    "owner_id": "4828365788198541698",
    "owner": false,
    "joined_at": "2021-12-08T16:12:31+08:00",
    "member_count": 17,
    "max_members": 300,
    "description": "123"
}]
```

# 修改子频道身份组权限

修改子频道身份组权限。

## 使用示例

```python
token := token.BotToken("appid", "token")
api := botgo.NewOpenAPI(token).WithTimeout(3 * time.Second)
ctx := context.Background()

err := api.PutChannelRolesPermissions(ctx, channelId, roleId, &dto.UpdateChannelPermissions{
  Add: "4",
})
if err != nil {
  log.Fatalln("调用 PutChannelRolesPermissions 接口失败, err = ", err)
}
```

::: warning 注意

- 要求操作人具有管理子频道的权限，如果是机器人，则需要将机器人设置为管理员。
- 本接口不支持修改可管理子频道权限。
  :::

## 参数说明

| 字段名             | 必填 | 类型                                      | 描述      |
| ------------------ | ---- | ----------------------------------------- | --------- |
| channelId          | 是   | string                                    | 子频道 ID |
| roleId             | 是   | string                                    | 身份组 ID  |
| UpdateChannelPermissions | 是   | [UpdateChannelPermissions](#UpdateChannelPermissions) | 权限参数  |

### UpdateChannelPermissions

参数包括add和remove两个字段，分别表示授予的权限以及删除的权限。要授予用户权限即把add对应位置1，删除用户权限即把remove对应位置1。当两个字段同一位都为1，表现为删除权限。

|字段名	|类型	|描述|
|------|----|----|
|add	| string	| 字符串形式的十进制数表示赋予用户的权限，参考[Permissions](#Permissions)|
|remove |	string	| 字符串形式的十进制数表示删除用户的权限，参考[Permissions](#Permissions)|

### Permissions

权限是 QQ 频道管理频道成员的一种方式，管理员可以对不同的人、不同的子频道设置特定的权限。用户的权限包括**个人权限**和**身份组权限**两部分，最终生效是取两种权限的并集。

权限使用位图表示，传递时序列化为十进制数值字符串。如权限值为`0x6FFF`，会被序列化为十进制`"28671"`。

| 权限         | 值                    | 描述                                                 |
| ------------ | --------------------- | ---------------------------------------------------- |
| 可查看子频道 | 0x0000000001 (1 << 0) | 目前仅支持`指定成员`可见类型，不支持`身份组`可见类型 |
| 可管理子频道 | 0x0000000002 (1 << 1) | 创建者、管理员、子频道管理员都具有此权限             |
| 可发言子频道 |	0x0000000004(1 << 2) |	支持`指定成员`发言类型，支持`身份组`发言类型            |


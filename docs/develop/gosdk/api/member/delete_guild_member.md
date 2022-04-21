# 删除频道成员

移除频道的某个成员。

<Warnning />

## 使用示例

```python
token := token.BotToken("appid", "token")
api := botgo.NewOpenAPI(token).WithTimeout(3 * time.Second)
ctx := context.Background()

err := api.DeleteGuildMember(ctx, guildId, userId)
if err != nil {
  log.Fatalln("调用 DeleteGuildMember 接口失败, err = ", err)
}
```

::: warning 注意

- 需要使用的 token 对应的用户具备踢人权限。如果是机器人，要求被添加为管理员。
- 操作成功后，会触发频道成员删除事件
  :::

## 参数说明

| 字段名  | 必填 | 类型   | 描述    |
| ------- | ---- | ------ | ------- |
| guildId | 是   | string | 频道 ID |
| userId  | 是   | string | 用户 ID |
| MemberDeleteOption | 否 ｜ [MemberDeleteOption](#MemberDeleteOption) ｜ 删除用户的选项 ｜

## MemberDeleteOption

| 字段名  | 必填 | 类型   | 描述    |
| ------- | ---- | ------ | ------- |
| AddBlackList | 否 | bool | 删除成员的同时，将该用户添加到频道黑名单中｜
| DeleteHistoryMsgDays | 否 | int | 删除成员的同时，撤回该成员的消息，可以指定撤回消息的时间范围 |

>注：消息撤回时间范围仅支持固定的天数：3，7，15，30。 特殊的时间范围：-1: 撤回全部消息。默认值为0不撤回任何消息

## 返回说明

无

## 返回示例

`data`:

```js
'';
```

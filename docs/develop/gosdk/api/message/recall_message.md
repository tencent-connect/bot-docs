# 撤回消息

撤回子频道内的消息

::: 注意

- 管理员可以撤回普通成员的消息。
- 频道主可以撤回所有人的消息。

:::

## 使用示例

```go
token := token.BotToken("appid", "token")
api := botgo.NewOpenAPI(token).WithTimeout(3 * time.Second)
ctx := context.Background()

err := api.RetractMessage(ctx, channelId, msgId)
if err != nil {
    log.Fatalln("调用 RetractMessage 接口失败, err = ", err)
}
```

## 参数说明

| 参数      | 必填 | 类型   | 说明      |
| --------- | ---- | ------ | --------- |
| channelId | 是   | string | 子频道 ID |
| msgId | 是   | string | 消息 ID   |
| RetractMessageOption | 否 ｜ [RetractMessageOption](#RetractMessageOption)|是否隐藏提示小灰条|

### RetractMessageOption

|选项|含义|
|---|----|
|RetractMessageOptionHidetip|撤回消息隐藏小灰条可选参数|

# 音频控制

## 使用示例

```go
token := token.BotToken("appid", "token")
api := botgo.NewOpenAPI(token).WithTimeout(3 * time.Second)
ctx := context.Background()

audioControl, err := api.PostAudio(ctx, channelId, &dto.AudioControl{})
if err != nil {
  log.Fatalln("调用 PostAudio 接口失败, err = ", err)
}
```

## 参数说明

| 字段名       | 类型                                    | 描述           |
| ------------ | ------------------------------------- | -------------- |
| channelId    | string                                | 子频道 id      |
| AudioControl | [AudioControl](#AudioControl) | audio 控制参数 |

## 返回说明

字段参见 [AudioControl](#AudioControl)

# 语音对象

## AudioControl

| 字段名    | 类型   | 描述                                                                  |
| --------- | ------ | --------------------------------------------------------------------- |
| URL       | string | 音频数据的 url status 为 0 时传                                       |
| Text      | string | 状态文本（比如：简单爱-周杰伦），可选，status 为 0 时传，其他操作不传 |
| Status    | STATUS | 播放状态，参考 [AudioStatus](#AudioStatus)                                                 |

### AudioStatus

| 字段名 | 值  | 描述         |
| ------ | --- | ------------ |
| START  | 0   | 开始播放操作 |
| PAUSE  | 1   | 暂停播放操作 |
| RESUME | 2   | 继续播放操作 |
| STOP   | 3   | 停止播放操作 |

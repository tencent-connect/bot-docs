# 音频控制

## 使用示例

```py
import qqbot

token = qqbot.Token({appid}, {token})

audioApi = qqbot.AudioAPI(token, False)
result = audioApi.post_audio(channel_id, audio_control)
```

## 参数说明

| 字段名       | 类型                                    | 描述           |
| ------------ | ------------------------------------- | -------------- |
| channel_id    | String                                | 子频道 id      |
| audio_control | [AudioControl](#audiocontrol) | audio 控制参数 |

## 返回说明

字段参见 [AudioControl](#audiocontrol)


# 语音对象

## AudioControl

| 字段名    | 类型   | 描述                                                                  |
| --------- | ------ | --------------------------------------------------------------------- |
| audio_url | string | 音频数据的 url status 为 0 时传                                       |
| text      | string | 状态文本（比如：简单爱-周杰伦），可选，status 为 0 时传，其他操作不传 |
| status    | STATUS | 播放状态，参考 [STATUS](#STATUS)                                                 |

### STATUS

| 字段名 | 值  | 描述         |
| ------ | --- | ------------ |
| START  | 0   | 开始播放操作 |
| PAUSE  | 1   | 暂停播放操作 |
| RESUME | 2   | 继续播放操作 |
| STOP   | 3   | 停止播放操作 |
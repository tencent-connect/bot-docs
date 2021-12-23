# 语音对象(AudioControl)

## AudioControl

| 字段名    | 类型              | 描述                                                                  |
| --------- | ----------------- | --------------------------------------------------------------------- |
| audio_url | string            | 音频数据的 url status 为 0 时传                                       |
| text      | string            | 状态文本（比如：简单爱-周杰伦），可选，status 为 0 时传，其他操作不传 |
| status    | [STATUS](#status) | 播放状态，参考 STATUS                                                 |

## STATUS

| 字段名 | 值  | 描述         |
| ------ | --- | ------------ |
| START  | 0   | 开始播放操作 |
| PAUSE  | 1   | 暂停播放操作 |
| RESUME | 2   | 继续播放操作 |
| STOP   | 3   | 停止播放操作 |

## AudioAction

| 字段名     | 类型   | 描述                                                                  |
| ---------- | ------ | --------------------------------------------------------------------- |
| guild_id   | string | 频道 ID                                                               |
| channel_id | string | 子频道 ID                                                             |
| audio_url  | string | 音频数据的 url status 为 0 时传                                       |
| text       | string | 状态文本（比如：简单爱-周杰伦），可选，status 为 0 时传，其他操作不传 |

# 音频控制 <Badge text="v1.0.0" />

用于控制音频。

## 使用示例

```javascript
async function demo() {
  let { data } = await client.audioApi.postAudio(channelID, audioControl);
}
```

## 参数说明

| 字段名       | 必填 | 类型                          | 描述           |
| ------------ | ---- | ----------------------------- | -------------- |
| channelID    | 是   | string                        | 子频道 ID      |
| audioControl | 是   | [AudioControl](#audiocontrol) | audio 控制参数 |

### AudioControl

| 字段名    | 类型              | 描述                                                                  |
| --------- | ----------------- | --------------------------------------------------------------------- |
| audio_url | string            | 音频数据的 url status 为 0 时传                                       |
| text      | string            | 状态文本（比如：简单爱-周杰伦），可选，status 为 0 时传，其他操作不传 |
| status    | [STATUS](#status) | 播放状态，参考 STATUS                                                 |

### STATUS

| 字段名 | 值  | 描述         |
| ------ | --- | ------------ |
| START  | 0   | 开始播放操作 |
| PAUSE  | 1   | 暂停播放操作 |
| RESUME | 2   | 继续播放操作 |
| STOP   | 3   | 停止播放操作 |

## 返回说明

成功返回空对象。

## 返回示例

`data`：

```js
{
}
```

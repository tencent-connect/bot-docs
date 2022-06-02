# 机器人下麦 <Badge text="v2.9.5" />

机器人在 channel_id 对应的语音子频道下麦。

音频接口：仅限音频类机器人才能使用，后续会根据机器人类型自动开通接口权限，现如需调用，需联系平台申请权限。

## 使用示例

```javascript
async function demo() {
  let { data } = await client.audioApi.botOffMic(channelID);
}
```

## 参数说明

| 字段名       | 必填 | 类型                          | 描述           |
| ------------ | ---- | ----------------------------- | -------------- |
| channelID    | 是   | string                        | 语音子频道 ID      |


## 返回说明

成功返回空对象。

## 返回示例

`data`：

```js
{
}
```

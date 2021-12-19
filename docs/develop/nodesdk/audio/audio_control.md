# 音频控制

## 使用示例

```javascript
async function demo() {
  let { data } = await client.audioApi.postAudio(channelID, audioControl);
}
```

## 参数说明

| 字段名       | 必填 | 类型                                  | 描述           |
| ------------ | ---- | ------------------------------------- | -------------- |
| channelID    | 是   | string                                | 子频道 id      |
| audioControl | 是   | [AudioControl](model.md#audiocontrol) | audio 控制参数 |

## 返回说明

成功返回空对象

## 返回示例

`data`：

```js
{
}
```

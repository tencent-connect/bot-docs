# 音频控制

### 接口

`POST /channels/{channel_id}/audio`

### 功能描述

用于控制子频道 `channel_id` 下的音频。

- 音频接口：仅限**音频类机器人**才能使用，后续会根据机器人类型自动开通接口权限，现如需调用，需联系平台申请权限。

### Content-Type

`application/json`

### 参数

参照 [AudioControl](model.md#audiocontrol)。

### 返回

成功返回空对象。

```json
{}
```

### 错误码

详见[错误码](../error/error.md)。

### 示例

请求数据包

```json
{
  "audio_url": "http:/xxxxx.mp3",
  "text": "xxx",
  "status": 0
}
```

响应数据包

```json
{}
```

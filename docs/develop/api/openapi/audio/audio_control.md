# 音频控制

### 接口
`POST /channels/{channel.id}/audio`

### 功能描述

- 音频控制
- 音频接口：仅限音频类机器人才能使用，后续会根据机器人类型自动开通接口权限，现如需调用，需联系平台申请权限；


### 参数 
参照 [AudioControl](model.md#audiocontrol)

### 返回
成功返回空对象 
```json
{}
```

### 示例
REQ BODY
```json
{
    "audio_url": "http://qq.com/a.mp3",
    "text": "xxx",
    "status": 0
}
```

RSP BODY 
```json
{}
```

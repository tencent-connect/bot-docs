# 音频事件

## AUDIO_START

### 发送时机
- 音频开始播放时

## 内容
内容为 [AudioAction](../openapi/audio/model.md#audioaction) 对象

## 示例
```json
{
    "channel_id": "100010",
    "guild_id": "18700000000001",
    "audio_url": "http://qq.com/a.mp3",
    "text": "xxx"
}
```

## AUDIO_FINISH

### 发送时机
- 音频开始结束时

## 内容
内容为 [AudioAction](../openapi/audio/model.md#audioaction) 对象

## 示例
```json
{
    "channel_id": "100010",
    "guild_id": "18700000000001",
    "audio_url": "http://qq.com/a.mp3",
    "text": "xxx"
}
```

## AUDIO_ON_MIC

### 发送时机
- 机器人上麦时

## 内容
内容为 [AudioAction](../openapi/audio/model.md#audioaction) 对象

## 示例
```json
{
    "channel_id": "100010",
    "guild_id": "18700000000001",
}
```

## AUDIO_OFF_MIC

### 发送时机
- 机器人下麦时

## 内容
内容为 [AudioAction](../openapi/audio/model.md#audioaction) 对象

## 示例
```json
{
    "channel_id": "100010",
    "guild_id": "18700000000001",
}
```
# 音视频/直播子频道成员进出事件

## AUDIO_OR_LIVE_CHANNEL_MEMBER_ENTER

### 发送时机
- 用户进入音视频/直播子频道时

### 示例
```json
{
  "guild_id": "47129941624960822",
  "channel_id": "1661124",
  "channel_type": 2, // 2-音视频子频道 5-直播子频道
  "user_id": "144115218182563108"
}
```

## AUDIO_OR_LIVE_CHANNEL_MEMBER_EXIT

### 发送时机
- 用户离开音视频/直播子频道时

### 示例
```json
{
  "guild_id": "47129941624960822",
  "channel_id": "1661124",
  "channel_type": 2, // 2-音视频子频道 5-直播子频道
  "user_id": "144115218182563108"
}
```

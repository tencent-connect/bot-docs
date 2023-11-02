# 开放论坛事件对象(OpenForumEvent)

## OEPN_FORUM_EVENT（intents OPEN_FORUM_EVENT）

**发送时机**
- 用户在话题子频道内发帖、评论、回复评论时产生该事件

## 主题事件
- OPEN_FORUM_THREAD_CREATE
- OPEN_FORUM_THREAD_UPDATE
- OPEN_FORUM_THREAD_DELETE

### 示例
```json
{
  "guild_id": "47129941624960822",
  "channel_id": "1661124",
  "author_id": "144115218182563108",
}
```

## 帖子事件
- OPEN_FORUM_POST_CREATE
- OPEN_FORUM_POST_DELETE

### 示例
```json
{
  "guild_id": "47129941624960822",
  "channel_id": "1661124",
  "author_id": "144115218182563108",
}
```

## 回复事件
- OPEN_FORUM_REPLY_CREATE
- OPEN_FORUM_REPLY_DELETE

### 示例
```json
{
  "guild_id": "47129941624960822",
  "channel_id": "1661124",
  "author_id": "144115218182563108",
}
```

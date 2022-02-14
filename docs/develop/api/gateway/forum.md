# 论坛事件对象(ForumEvent)

## FORUM_EVENT（intents FORUM_EVENT）

### 发送时机
- 用户在话题子频道内发帖、评论、回复评论时产生该事件

## 主题事件
- THREAD_CREATE 
- THREAD_UPDATE 
- THREAD_DELETE

事件内容为 [Thread](../openapi/forum/model.md#Thread) 对象

### 示例

```json
{
  "guild_id": 47129941624960822,
  "channel_id": 1661124,
  "author_id": 144115218182563108,
  "thread_info": {
    "thread_id": "B_7c02cb615f8904001441152181825631080X60",
    "title": [{
      "type": 1,
      "text_info": {
        "text": "Test"
      }
    }],
    "content": [{
      "type": 1,
      "text_info": {
        "text": "tencent "
      }
    }, {
      "type": 5,
      "channel_info": {
        "channel_id": 1505272,
        "channel_name": "#隐私子频道"
      }
    }, {
      "type": 1,
      "text_info": {
        "text": " "
      }
    }, {
      "type": 3,
      "url_info": {
        "url": "https://apple.com",
        "display_text": "Apple"
      }
    }, {
      "type": 1,
      "text_info": {
        "text": ""
      }
    }],
    "date_time": "2021-12-30T15:17:34+08:00"
  }
}
```

## 帖子事件
- POST_CREATE
- POST_DELETE

事件内容为 [PostEvent](../openapi/forum/model.md#Post) 对象

### 示例

```json
{
  "guild_id": "47129941624960822",
  "channel_id": "1661124",
  "author_id": "144115218182563108",
  "post_info": {
    "thread_id": "B_6d02bb61e45b0d001441152181867088220X60",
    "post_id": "c_1500cb611f950a001441152181825631080X60",
    "content": [{
      "type": 1,
      "text_info": {
        "text": "test"
      }
    }, {
      "type": 4,
      "emoji_info": {
        "id": 109,
        "type": "1"
      }
    }, {
      "type": 1,
      "text_info": {
        "text": "111"
      }
    }, {
      "type": 4,
      "emoji_info": {
        "id": 13,
        "type": "1"
      }
    }],
    "date_time": "2021-12-30T15:17:34+08:00"
  }
}
```

## 回复事件
- REPLY_CREATE
- REPLY_DELETE

事件内容为 [Reply](../openapi/forum/model.md#Reply) 对象

### 示例

```json
{
  "guild_id": 47129941624960822,
  "channel_id": 1661124,
  "author_id": 144115218182563108,
  "reply_info": {
    "thread_id": "B_8914b26116bb03001441152181867088220X60",
    "post_id": "c_39bab261d2b907001441152181867088220X60",
    "reply_id": "r_e701cb6128dc0b001441152181825631080X60",
    "content": [{
      "type": 1,
      "text_info": {
        "text": "Apple"
      }
    }],
    "date_time": "2021-12-30T15:17:34+08:00"
  }
}
```
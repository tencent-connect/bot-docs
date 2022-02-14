# 论坛对象(forum)

## Thread

- 话题频道内发表的主帖称为主题
- 该事件在话题频道内新发表主题或删除时生产事件中包含该对象

| 字段名         | 类型                         | 描述    |
|-------------|----------------------------|-------|
| guild_id    | string                     | 频道ID  |
| channel_id  | string                     | 子频道ID |
| author_id   | string                     | 作者ID  |
| thread_info | object | [TheadInfo](#TheadInfo) 主题内容  |

### TheadInfo

- 主题事件包含的主题内容相关信息

| 字段名       | 类型                          | 描述   |
|-----------|-----------------------------|------|
| thread_id | string                      | 主题ID |
| title     | array | [RichObject](#RichObject) 的数组标识的内容信息   |
| content   | array | [RichObject](#RichObject) 的数组标识的内容信息   |
| date_time | ISO8601 timestamp           | 发表时间 |

## Post

- 话题频道内对主题的评论称为帖子
- 话题频道内对帖子主题评论或删除时生产事件中包含该对象

| 字段名        | 类型                       | 描述    |
|------------|--------------------------|-------|
| guild_id   | string                   | 频道ID  |
| channel_id | string                   | 子频道ID |
| author_id  | string                   | 作者ID  |
| post_info  | object | [PostInfo](#PostInfo) 帖子内容  |

### PostInfo

- 帖子事件包含的帖子内容信息

| 字段名       | 类型                          | 描述   |
|-----------|-----------------------------|------|
| thread_id | string                      | 主题ID |
| post_id   | string                      | 帖子ID |
| content   | array | [RichObject](#RichObject) 的数组标识的内容信息   |
| date_time | string                      | 评论时间 |

## Reply

- 话题频道对帖子回复或删除时生产该事件中包含该对象
- 话题频道内对帖子的评论称为回复

| 字段名        | 类型                         | 描述    |
|------------|----------------------------|-------|
| guild_id   | string                     | 频道ID  |
| channel_id | string                     | 子频道ID |
| author_id  | string                     | 作者ID  |
| reply_info | object | [ReplyInfo](#ReplyInfo) 回复内容  |

### ReplyInfo

- 回复事件包含的回复内容信息

| 字段名       | 类型                          | 描述   |
|-----------|-----------------------------|------|
| thread_id | string                      | 主题ID |
| post_id   | string                      | 帖子ID |
| reply_id  | string                      | 回复ID |
| content   | array | [RichObject](#RichObject) 的数组标识的内容信息   |
| date_time | string                      | 回复时间 |

### RichObject

- 富文本内容

| 字段           | 类型                          | 描述    |
|--------------|-----------------------------|-------|
| type         | int      | [RichType](#RichType) 富文本类型 |
| text_info    | object     | [TextInfo](#TextInfo) 文本  |
| at_info      | object           | [AtInfo](#AtInfo) @ 内容   |
| url_info     | object         | [URLInfo](#URLInfo) 链接  |
| emoji_info   | object      | [EmojiInfo](#EmojiInfo) 表情  |
| channel_info | object  | [ChannelInfo](#ChannelInfo) 提到的子频道 |

#### RichType

- 富文本类型

| 字段名     | 值   | 描述    |
|---------|-----|-------|
| TEXT    | 1   | 普通文本  |
| AT      | 2   | at信息  |
| URL     | 3   | url信息 |
| EMOJI   | 4   | 表情    |
| CHANNEL | 5   | #子频道  |
| VIDEO   | 10  | 视频    |
| IMAGE   | 11  | 图片    |

#### TextInfo

- 富文本 - 普通文本

| 字段   | 类型     | 描述   |
|------|--------|------|
| text | string | 普通文本 |

#### AtInfo

- 富文本 - @内容

| 字段         | 类型                          | 描述    |
|------------|-----------------------------|-------|
| type       | [AtType](#AtType)           | at类型  |
| user_info  | [AtUserInfo](#AtUserInfo)   | 用户    |
| role_info  | [AtRoleInfo](#AtRoleInfo)   | 角色组信息 |
| guild_info | [AtGuildInfo](#AtGuildInfo) | 频道信息  |

##### AtType

- @的类型

| 字段名              | 值   | 描述       |
|------------------|-----|----------|
| AT_EXPLICIT_USER | 1   | at特定人    |
| AT_ROLE_GROUP    | 2   | at角色组所有人 |
| AT_GUILD         | 3   | at频道所有人  |

##### AtUserInfo

- @用户信息

| 字段   | 类型     | 描述    |
|------|--------|-------|
| id   | string | 身份组ID |
| nick | string | 用户昵称  |

##### AtRoleInfo

- @身份组信息

| 字段      | 类型     | 描述    |
|---------|--------|-------|
| role_id | uint64 | 身份组ID |
| name    | string | 身份组名称 |
| color   | uint32 | 颜色值   |

##### AtGuildInfo

- @频道信息

| 字段         | 类型     | 描述   |
|------------|--------|------|
| guild_id   | string | 频道ID |
| guild_name | string | 频道名称 |

#### URLInfo

- 富文本 - 链接信息

| 字段           | 类型     | 描述     |
|--------------|--------|--------|
| url          | string | 链接地址   |
| display_text | string | 链接显示文本 |

#### EmojiInfo

- 富文本 - Emoji信息

| 字段   | 类型     | 描述   |
|------|--------|------|
| id   | string | 表情id |
| type | string | 表情类型 |
| name | string | 名称   |
| url  | string | 链接   |

#### ChannelInfo

- 富文本 - 子频道信息

| 字段           | 类型     | 描述    |
|--------------|--------|-------|
| channel_id   | uint64 | 子频道id |
| channel_name | string | 子频道名称 |

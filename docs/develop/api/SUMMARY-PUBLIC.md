* 频道 API
  * [频道对象(Guild)](openapi/guild/model.md)
  * [获取频道信息](openapi/guild/get_guild.md)
* 频道身份组 API
  * [身份组对象(Role)](openapi/guild/role_model.md)
  * [获取频道身份组列表](openapi/guild/get_guild_roles.md)
  * [创建频道身份组](openapi/guild/post_guild_role.md)
  * [修改频道身份组信息](openapi/guild/patch_guild_role.md)
  * [删除频道身份组](openapi/guild/delete_guild_role.md)
  * [增加频道身份组成员](openapi/guild/put_guild_member_role.md)
  * [删除频道身份组成员](openapi/guild/delete_guild_member_role.md)
* 成员 API
  * [成员对象(Member)](openapi/member/model.md)
  * [获取某个成员信息](openapi/member/get_member.md)
* 公告 API
  * [公告对象(Announces)](openapi/announces/model.md)
  * [创建频道全局公告](openapi/announces/post_guild_announces.md)
  * [删除频道全局公告](openapi/announces/delete_guild_announces.md)
  * [创建子频道公告](openapi/announces/post_channel_announces.md)
  * [删除子频道公告](openapi/announces/delete_channel_announces.md)
* 子频道 API
  * [子频道对象(Channel)](openapi/channel/model.md)
  * [获取子频道信息](openapi/channel/get_channel.md)
  * [获取频道下的子频道列表](openapi/channel/get_channels.md)
* 子频道权限 API
  * [子频道权限对象(ChannelPermissions)](openapi/channel_permissions/model.md)
  * [获取指定子频道的权限](openapi/channel_permissions/get_channel_permissions.md)
  * [修改指定子频道的权限](openapi/channel_permissions/put_channel_permissions.md)
* 消息 API
  * [消息对象(Message)](openapi/message/model.md)
  * [发送消息](openapi/message/post_messages.md)
  * [发送模板消息](openapi/message/post_ark_messages.md)
  * [消息内嵌格式](openapi/message/message_format.md)
  * [获取指定消息](openapi/message/get_message_of_id.md)
* 消息模板
  * [可用消息模板](openapi/message/message_template.md)
  * [embed消息](openapi/message/template/embed_message.md)
  * [链接+文本列表模板](openapi/message/template/template_23.md)
  * [文本+缩略图模板](openapi/message/template/template_24.md)
  * [大图模板](openapi/message/template/template_37.md)
* 表情
  * [表情(Emoji)](openapi/emoji/model.md)
* 表情表态
  * [表情表态(Reaction)](openapi/reaction/model.md)
* 音频 API
  * [音频对象(Audio)](openapi/audio/model.md)
  * [音频控制](openapi/audio/audio_control.md)
* 用户 API
  * [用户对象(User)](openapi/user/model.md)
  * [获取当前用户信息](openapi/user/me.md)
  * [获取当前用户频道列表](openapi/user/guilds.md)
* 日程 API
  * [日程对象(Schedule)](openapi/schedule/model.md)
  * [获取子频道日程列表](openapi/schedule/get_schedules.md)
  * [获取单个日程信息](openapi/schedule/get_schedule.md)
  * [创建日程](openapi/schedule/post_schedule.md)
  * [修改日程](openapi/schedule/patch_schedule.md)
  * [删除日程](openapi/schedule/delete_schedule.md)
* WebSocket API
  * [获取通用 WSS 接入点](openapi/wss/url_get.md)
  * [获取带分片 WSS 接入点](openapi/wss/shard_url_get.md)
* WebSocket 事件通知
  * [接入方法](gateway/reference.md)
  * [Shard](gateway/shard.md)
  * [Opcode](gateway/opcode.md)
  * [Intents](gateway/intents.md)
  * [频道事件](gateway/guild.md)
  * [子频道事件](gateway/channel.md)
  * [频道成员事件](gateway/guild_member.md)
  * [消息事件](gateway/message.md)
  * [表情表态事件](gateway/guild_message_reactions.md)
  * [音频事件](gateway/audio.md)
* 小程序场景支持
  * [开放数据加密](miniapp/opendata.md)
  * [获取频道和当前人信息](miniapp/interface.md)
* 错误处理
  * [API 错误码](openapi/error/error.md)
  * [WebSocket 错误码](gateway/error/error.md)

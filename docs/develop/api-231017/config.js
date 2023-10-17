module.exports = {
  "linkConst": "/develop/api-231017/",
  "nav": {
    "text": "API文档",
    "link": "/develop/api-231017/"
  },
  "sidebar": {
    "/develop/api-231017/": [
      "",
      {
        "title": "用户 API",
        "collapsable": true,
        "sidebarDepth": 1,
        "children": [
          "openapi/user/model",
          "openapi/user/me",
          "openapi/user/guilds"
        ]
      },
      {
        "title": "频道 API",
        "collapsable": true,
        "sidebarDepth": 1,
        "children": [
          "openapi/guild/model",
          "openapi/guild/get_guild"
        ]
      },
      {
        "title": "子频道 API",
        "collapsable": true,
        "sidebarDepth": 1,
        "children": [
          "openapi/channel/model",
          "openapi/channel/get_channels",
          "openapi/channel/get_channel",
          "openapi/channel/post_channels",
          "openapi/channel/patch_channel",
          "openapi/channel/delete_channel"
        ]
      },
      {
        "title": "成员 API",
        "collapsable": true,
        "sidebarDepth": 1,
        "children": [
          "openapi/member/model",
          "openapi/member/get_members",
          "openapi/member/get_member",
          "openapi/member/delete_member"
        ]
      },
      {
        "title": "频道身份组 API",
        "collapsable": true,
        "sidebarDepth": 1,
        "children": [
          "openapi/guild/role_model",
          "openapi/guild/get_guild_roles",
          "openapi/guild/post_guild_role",
          "openapi/guild/patch_guild_role",
          "openapi/guild/delete_guild_role",
          "openapi/guild/put_guild_member_role",
          "openapi/guild/delete_guild_member_role"
        ]
      },
      {
        "title": "子频道权限 API",
        "collapsable": true,
        "sidebarDepth": 1,
        "children": [
          "openapi/channel_permissions/model",
          "openapi/channel_permissions/get_channel_permissions",
          "openapi/channel_permissions/put_channel_permissions",
          "openapi/channel_permissions/get_channel_roles_permissions",
          "openapi/channel_permissions/put_channel_roles_permissions"
        ]
      },
      {
        "title": "消息 API",
        "collapsable": true,
        "sidebarDepth": 1,
        "children": [
          "openapi/message/model",
          "openapi/message/get_message_of_id",
          "openapi/message/post_messages",
          "openapi/message/delete_message",
          "openapi/message/post_ark_messages",
          "openapi/message/post_messages_reference",
          "openapi/message/message_format"
        ]
      },
      {
        "title": "消息频率 API",
        "collapsable": true,
        "sidebarDepth": 1,
        "children": [
          "openapi/setting/model",
          "openapi/setting/message_setting"
        ]
      },
      {
        "title": "消息模板",
        "collapsable": true,
        "sidebarDepth": 1,
        "children": [
          "openapi/message/message_template",
          "openapi/message/template/embed_message",
          "openapi/message/template/template_23",
          "openapi/message/template/template_24",
          "openapi/message/template/template_37"
        ]
      },
      {
        "title": "私信 API",
        "collapsable": true,
        "sidebarDepth": 1,
        "children": [
          "openapi/dms/model",
          "openapi/dms/post_dms",
          "openapi/dms/post_dms_messages",
          "openapi/dms/delete_dms"
        ]
      },
      {
        "title": "禁言 API",
        "collapsable": true,
        "sidebarDepth": 1,
        "children": [
          "openapi/guild/patch_guild_mute",
          "openapi/guild/patch_guild_member_mute",
          "openapi/guild/patch_guild_mute_multi_member"
        ]
      },
      {
        "title": "公告 API",
        "collapsable": true,
        "sidebarDepth": 1,
        "children": [
          "openapi/announces/model",
          "openapi/announces/post_guild_announces",
          "openapi/announces/delete_guild_announces",
          "openapi/announces/post_channel_announces",
          "openapi/announces/delete_channel_announces"
        ]
      },
      {
        "title": "精华消息 API",
        "collapsable": true,
        "sidebarDepth": 1,
        "children": [
          "openapi/pins/model",
          "openapi/pins/put_pins_message",
          "openapi/pins/delete_pins_message",
          "openapi/pins/get_pins_message"
        ]
      },
      {
        "title": "日程 API",
        "collapsable": true,
        "sidebarDepth": 1,
        "children": [
          "openapi/schedule/model",
          "openapi/schedule/get_schedules",
          "openapi/schedule/get_schedule",
          "openapi/schedule/post_schedule",
          "openapi/schedule/patch_schedule",
          "openapi/schedule/delete_schedule"
        ]
      },
      {
        "title": "表情",
        "collapsable": true,
        "sidebarDepth": 1,
        "children": [
          "openapi/emoji/model"
        ]
      },
      {
        "title": "表情表态 API",
        "collapsable": true,
        "sidebarDepth": 1,
        "children": [
          "openapi/reaction/model",
          "openapi/reaction/put_message_reaction",
          "openapi/reaction/delete_own_message_reaction"
        ]
      },
      {
        "title": "音频 API",
        "collapsable": true,
        "sidebarDepth": 1,
        "children": [
          "openapi/audio/model",
          "openapi/audio/audio_control"
        ]
      },
      {
        "title": "帖子 API",
        "collapsable": true,
        "sidebarDepth": 1,
        "children": [
          "openapi/forum/model",
          "openapi/forum/get_threads_list",
          "openapi/forum/get_thread",
          "openapi/forum/put_thread",
          "openapi/forum/delete_thread"
        ]
      },
      {
        "title": "API 接口权限 API",
        "collapsable": true,
        "sidebarDepth": 1,
        "children": [
          "openapi/api_permissions/model",
          "openapi/api_permissions/get_guild_api_permission",
          "openapi/api_permissions/post_api_permission_demand"
        ]
      },
      {
        "title": "WebSocket API",
        "collapsable": true,
        "sidebarDepth": 1,
        "children": [
          "openapi/wss/url_get",
          "openapi/wss/shard_url_get"
        ]
      },
      {
        "title": "WebSocket 事件通知",
        "collapsable": true,
        "sidebarDepth": 1,
        "children": [
          "gateway/reference",
          "gateway/shard",
          "gateway/opcode",
          "gateway/intents",
          "gateway/guild",
          "gateway/channel",
          "gateway/guild_member",
          "gateway/message",
          "gateway/direct_message",
          "gateway/guild_message_reactions",
          "gateway/audio",
          "gateway/forum"
        ]
      },
      {
        "title": "小程序场景支持",
        "collapsable": true,
        "sidebarDepth": 1,
        "children": [
          "miniapp/opendata",
          "miniapp/interface"
        ]
      },
      {
        "title": "错误处理",
        "collapsable": true,
        "sidebarDepth": 1,
        "children": [
          "openapi/error/error",
          "openapi/error/data/model",
          "gateway/error/error"
        ]
      }
    ]
  }
}
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
        "title": "用户端功能简介",
        "collapsable": true,
        "sidebarDepth": 2,
        "children": [
          "client-func/intro/baseinfo.md",
          "client-func/intro/datacard.md",
          "client-func/intro/find.md"
        ]
      },
      {
        "title": "接入开发准备",
        "collapsable": true,
        "sidebarDepth": 1,
        "children": [
          {
            "title": "接口通信框架",
            "collapsable": true,
            "sidebarDepth": 1,
            "children": [
              // "dev-prepare/interface-framework/README.md",
              "dev-prepare/interface-framework/api-use.md",
              "dev-prepare/interface-framework/event-emit.md"
            ]
          },
          "dev-prepare/unique-id.md"
        ]
      },
      {
        "title": "服务端接口",
        "collapsable": true,
        "sidebarDepth": 6,
        "children": [
          {
            "title": "消息相关",
            "collapsable": true,
            "sidebarDepth": 2,
            "children": [{
              "title": "消息收发",
              "collapsable": true,
              "sidebarDepth": 2,
              "children": [
                "server-inter/message/send-receive/send.md",
                "server-inter/message/send-receive/rich-text-media.md",
                "server-inter/message/send-receive/reset.md",
                "server-inter/message/send-receive/event.md",
              ]
            },
            "server-inter/message/message-type.md",
            {
              "title": "消息交互[3]",
              "collapsable": true,
              "sidebarDepth": 1,
              "children": [
                "server-inter/message/trans/emoji.md",
                "server-inter/message/trans/text-chain.md",
                "server-inter/message/trans/msg-btn.md",
              ]
            }],
          },
          {
            "title": "频道模块",
            "collapsable": true,
            "sidebarDepth": 1,
            "children": [
              {
                "title": "频道管理",
                "collapsable": true,
                "sidebarDepth": 1,
                "children": [
                  "server-inter/channel/manage/user/me.md",
                  "server-inter/channel/manage/guild/guilds.md",
                  "server-inter/channel/manage/guild/get_guild.md",
                  "server-inter/channel/manage/channel/get_channels.md",
                  "server-inter/channel/manage/channel/get_channel.md",
                  "server-inter/channel/manage/channel/post_channels.md",
                  "server-inter/channel/manage/channel/patch_channel.md",
                  "server-inter/channel/manage/channel/delete_channel.md",
                  "server-inter/channel/manage/event/guild.md",
                  "server-inter/channel/manage/event/channel.md",
                ]
              },
              {
                "title": "频道成员",
                "collapsable": true,
                "sidebarDepth": 1,
                "children": [
                  "server-inter/channel/role/get_online_nums.md",
                  "server-inter/channel/role/member/get_members.md",
                  "server-inter/channel/role/member/get_role_members.md",
                  "server-inter/channel/role/member/get_member.md",
                  "server-inter/channel/role/member/delete_member.md",
                  "server-inter/channel/role/guild_member.md",
                  "server-inter/channel/role/audio_or_live_channel_member.md",
                ]
              },
              {
                "title": "频道身份组与权限管理",
                "collapsable": true,
                "sidebarDepth": 1,
                "children": [
                  "server-inter/channel/role-group/get_guild_roles.md",
                  "server-inter/channel/role-group/post_guild_role.md",
                  "server-inter/channel/role-group/patch_guild_role.md",
                  "server-inter/channel/role-group/delete_guild_role.md",
                  "server-inter/channel/role-group/put_guild_member_role.md",
                  "server-inter/channel/role-group/delete_guild_member_role.md",
                  "server-inter/channel/role-group/channel_permissions/get_channel_permissions.md",
                  "server-inter/channel/role-group/channel_permissions/put_channel_permissions.md",
                  "server-inter/channel/role-group/channel_permissions/get_channel_roles_permissions.md",
                  "server-inter/channel/role-group/channel_permissions/put_channel_roles_permissions.md",
                ]
              },
              {
                "title": "接口授权管理",
                "collapsable": true,
                "sidebarDepth": 1,
                "children": [
                  "server-inter/channel/api_permissions/get_guild_api_permission.md",
                  "server-inter/channel/api_permissions/post_api_permission_demand.md",
                ]
              },
              {
                "title": "发言管理",
                "collapsable": true,
                "sidebarDepth": 1,
                "children": [
                  "server-inter/channel/speak/setting/message_setting.md",
                  "server-inter/channel/speak/patch_guild_mute.md",
                  "server-inter/channel/speak/patch_guild_member_mute.md",
                  "server-inter/channel/speak/patch_guild_mute_multi_member.md",
                ]
              },
              {
                "title": "内容管理",
                "collapsable": true,
                "sidebarDepth": 1,
                "children": [
                  "server-inter/channel/content/announces/post_guild_announces.md",
                  "server-inter/channel/content/announces/delete_guild_announces.md",
                  "server-inter/channel/content/pins/put_pins_message.md",
                  "server-inter/channel/content/pins/delete_pins_message.md",
                  "server-inter/channel/content/pins/get_pins_message.md",
                  "server-inter/channel/content/schedule/get_schedules.md",
                  "server-inter/channel/content/schedule/get_schedule.md",
                  "server-inter/channel/content/schedule/post_schedule.md",
                  "server-inter/channel/content/schedule/patch_schedule.md",
                  "server-inter/channel/content/schedule/delete_schedule.md",
                  "server-inter/channel/content/audio/audio_control.md",
                  "server-inter/channel/content/audio/put_mic.md",
                  "server-inter/channel/content/audio/delete_mic.md",
                  "server-inter/channel/content/forum/get_threads_list.md",
                  "server-inter/channel/content/forum/get_thread.md",
                  "server-inter/channel/content/forum/put_thread.md",
                  "server-inter/channel/content/forum/delete_thread.md",
                  "server-inter/channel/content/forum/forum.md",
                  "server-inter/channel/content/forum/open_forum.md",
                ]
              },
              {
                "title": "小程序相关",
                "collapsable": true,
                "sidebarDepth": 1,
                "children": [
                  "server-inter/channel/miniapp/opendata.md",
                  "server-inter/channel/miniapp/interface.md",
                ]
              },
            ]
          },
          "server-inter/group.md",
          "server-inter/user.md",
        ]
      },
    ]
  }
}
module.exports = {
  nav: {
    text: 'PythonSDK',
    link: '/develop/pythonsdk/',
  },
  sidebar: {
    '/develop/pythonsdk/': [
      '',
      {
        title: 'PythonSDK更新日志',
        path: 'changelog/',
        sidebarDepth: 0,
        sidebar: false
      },
      {
        title: '术语',
        collapsable: false,
        sidebarDepth: 0,
        children: [
          {title: '用户对象(User)', path: 'model/user'},
          {title: '接口权限API(APIPermission)', path: 'model/api_permission.md' },
          {title: '频道对象(Guild)', path: 'model/guild'},
          {title: '子频道对象(Channel)', path: 'model/channel'},
          {title: '子频道权限对象(ChannelPermissions)', path: 'model/channel_permission'},
          {title: '成员对象(Member)', path: 'model/member'},
          {title: '频道身份组对象(Role)', path: 'model/role'},
          {title: '消息对象(Message)', path: 'model/message'},
          {title: '私信对象(DMS)', path: 'model/dms'},
          {title: '语音对象(Audio)', path: 'model/audio'},
          {title: '公告对象(Announce)', path: 'model/announce'},
          {title: '精华消息对象(PinsMessage)', path: 'model/pins_message' },
          {title: '表情对象(Emoji)', path: 'model/emoji'},
          {title: '表情表态对象(Reaction)', path: 'model/reaction'},
          {title: '日程对象(Schedule)', path: 'model/schedule'},
        ],
      },
      {
        title: 'Client API',
        collapsable: false,
        children: [
          {
            title: '用户 API',
            collapsable: false,
            sidebarDepth: 0,
            children: [
              'api/user/me',
              'api/user/me_guilds'
            ],
          },
          {
            title: '频道 API',
            collapsable: false,
            sidebarDepth: 0,
            children: [
              'api/guild/get_guild'
            ],
          },
          {
            title: '子频道 API',
            collapsable: false,
            sidebarDepth: 0,
            children: [
              'api/channel/get_channel',
              'api/channel/get_channels',
              'api/channel/create_channel',
              'api/channel/update_channel',
              'api/channel/delete_channel',
            ],
          },
          {
            title: '子频道权限 API',
            collapsable: false,
            sidebarDepth: 0,
            children: [
              'api/channel_permissions/get_channel_permissions',
              'api/channel_permissions/update_channel_permissions',
              'api/channel_permissions/get_channel_role_permissions',
              'api/channel_permissions/update_channel_role_permissions',
            ],
          },
          {
            title: '成员 API',
            collapsable: false,
            sidebarDepth: 0,
            children: [
              'api/member/get_guild_member',
              'api/member/get_guild_members',
              'api/member/delete_guild_member'
            ],
          },
          {
            title: '频道身份组 API',
            collapsable: false,
            sidebarDepth: 0,
            children: [
              'api/guild/guild_role/get_guild_roles',
              'api/guild/guild_role/create_guild_role',
              'api/guild/guild_role/update_guild_role',
              'api/guild/guild_role/delete_guild_role',
              'api/guild/guild_role/create_guild_role_member',
              'api/guild/guild_role/delete_guild_role_member'
            ],
          },
          {
            title: '消息 API',
            collapsable: false,
            sidebarDepth: 0,
            children: [
              'api/message/get_message',
              'api/message/get_messages',
              'api/message/post_message',
              'api/message/recall_message',
              'api/message/post_ark_message',
              'api/message/message_template',
              'api/message/message_format',
              'api/message/post_reference_messages'
            ],
          },
          {
            title: '私信 API',
            collapsable: false,
            sidebarDepth: 0,
            children: [
              'api/dms/create_dms',
              'api/dms/post_dms',
            ],
          },
          {
            title: '表情表态 API',
            collapsable: false,
            sidebarDepth: 0,
            children: [
              'api/reaction/post_reaction.md',
              'api/reaction/delete_reaction.md'
            ],
          },
          {
            title: '禁言 API',
            collapsable: false,
            sidebarDepth: 0,
            children: [
              'api/mute/mute_all',
              'api/mute/mute_member',
            ],
          },
          {
            title: '公告 API',
            collapsable: false,
            sidebarDepth: 0,
            children: [
              'api/announce/create_guild_announce',
              'api/announce/delete_guild_announce',
              'api/announce/create_channel_announce',
              'api/announce/delete_channel_announce',
              'api/announce/post_recommended_channels',
            ],
          },
          {
            title: '日程 API',
            collapsable: false,
            sidebarDepth: 0,
            children: [
              'api/schedule/get_schedules',
              'api/schedule/get_schedule',
              'api/schedule/post_schedule',
              'api/schedule/update_schedule',
              'api/schedule/delete_schedule',
            ],
          },
          {
            title: '精华消息 API',
            collapsable: false,
            sidebarDepth: 0,
            children: [
              'api/pins_message/get_pins_message',
              'api/pins_message/put_pins_message',
              'api/pins_message/delete_pins_message',
            ],
          },
          {
            title: '音频 API',
            collapsable: false,
            sidebarDepth: 0,
            children: [
              'api/audio/post_audio'
            ],
          },
          {
            title: '接口权限 API',
            collapsable: false,
            sidebarDepth: 0,
            children: ['api/api_permissions/get_permissions','api/api_permissions/post_permission.md'],
          },
        ],
      },
      {
        title: 'WebSocket API',
        collapsable: false,
        sidebarDepth: 0,
        children: [{title: '事件监听', path: 'websocket/listen_events.md'}],
      },
    ],
  },
};

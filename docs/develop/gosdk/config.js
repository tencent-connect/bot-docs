module.exports = {
  nav: {
    text: 'GoSDK',
    link: '/develop/gosdk/',
  },
  sidebar: {
    '/develop/gosdk/': [
      '',
      {
        title: '术语',
        collapsable: false,
        sidebarDepth: 0,
        children: [
          {title: '用户对象(User)', path: 'model/user'},
          {title: '频道对象(Guild)', path: 'model/guild'},
          {title: '子频道对象(Channel)', path: 'model/channel'},
          {title: '子频道权限对象(ChannelPermissions)', path: 'model/channel_permission'},
          {title: '成员对象(Member)', path: 'model/member'},
          {title: '频道身份组对象(Role)', path: 'model/role'},
          {title: '消息对象(Message)', path: 'model/message'},
          {title: '语音对象(Audio)', path: 'model/audio'},
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
              'api/channel_permissions/get_channel_roles_permissions.md',
              'api/channel_permissions/update_channel_roles_permissions.md'
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
              'api/message/message_reference.md'
            ],
          },
          {
            title: '私信 API',
            collapsable: false,
            sidebarDepth: 0,
            children: [
              'api/direct_msg/create_direct_message.md',
              'api/direct_msg/post_direct_message.md'
            ]
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

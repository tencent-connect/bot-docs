module.exports = {
  nav: {
    text: 'PythonSDK',
    link: '/develop/pythonsdk/',
  },
  sidebar: {
    '/develop/pythonsdk/': [
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
              'api/message/post_ark_message',
              'api/message/message_template',
              'api/message/message_format',
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

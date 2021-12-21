module.exports = {
  nav: {
    text: 'NodeSDK',
    link: '/develop/nodesdk/',
  },
  sidebar: {
    '/develop/nodesdk/': [
      '',
      {
        title: '术语',
        collapsable: false,
        sidebarDepth: 0,
        children: [
          { title: '用户对象(User)', path: 'model/user' },
          { title: '频道对象(Guild)', path: 'model/guild' },
          { title: '子频道对象(Channel)', path: 'model/channel' },
          { title: '子频道权限对象(ChannelPermissions)', path: 'model/channel_permission' },
          { title: '成员对象(Member)', path: 'model/member' },
          { title: '频道身份组对象(Role)', path: 'model/role' },
          { title: '消息对象(Message)', path: 'model/message' },
          { title: '语音对象(Audio)', path: 'model/audio' },
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
            children: ['user/me'],
          },
          {
            title: '频道 API',
            collapsable: false,
            sidebarDepth: 0,
            children: ['guild/guilds', 'guild/get_guild'],
          },
          {
            title: '子频道 API',
            collapsable: false,
            sidebarDepth: 0,
            children: [
              'channel/get_channels',
              'channel/get_channel',
              'channel/post_channels',
              'channel/patch_channel',
              'channel/delete_channel',
            ],
          },
          {
            title: '子频道权限 API',
            collapsable: false,
            sidebarDepth: 0,
            children: [
              'channel_permissions/get_channel_permissions',
              'channel_permissions/put_channel_permissions',
            ],
          },
          {
            title: '成员 API',
            collapsable: false,
            sidebarDepth: 0,
            children: ['member/get_members', 'member/get_member', 'member/delete_member'],
          },

          {
            title: '频道身份组 API',
            collapsable: false,
            sidebarDepth: 0,
            children: [
              'guild/get_guild_roles',
              'guild/post_guild_role',
              'guild/patch_guild_role',
              'guild/delete_guild_role',
              'guild/put_guild_member_role',
              'guild/delete_guild_member_role',
            ],
          },
          {
            title: '消息 API',
            collapsable: false,
            sidebarDepth: 0,
            children: [
              'message/get_messages',
              'message/get_message_of_id',
              'message/post_messages',
              'message/message_template',
              'message/post_ark_messages',
              'message/message_format',
            ],
          },
          //   {
          //     title: '私信 API',
          //     collapsable: false,
          //     sidebarDepth: 0,
          //     children: [
          //       'dms/model.md',
          //       'dms/post_dms.md',
          //       'dms/post_dms_messages.md',
          //     ],
          //   },
          {
            title: '音频 API',
            collapsable: false,
            sidebarDepth: 0,
            children: ['audio/audio_control'],
          },
        ],
      },
      {
        title: 'WebSocket API',
        collapsable: false,
        sidebarDepth: 0,
        children: [{ title: 'wss 消息体', path: 'wss/model.md' }],
      },
    ],
  },
};

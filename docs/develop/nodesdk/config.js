module.exports = {
  nav: {
    text: 'NodeSDK',
    link: '/develop/nodesdk/',
  },
  sidebar: {
    '/develop/nodesdk/': [
      '',
      {
        title: 'NodeSDK',
        collapsable: false,
        children: [
          {
            title: '用户 API',
            collapsable: false,
            sidebarDepth: 0,
            children: ['user/model', 'user/me'],
          },
          {
            title: '频道 API',
            collapsable: false,
            sidebarDepth: 0,
            children: ['guild/model', 'guild/guilds', 'guild/get_guild'],
          },
          {
            title: '子频道 API',
            collapsable: false,
            sidebarDepth: 0,
            children: [
              'channel/model',
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
              'channel_permissions/model',
              'channel_permissions/get_channel_permissions',
              'channel_permissions/put_channel_permissions',
            ],
          },
          {
            title: '成员 API',
            collapsable: false,
            sidebarDepth: 0,
            children: [
              'member/model',
              'member/get_members',
              'member/get_member',
              'member/delete_member',
            ],
          },

          {
            title: '频道身份组 API',
            collapsable: false,
            sidebarDepth: 0,
            children: [
              'guild/role_model',
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
              'message/model',
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
            children: ['audio/model', 'audio/audio_control'],
          },
          {
            title: 'WebSocket API',
            collapsable: false,
            sidebarDepth: 0,
            children: ['wss/model'],
          },
        ],
      },
    ],
  },
};

module.exports = [
  {
    title: '用户 API',
    children: [
      {
        title: '用户对象(User)',
        path: 'openapi/user/model',
      },
      {
        title: '获取用户详情',
        path: 'openapi/user/me',
      },
      {
        title: '获取用户频道列表',
        path: 'openapi/user/guilds',
      },
    ],
  },
  {
    title: '频道 API',
    children: [
      {
        title: '频道对象(Guild)',
        path: 'openapi/guild/model',
      },
      {
        title: '获取频道详情',
        path: 'openapi/guild/get_guild',
      },
    ],
  },
  {
    title: '子频道 API',
    children: [
      {
        title: '子频道对象(Channel)',
        path: 'openapi/channel/model',
      },
      {
        title: '获取子频道列表',
        path: 'openapi/channel/get_channels',
      },
      {
        title: '获取子频道详情',
        path: 'openapi/channel/get_channel',
      },
      {
        title: '创建子频道',
        path: 'openapi/channel/post_channels',
      },
      {
        title: '修改子频道',
        path: 'openapi/channel/patch_channel',
      },
      {
        title: '删除子频道',
        path: 'openapi/channel/delete_channel',
      },
    ],
  },
  {
    title: '成员 API',
    children: [
      {
        title: '成员对象(Member)',
        path: 'openapi/member/model',
      },
      {
        title: '获取频道成员列表',
        path: 'openapi/member/get_members',
      },
      {
        title: '获取频道成员详情',
        path: 'openapi/member/get_member',
      },
      {
        title: '删除频道成员',
        path: 'openapi/member/delete_member',
      },
    ],
  },
  {
    title: '频道身份组 API',
    children: [
      {
        title: '身份组对象(Role)',
        path: 'openapi/guild/role_model',
      },
      {
        title: '获取频道身份组列表',
        path: 'openapi/guild/get_guild_roles',
      },
      {
        title: '创建频道身份组',
        path: 'openapi/guild/post_guild_role',
      },
      {
        title: '修改频道身份组',
        path: 'openapi/guild/patch_guild_role',
      },
      {
        title: '删除频道身份组',
        path: 'openapi/guild/delete_guild_role',
      },
      {
        title: '创建频道身份组成员',
        path: 'openapi/guild/put_guild_member_role',
      },
      {
        title: '删除频道身份组成员',
        path: 'openapi/guild/delete_guild_member_role',
      },
    ],
  },
  {
    title: '子频道权限 API',
    children: [
      {
        title: '子频道权限对象(ChannelPermissions)',
        path: 'openapi/channel_permissions/model',
      },
      {
        title: '获取子频道权限',
        path: 'openapi/channel_permissions/get_channel_permissions',
      },
      {
        title: '修改子频道权限',
        path: 'openapi/channel_permissions/put_channel_permissions',
      },
      {
        title: '获取子频道身份组权限',
        path: 'openapi/channel_permissions/get_channel_roles_permissions',
      },
      {
        title: '修改子频道身份组权限',
        path: 'openapi/channel_permissions/put_channel_roles_permissions',
      },
    ],
  },
  {
    title: '消息 API',
    children: [
      {
        title: '消息对象(Message)',
        path: 'openapi/message/model',
      },
      {
        inner: true,
        title: '获取消息列表',
        path: 'openapi/message/get_messages',
      },
      {
        title: '获取消息详情',
        path: 'openapi/message/get_message_of_id',
      },
      {
        title: '发送消息',
        path: 'openapi/message/post_messages',
      },
      {
        inner: true,
        title: '撤回消息',
        path: 'openapi/message/delete_message',
      },
      {
        title: '发送 ARK 模板消息',
        path: 'openapi/message/post_ark_messages',
      },
      {
        title: '发送引用消息',
        path: 'openapi/message/post_messages_reference',
      },
      {
        title: '消息内嵌格式',
        path: 'openapi/message/message_format',
      },
    ],
  },
  {
    title: '消息模板',
    children: [
      {
        title: '可用消息模板',
        path: 'openapi/message/message_template',
      },
      {
        title: 'embed消息',
        path: 'openapi/message/template/embed_message',
      },
      {
        title: '链接+文本列表模板',
        path: 'openapi/message/template/template_23',
      },
      {
        title: '文本+缩略图模板',
        path: 'openapi/message/template/template_24',
      },
      {
        title: '大图模板',
        path: 'openapi/message/template/template_37',
      },
    ],
  },
  {
    title: '私信 API',
    children: [
      {
        title: '私信对象(DMS)',
        path: 'openapi/dms/model',
      },
      {
        title: '创建私信',
        path: 'openapi/dms/post_dms',
      },
      {
        title: '发送私信',
        path: 'openapi/dms/post_dms_messages',
      },
      {
        inner: true,
        title: '撤回私信',
        path: 'openapi/dms/delete_dms',
      },
    ],
  },
  {
    title: '禁言 API',
    children: [
      {
        title: '禁言全员',
        path: 'openapi/guild/patch_guild_mute',
      },
      {
        title: '禁言指定成员',
        path: 'openapi/guild/patch_guild_member_mute',
      },
    ],
  },
  {
    title: '公告 API',
    children: [
      {
        title: '公告对象(Announces)',
        path: 'openapi/announces/model',
      },
      {
        title: '创建频道公告',
        path: 'openapi/announces/post_guild_announces',
      },
      {
        title: '删除频道公告',
        path: 'openapi/announces/delete_guild_announces',
      },
      {
        title: '创建子频道公告',
        path: 'openapi/announces/post_channel_announces',
      },
      {
        title: '删除子频道公告',
        path: 'openapi/announces/delete_channel_announces',
      },
    ],
  },
  {
    title: '日程 API',
    children: [
      {
        title: '日程对象(Schedule)',
        path: 'openapi/schedule/model',
      },
      {
        title: '获取日程列表',
        path: 'openapi/schedule/get_schedules',
      },
      {
        title: '获取日程详情',
        path: 'openapi/schedule/get_schedule',
      },
      {
        title: '创建日程',
        path: 'openapi/schedule/post_schedule',
      },
      {
        title: '修改日程',
        path: 'openapi/schedule/patch_schedule',
      },
      {
        title: '删除日程',
        path: 'openapi/schedule/delete_schedule',
      },
    ],
  },
  {
    title: '表情',
    children: [
      {
        title: '表情(Emoji)',
        path: 'openapi/emoji/model',
      },
    ],
  },
  {
    title: '表情表态',
    children: [
      {
        title: '表情表态(Reaction)',
        path: 'openapi/reaction/model',
      },
    ],
  },
  {
    title: '音频 API',
    children: [
      {
        title: '音频对象(Audio)',
        path: 'openapi/audio/model',
      },
      {
        title: '音频控制',
        path: 'openapi/audio/audio_control',
      },
    ],
  },
  {
    title: 'API 接口权限 API',
    children: [
      {
        title: 'API 对象(API)',
        path: 'openapi/api_permissions/model',
      },
      {
        title: '获取频道可用权限列表',
        path: 'openapi/api_permissions/get_guild_api_permission',
      },
      {
        title: '创建 API 接口权限授权链接',
        path: 'openapi/api_permissions/post_api_permission_demand',
      },
    ],
  },
  {
    title: 'WebSocket API',
    children: [
      {
        title: '获取通用 WSS 接入点',
        path: 'openapi/wss/url_get',
      },
      {
        title: '获取带分片 WSS 接入点',
        path: 'openapi/wss/shard_url_get',
      },
    ],
  },
  {
    title: 'WebSocket 事件通知',
    children: [
      {
        title: '接入方法',
        path: 'gateway/reference',
      },
      {
        title: 'Shard',
        path: 'gateway/shard',
      },
      {
        title: 'Opcode',
        path: 'gateway/opcode',
      },
      {
        title: 'Intents',
        path: 'gateway/intents',
      },
      {
        title: '频道事件',
        path: 'gateway/guild',
      },
      {
        title: '子频道事件',
        path: 'gateway/channel',
      },
      {
        title: '频道成员事件',
        path: 'gateway/guild_member',
      },
      {
        title: '消息事件',
        path: 'gateway/message',
      },
      {
        title: '私信事件',
        path: 'gateway/direct_message',
      },
      {
        title: '表情表态事件',
        path: 'gateway/guild_message_reactions',
      },
      {
        title: '音频事件',
        path: 'gateway/audio',
      },
    ],
  },
  {
    title: '小程序场景支持',
    children: [
      {
        title: '开放数据加密',
        path: 'miniapp/opendata',
      },
      {
        title: '获取频道和当前人详情',
        path: 'miniapp/interface',
      },
    ],
  },
  {
    title: '错误处理',
    children: [
      {
        title: 'API 错误码',
        path: 'openapi/error/error',
      },
      {
        title: 'API 业务报错返回的数据信息',
        path: 'openapi/error/data/model',
      },
      {
        title: 'WebSocket 错误码',
        path: 'gateway/error/error',
      },
    ],
  },
];

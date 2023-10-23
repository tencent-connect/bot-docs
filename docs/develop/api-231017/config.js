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
          "client-func/intro.md"
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
                "sidebarDepth": 2,
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
                "sidebarDepth": 2,
                "children": [
                ]
              },
              {
                "title": "频道身份组与权限管理",
                "collapsable": true,
                "sidebarDepth": 2,
                "children": [
                ]
              },
              {
                "title": "接口授权管理",
                "collapsable": true,
                "sidebarDepth": 2,
                "children": [
                ]
              },
              {
                "title": "发言管理",
                "collapsable": true,
                "sidebarDepth": 2,
                "children": [
                ]
              },
              {
                "title": "内容管理",
                "collapsable": true,
                "sidebarDepth": 2,
                "children": [
                ]
              },
              {
                "title": "小程序相关",
                "collapsable": true,
                "sidebarDepth": 2,
                "children": [
                ]
              },
            ]
          }
        ]
      },
    ]
  }
}
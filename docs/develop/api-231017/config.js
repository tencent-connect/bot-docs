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
        "collapsable": false,
        "sidebarDepth": 1,
        "path": "dev-prepare/",
        "children": [
          {
            "title": "接口通信框架",
            "collapsable": true,
            "sidebarDepth": 1,
            "children": [
              "interface-framework/api-use.md",
              "interface-framework/event-emit.md"
            ]
          },
          "unique-id.md"
        ]
      },
      {
        "title": "服务端接口",
        "collapsable": false,
        "sidebarDepth": 2,
        "path": "server-inter/",
        "children": [
          // "server-inter/message/mes.md",
          "channel.md",
        ]
      },
    ]
  }
}
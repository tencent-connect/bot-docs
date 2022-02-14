# 创建频道 API 接口权限授权链接

### 接口

`POST /guilds/{guild_id}/api_permission/demand`

### 功能描述

用于创建 API 接口权限授权链接，该链接指向`guild_id`对应的频道 。

- 每天只能在一个频道内发 `3` 条（默认值）频道权限授权链接。

### 示例图

![img.png](./post_api_permission_demand.png)

### Content-Type

`application/json`

### 参数

| 字段名          | 类型                                                                     | 描述                          |
|--------------|------------------------------------------------------------------------|-----------------------------|
| channel_id   | string                                                                 | 授权链接发送的子频道 id               |
| api_identify | [APIPermissionDemandIdentify](model.md#APIPermissionDemandIdentify) 对象 | api 权限需求标识对象                |
| desc         | string                                                                 | 机器人申请对应的 API 接口权限后可以使用功能的描述 |

### 返回

返回[APIPermissionDemand](model.md#APIPermissionDemand) 对象。

### 错误码

详见[错误码](../error/error.md)。

### 示例

请求数据包

```json
{
  "channel_id": "123456",
  "api_identify": {
    "path": "/guilds/{guild_id}",
    "method": "GET"
  },
  "desc": "显示频道信息"
}
```

响应数据包

```json
{
  "guild_id": "xxxxxx",
  "channel_id": "123456",
  "api_identify": {
    "path": "/guilds/{guild_id}",
    "method": "GET"
  },
  "title": "王者机器人申请授权频道信息接口权限",
  "desc": "申请权限后才能正常使用机器人显示频道信息功能"
}
```


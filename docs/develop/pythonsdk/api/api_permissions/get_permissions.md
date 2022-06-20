# 获取频道可用权限列表 

用于获取机器人在指定频道内可以使用的权限列表。

## 使用示例


```python
import os

import botpy
from botpy import logging
from botpy.message import Message

_log = logging.get_logger()


class MyClient(botpy.Client):

    async def on_at_message_create(self, message: Message):
      
        apis = await self.api.get_permissions(message.guild_id)
        for api in apis:
            _log.info("api: %s" % api["desc"] + ", status: %d" % api["auth_status"])

intents = botpy.Intents(public_guild_messages=True)
client = MyClient(intents=intents)
client.run(appid={appid}, token={token})
```

## 参数说明

| 字段名  | 必填 | 类型   | 描述                         |
| ------- | ---- | ------ | ---------------------------- |
| guild_id | 是   | string | [频道 ID](../../model/guild.md) |

## 返回说明

| 字段名 | 类型                              | 描述               |
| ------ | --------------------------------- | ------------------ |
| apis   | [APIPermission[]](#APIPermission) | 机器人可用权限列表 |

### APIPermission

| 字段名      | 类型   | 描述                                                    |
| ----------- | ------ | ------------------------------------------------------- |
| path        | string | API 接口名，例如 `/guilds/{guild_id}/members/{user_id}` |
| method      | string | 请求方法，例如 `GET`                                    |
| desc        | string | API 接口名称，例如 获取频道信                           |
| auth_status | number | 授权状态，auth_stats 为 `1` 时已授权                    |

## 返回示例

`data`：

```json
{
  "apis": [
    {
      "path": "/guilds/{guild_id}/members/{user_id}",
      "method": "GET",
      "desc": "获取当前频道成员信息",
      "auth_status": 0
    },
    {
      "path": "/channels/{channel_id}/messages",
      "method": "POST",
      "desc": "创建消息",
      "auth_status": 1
    }
  ]
}
```

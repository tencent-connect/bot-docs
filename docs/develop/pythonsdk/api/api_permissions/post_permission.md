# 创建频道 API 权限授权链接 

用于创建 API 接口权限授权链接，该链接指向 `guildID` 对应的频道 。调用成功后，参数指定的子频道会受到一条“申请授权【xxx】权限”消息，管理员点击可进行机器人 API 权限授予。

:::warning 注意

- 需要建立 ws 连接。
- 每天只能在一个频道内发 `3` 条（默认值）频道权限授权链接，如需调整，请联系平台申请权限。

:::

## 使用示例

```python
import qqbot

token = qqbot.Token({appid}, {token})

def demo():
    api = qqbot.APIPermissionAPI(token, False)
    identity = APIPermissionDemandIdentify(path, method)
    demand_to_create = PermissionDemandToCreate(channel_id, identity)
    demand = api.post_permission_demand(guild_id, demand_to_create)
```

#### async

```python
import qqbot

token = qqbot.Token({appid}, {token})

async def demo():
    api = qqbot.AsyncAPIPermissionAPI(token, False)
    identity = APIPermissionDemandIdentify(path, method)
    demand_to_create = PermissionDemandToCreate(channel_id, identity)
    demand = await api.post_permission_demand(guild_id, demand_to_create)
```

## 参数说明

| 字段名              | 必填 | 类型                                                  | 描述                         |
| ------------------- | ---- | ----------------------------------------------------- | ---------------------------- |
| guild_id             | 是   | string                                                | [频道 ID](../../model/guild.md) |
| permission_demand_to_create | 是   | [PermissionDemandToCreate](#PermissionDemandToCreate) | 授权链接对象                 |

### PermissionDemandToCreate

| 字段名       | 必填 | 类型                                                        | 描述                                              |
| ------------ | ---- | ----------------------------------------------------------- | ------------------------------------------------- |
| channel_id   | 是   | string                                                      | 授权链接发送的[子频道 ID](../../model/channel.md)    |
| api_identify | 是   | [APIPermissionDemandIdentify](#apipermissiondemandidentify) | API 权限需求标识对象                              |
| desc         | 否   | string                                                      | 机器人申请对应的 API 接口权限后可以使用功能的描述 |

### APIPermissionDemandIdentify

| 字段名 | 类型   | 描述                                                    |
| ------ | ------ | ------------------------------------------------------- |
| path   | string | API 接口名，例如 `/guilds/{guild_id}/members/{user_id}` |
| method | string | 请求方法，例如 `GET`                                    |

## 返回说明

返回 [APIPermissionDemand](#apipermissiondemand)对象。

### APIPermissionDemand

| 字段名       | 类型                                                        | 描述                                       |
| ------------ | ----------------------------------------------------------- | ------------------------------------------ |
| guild_id     | string                                                      | 申请接口权限的频道 ID                      |
| channel_id   | string                                                      | 接口权限需求授权链接发送的子频道 ID        |
| api_identify | [APIPermissionDemandIdentify](#apipermissiondemandidentify) | 权限接口唯一标识                           |
| title        | string                                                      | 接口权限链接中的接口权限描述信息           |
| desc         | string                                                      | 接口权限链接中的机器人可使用功能的描述信息 |

## 返回示例

`data`：

```json
{
  "guild_id": "123456",
  "channel_id": "112233",
  "api_identify": {
    "path": "/guilds/{guild_id}",
    "method": "GET"
  },
  "title": "申请授权【获取频道】权限",
  "desc": "允许授权后才能正常使用机器人「频道权限」功能"
}
```

此时打开“**channel_id**”对应的频道，可看到一条机器人发出的 API 授权申请消息。

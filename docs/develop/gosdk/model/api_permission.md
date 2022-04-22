# API 权限对象 

## 接口权限对象(APIPermission)

### APIPermission

| 字段名      | 类型   | 描述                                                    |
| ----------- | ------ | ------------------------------------------------------- |
| Path        | string | API 接口名，例如 `/guilds/{guild_id}/members/{user_id}` |
| Method      | string | 请求方法，例如 `GET`                                    |
| Desc        | string | API 接口名称，例如 获取频道信                           |
| AuthStatus | int | 授权状态，AuthStatus 为 `1` 时已授权                    |

## 接口权限需求对象（APIPermissionDemand）

### APIPermissionDemand

| 字段名       | 类型                                                        | 描述                                       |
| ------------ | ----------------------------------------------------------- | ------------------------------------------ |
| GuildID     | string                                                      | 申请接口权限的频道 ID                      |
| ChannelID   | string                                                      | 接口权限需求授权链接发送的子频道 ID        |
| APIIdentify | [APIPermissionDemandIdentify](#APIPermissionDemandIdentify) | 权限接口唯一标识                           |
| Title        | string                                                      | 接口权限链接中的接口权限描述信息           |
| Desc         | string                                                      | 接口权限链接中的机器人可使用功能的描述信息 |

## 接口权限需求标识对象（APIPermissionDemandIdentify）

### APIPermissionDemandIdentify

| 字段名 | 类型   | 描述                                                    |
| ------ | ------ | ------------------------------------------------------- |
| Path   | string | API 接口名，例如 `/guilds/{guild_id}/members/{user_id}` |
| Method | string | 请求方法，例如 `GET`                                    |
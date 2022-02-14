# 接口权限对象

### 接口权限对象 (APIPermission)

| 字段名            | 类型     | 描述                                             |
| -------------- | -----  | ----------------------------------             |
| path           | string | API 接口名，例如 /guilds/{guild_id}/members/{user_id} |
| method         | string | 请求方法，例如 GET                                    |
| desc           | string | API 接口名称，例如 获取频道信                           |
| auth_status    | int | 授权状态，auth_stats 为 1 时已授权                     |

### 接口权限需求对象（APIPermissionDemand）

| 字段名            | 类型     | 描述                                             |
| -------------- | -----  | ----------------------------------             |
| guild_id           | string | 申请接口权限的频道 id |
| channel_id         | string | 接口权限需求授权链接发送的子频道 id                                    |
| api_identify       |[APIPermissionDemandIdentify](#APIPermissionDemandIdentify)  | 权限接口唯一标识                                    |
| title              | string | 接口权限链接中的接口权限描述信息                                 |
| desc               | string | 接口权限链接中的机器人可使用功能的描述信息                 |

### 接口权限需求标识对象（APIPermissionDemandIdentify）

| 字段名            | 类型     | 描述                                             |
| -------------- | -----  | ----------------------------------             |
| path           | string | API 接口名，例如 /guilds/{guild_id}/members/{user_id} |
| method         | string | 请求方法，例如 GET                                    |

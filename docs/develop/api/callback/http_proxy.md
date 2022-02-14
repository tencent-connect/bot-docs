# http 代理

### 功能描述

- 一些情况下需要从 QQ 上发请求到开发者的 http 接口上，为了保障数据安全，所以需要通过 http 带来转发请求
- http 代理会将用户的 QQ 号转换为用户在机器人场景的 `user_id` 方便开发者基于用户 ID 做数据关联
- 如果用在发送 ark 消息之后，与 ark 内部进行交互的场景，请开发者下发消息的时候自行下发 `guild_id` 到 ark 中，然后又 ark 通过固定字段透传回接口。

### 开发者提供回调示例

`https://www.thirdsite.com/xxx`

### 请求方式

`POST`

### Content-Type

`application/json`

### 请求数据

[Interaction](./model.md#Interaction)对象，其中

`Interaction.type = 10` 对应 `InteractionType` 中的 `HTTP_PROXY`

`Interaction.data.type = 10` 对应 `InteractionDataType` 中的 `HTTP_PROXY`

#### Interaction.data.resolved 参数 [InteractionData.resolved](./model.md#InteractionData)

| 字段名      | 类型   | 描述                                 |
| ----------- | ------ | ------------------------------------ |
| user_id     | string | 用户 ID                              |
| request     | string | 原始的需要发送给开发者的数据，纯透传 |
| member_nick | string | 用户昵称                             |

### 第三方需要返回的数据

返回的 `Content-Type` 目前只支持 `application/json`

`http_proxy` 会把从第三方收到的 http body 原样返回给调用方。

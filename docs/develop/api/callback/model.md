# 回调对象

用户在频道内使用机器人相关功能时产生与机器人交互的请求，平台会以 `Interaction` 对象的形式发送到第三方提供的回调接口上。

### Interaction

| 字段名         | 类型                                     | 描述             |
| ---            | ---                                      | ---              |
| application_id | uint64                                   | 应用id           |
| type           | uint32                                   |  [InteractionType](#InteractionType) |
| data           | object                                    | [InteractionData](#InteractionData)        |
| version        | uint32                                   | 版本, 目前为值 1 |

### InteractionType

| 值       | 描述           |
| ------------ | -----------------    |
| 1            | PING |
| 2            | APPLICATION_COMMAND ，来自QQ客户端的请求，目的是实现具体功能 |
| 10            | HTTP_PROXY，来自 cgi 的请求代理，目的是为了基于签名来保证一些数据的安全透传  |


### InteractionData

| 字段名      | 类型                                | 描述         |
| ----------- | ------------------------------------| ------------ |
| type        | uint32                              | 类型, [InteractionDataType](#InteractionDataType)|
| resolved    | Resolved object                     | 不同回调类型，使用对应的Resolved结构,见对应的场景文档 |

### InteractionDataType

| 值       | 描述           |
| ------------ | ----------------- |
| 9            | CHAT_INPUT_SEARCH 内联搜索|
| 10           | HTTP_PROXY CGI 代理 |

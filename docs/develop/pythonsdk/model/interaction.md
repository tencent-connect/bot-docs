# 互动回调对象

互动回调是用户在频道进行相关的操作后产生的事件。平台会将这些事件处理后发送回调给开发者端。 开发者端可以对回调进行响应和用户产生互动。

平台给开发者端发送的回调分两种情况
1. 若机器人配置了回调接口(开发者提供回调地址和机器人botAppID，联系平台运营人员进行配置)，则根据回调地址进行响应操作。
2. 若机器人没有配置回调接口，则会触发 [EventInteractionCreate](../websocket/listen_events.md#wsevent) 事件，事件携带 [Interaction](#interaction) 对象。

### 注意事项

请注意：开发者接收到回调数据之后，需要基于 InteractionType 和 InteractionDataType 来进行具体逻辑的执行

## Interaction

用户在频道内使用机器人相关功能时产生与机器人交互的请求，平台会以 Interaction 对象的形式发送到第三方提供的回调接口上

| 字段名            | 类型                               | 描述                      |
| ----------       | --------------------------------- | ------------------------- |
| id               | string                            | 互动事件唯一标识，只有在 interaction 事件中才有值。      |
| application_id   | int                               | 应用id     |
| type             | int                               | [InteractionType](#interactiontype) |
| data             | Object                            | [InteractionData](#interactiondata)                  |
| guild_id         | int                               | 频道ID，当 InteractionDataType 为 INLINE_KEYBOARD_BUTTON_CLICK 时有此项              |
| channel_id       | int                               | 子频道ID，当 InteractionDataType 为 INLINE_KEYBOARD_BUTTON_CLICK 时有此项              |
| version          | int                               | 版本, 目前为值 1              |

## InteractionData

| 字段名    | 类型   | 描述                                                         |
| ------   | ------ | ------------------------------------------------------------ |
| type     | int | 类型，[InteractionDataType](#interactiondatatype)            |
| resolved | resolved object | 不同回调类型，使用对应的Resolved结构,见对应的场景文档 |

## InteractionType

| 值   | 描述  |
| ---  | ---- |
| 9    | CHAT_INPUT_SEARCH 内联搜索 |
| 10   | HTTP_PROXY CGI 代理 |
| 11   | INLINE_KEYBOARD_BUTTON_CLICK 消息按钮组件按钮点击 |

## InteractionDataType

| 值   | 描述  |
| ---  | ---- |
| 1    | PING |
| 2    | APPLICATION_COMMAND ，来自QQ客户端的请求，目的是实现具体功能 |
| 10   | HTTP_PROXY，来自 cgi 的请求代理，目的是为了基于签名来保证一些数据的安全透传 |
| 11   | INLINE_KEYBOARD，来自消息按钮组件请求，目的是为了回调按钮数据 |

## 互动回调事件监听

在频道内，点击某个 markdown 的按钮后，回收到互动事件回调

### 代码示例

```python
async def _interaction_handler(event, interaction: qqbot.Interaction):
    interaction_api = qqbot.AsyncInteractionAPI(t_token, False)
    data = InteractionData(type=interaction.data.type, resolved="Test")
    await interaction_api.put_interaction(interaction.id, data)


if __name__ == "__main__":
    t_token = qqbot.Token(test_config["token"]["appid"], test_config["token"]["token"])
    qqbot_handler = qqbot.Handler(qqbot.HandlerType.INTERACTION_CREATE_HANDLER, _interaction_handler)
    qqbot.async_listen_events(t_token, False, qqbot_handler)
```


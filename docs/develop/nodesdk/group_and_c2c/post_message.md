# 发送消息 <Badge text="v2.10.0" />

## 功能描述

- 主动消息与被动消息说明： QQ 用户可以在 QQ 客户端主动设置是否接收机器人发送的主动消息，如果设置了关闭，主动消息一律发送失败。
- 单聊
  - 主动消息每月 4 条，超额会发送失败。（例如：给相同用户每月最多发 4 条）
  - 被动消息（回复类）有效时间为 60 分钟，每个消息最多回复 5 次，超时或超频会发送（回复）失败；
- 群聊
  - 主动消息每月 4 条，超额会发送失败。（例如：给相同群每月最多发 4 条）
  - 被动消息（回复类）有效时间为 5 分钟，每个消息最多回复 5 次，超时或超频会发送（回复）失败；

## 使用示例

```js
/** 单聊 */
async function demo() {
  const res = await client.C2cAPI.postMessage(openid, message);
}

/** 群聊 */
async function demo() {
  const res = await client.GroupAPI.postMessage(group_openid, message);
}
```

## 参数说明

| 字段名  | 必填 | 类型                                                           | 描述                                                 |
| ------- | ---- | -------------------------------------------------------------- | ---------------------------------------------------- |
| openid | 是（单聊）  | string                                                         | QQ 用户的 openid，可在各类事件中获得。                       |
| group_openid | 是（群聊）   | string                                                         | 群号，可在各类事件中获得。|
| message  | 是   | [TMessage](#tmessage) | 消息体  |


### `TMessage`

| 字段              | 类型                      | 说明                                                                                                        |
|-------------------|---------------------------|-------------------------------------------------------------------------------------------------------------|
| `content`         | `string`                  | 文本内容                                                                                                    |
| `msg_type`        | `0 \| 2 \| 3 \| 4 \| 7`   | 消息类型：<br> **`0`** 文本<br> **`2`** markdown<br> **`3`** ark<br> **`4`** embed<br> **`7`** media 富媒体 |
| `markdown`        | [`TMarkdown`](#tmarkdown)               | Markdown 消息                                                                                               |
| `keyboard`        | [`TKeyboard`](#tkeyboard)               | keyboard 消息                                                                                                    |
| `ark`             | [`TArk`](#tark)                    | Ark 消息                                                                                                   |
| `media`           | [`TMedia`](#tmedia)                  | 媒体数据                                                                                                    |
| `message_referance`| `unknown`                | 消息引用 <br> @future 暂未支持                                                                             |
| `event_id`        | `string`                  | 前置收到的事件 ID，用于发送被动消息 <br> 支持事件：`INTERACTION_CREATE`、`C2C_MSG_RECEIVE` 等                 |
| `msg_id`          | `string`                  | 前置收到的用户发送过来的消息 ID，用于发送被动消息（回复）                                                    |
| `msg_seq`         | `number`                  | 回复消息的序号，与 `msg_id` 联合使用，避免相同消息 ID 回复重复发送，不填默认是 `1`                            |

### `TMessageResult`

| 字段       | 类型       | 说明       |
|------------|------------|------------|
| `id`       | `string`   | 消息唯一 ID |
| `timestamp`| `number`   | 发送时间   |

### `TMarkdown`

| 字段              | 类型                         | 说明                     |
|-------------------|------------------------------|--------------------------|
| `content`         | `string`                     | 原生 markdown 文本内容   |
| `custom_template_id` | `string`                   | markdown 模版 id         |
| `params`          | `{ key: unknown; values: unknown }[]` | 模版内变量与填充值的 kv 映射 |

### `TKeyboard`

| 字段              | 类型                         | 说明                     |
|-------------------|------------------------------|--------------------------|
| `id`              | `string`                     | 按钮 ID，在一个 keyboard 消息内设置唯一 |
| `render_data`     | `{ label: string; visited_label: string; style: 0 \| 1; }` | 按钮渲染数据             |
| `action`          | `{ type: 0 \| 1 \| 2; permission: { type: 0 \| 1 \| 2 \| 3; specify_user_ids?: string[]; specify_role_ids?: string[]; }; data: string; reply?: boolean; enter?: boolean; anchor?: number; click_limit?: number; at_bot_show_channel_list?: boolean; unsupport_tips: string; }` | 按钮操作数据             |

### `TArk`

| 字段              | 类型                         | 说明                     |
|-------------------|------------------------------|--------------------------|
| `template_id`     | `number`                     | 模版 id，管理端可获得或内邀申请获得 |
| `kv`              | `{ key: string; value: string }[] \| { key: string; obj: { obj_kv: { key: string; value: string }[] }[] }[]` | 模版内变量与填充值的 kv 映射 |

### `TMedia`

| 字段              | 类型                         | 说明                     |
|-------------------|------------------------------|--------------------------|
| `file_type`       | `1 \| 2 \| 3 \| 4`           | 媒体类型：<br> **`1`** 图片<br> **`2`** 视频<br> **`3`** 语音<br> **`4`** 文件（暂不开放） |
| `url`             | `string`                     | 需要发送媒体资源的 url    |
| `srv_send_msg`    | `boolean`                    | 设置 `true` 会直接发送消息到目标端，且会占用主动消息频次 |
| `file_data`       | `unknown`                    | @future 【暂未支持】      |
| `file_info`       | `string`                     | 来自富媒体消息上传       |

## 返回参数
|属性|类型|说明|
|---|---|---|
|id|string|消息唯一ID|
|timestamp|number|发送时间|

## 返回示例

```json 
{
    "id": "",
    "timestamp": 1688488488
}
```

# 发送富媒体消息 <Badge text="v2.10.0" />

## 功能描述

仅用于在QQ单聊和QQ群聊内，发送图片、视频、语音、文件的相关富媒体资源在消息收发的候使用。 本接口有以下两种使用方式：

- 当 `srv_send_msg = true` 时，消息会直接发送到目标端，占用 主动消息频次，超频会发送失败。

- 当 `srv_send_msg = false` 时，消息不会直接发送到目标端，返回的 file_info 字段数据，可使用在消息发送接口 `media` 字段中，`file_info` 有 过期时间 ，开发者需要自行维护有效期，过期需要重新获得新的 `file_info`，`file_info` 不受发送的目标端影响，一个 `file_info` 可复用发送到多个群或多个用户（注意：用 `GroupAPI` 上传的文件，仅能发到群聊内，用 `C2cAPI` 上传的文件，也仅能发送到单聊）。

推荐使用第 2 种方式

## 使用示例

- 单聊
```js
async function demo() {
    const res = await client.c2cApi.files('openid', {
      file_type: 1,
      url: '',
      srv_send_msg: false,
    })

    const result = client.c2cApi.postMessage('openid', {
			msg_type: 7,
			media: {
				file_info: res.data.file_info,
			},
			msg_id: 'msg_id',
			event_id: 'event_id',
		})
}
```

- 群聊
```js
async function demo() {
    const res = await client.groupApi.files('group_openid', {
      file_type: 1,
      url: '',
      srv_send_msg: false,
    })

    const result = client.groupApi.postMessage('group_openid', {
			msg_type: 7,
			media: {
				file_info: res.data.file_info,
			},
			msg_id: 'msg_id',
			event_id: 'event_id',
		})
}
```

## 参数说明

| 字段名  | 必填 | 类型                                                           | 描述                                                 |
| ------- | ---- | -------------------------------------------------------------- | ---------------------------------------------------- |
| openid | 是（单聊）  | string                                                         | QQ 用户的 openid，可在各类事件中获得。                       |
| group_openid | 是（群聊）   | string                                                         | 群号，可在各类事件中获得。|
| TMedia  | 是  | [TMedia](./post_message.md#tmedia) | 富媒体对象  |


## 返回参数

| 字段      | 类型       | 说明                                                                 |
|-----------|------------|----------------------------------------------------------------------|
| `file_uuid` | `string` | 文件 ID                                                              |
| `file_info` | `string` | 文件信息，用于发消息接口的 `media` 字段使用                           |
| `ttl`       | `number` | 有效期，表示剩余多少秒到期，到期后 `file_info` 失效，等于 `0` 时表示可长期使用 |
| `id`        | `string` | 发送消息的唯一 ID，当 `srv_send_msg` 设置为 `true` 时返回            |

## 返回示例

```json 
{
    "file_uuid": "f3d2f5b7-7f3a-4d8a-9e2d-8e8d8e8e8e8e",
    "file_info": "",
    "ttl": 86400,
    "id": "id"
}
```

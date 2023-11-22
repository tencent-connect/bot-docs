# 事件

## 单聊消息

<!-- > 用户在单聊发送消息给机器人 -->

::: tip 说明
用户在单聊发送消息给机器人
:::


- **基本概况**

<table>
	<tr>
	  <th colspan="2">基本</th>
	</tr>
	<tr>
    <td>intents</td>
    <td>1<<25</td>
	</tr>
	<tr>
    <td>事件类型</td>
    <td>C2C_MESSAGE_CREATE</td>
	</tr>
	<tr>
    <td>触发场景</td>
    <td>用户在单聊发送消息给机器人</td>
	</tr>
  <tr>
    <td>权限要求</td>
    <td>无特殊要求</td>
	</tr>
  <tr>
    <td>推送方式</td>
    <td>Websocket</td>
	</tr>
</table>

- **事件字段**

| **属性** | **类型** | **说明** |
| --- | --- | --- |
| id | string | 平台方消息ID，可以用于被动消息发送 |
| author | object | 发送者 {"user_openid": "xxx"} // 用户 openid |
| content | string | 文本消息内容 |
| timestamp | string | 消息生产时间（RFC3339） |
| attachments | object[] | 富媒体文件附件，文件类型："图片，语音，视频，文件"<br/>{"content_type": "", "filename": "", "height": "", "width": "", "size": "", "url": ""} |


- **事件示例**

```json
{
    "op": 0,
    "s": 2,
    "t": "C2C_MESSAGE_CREATE",
    "id": "C2C_MESSAGE_CREATE:051c863a-05d1-483d-8fd5-15b4e1d7ea1a",
    "d": {
        "author": {
            "user_openid": "E4F4AEA33253A2797FB897C50B81D7ED"
        },
        "content": "123",
        "id": "ROBOT1.0_.b6nx.CVryAO0nR58RXuU6SC.m92gc19j02qKqdm8ek!",
        "timestamp": "2023-11-06T13:37:18+08:00"
    }
}
```

- **其他说明**

为了确保消息可到达，极端情况下，相同的 msg_id 的消息会有概率重复推送，当开发者在做“被动回复消息”响应业务的时候，如果开发者不对 msg_id 的回复做存储排重后的回复逻辑，很可能会回复了两条相同的消息给用户，这里我们引入了一个 `msg_seq` 的字段，便于过滤重复消息响应，可参考消息发送接口 msg_seq 的用法。

## 群聊@机器人

<!-- > 用户在群内@机器人发动的消息 -->
::: tip 说明
用户在群内@机器人发动的消息
:::

- **基本概况**

<table>
	<tr>
	  <th colspan="2">基本</th>
	</tr>
	<tr>
    <td>intents</td>
    <td>1<<25</td>
	</tr>
	<tr>
    <td>事件类型</td>
    <td>GROUP_AT_MESSAGE_CREATE</td>
	</tr>
	<tr>
    <td>触发场景</td>
    <td>用户在群聊@机器人发送消息</td>
	</tr>
  <tr>
    <td>权限要求</td>
    <td>无特殊要求</td>
	</tr>
  <tr>
    <td>推送方式</td>
    <td>Websocket</td>
	</tr>
</table>

- **事件字段**

| **属性** | **类型** | **说明** |
| --- | --- | --- |
| id | string | 平台方消息 ID，可以用于被动消息发送 |
| author | object | 发送者 {"member_openid": "xxx"} // 用户在本群的 member_openid |
| content | string | 消息内容 |
| timestamp | string | 消息生产时间（RFC3339） |
| group_openid | string | 群聊的 openid |
| attachments | object[] | 富媒体文件附件，文件类型："图片，语音，视频，文件"<br/>{"content_type": "", "filename": "", "height": "", "width": "", "size": "", "url": ""} |

- **事件示例**

```json
// Websocket
{
    "op": 0,
    "s": 3,
    "t": "GROUP_AT_MESSAGE_CREATE",
    "id": "GROUP_AT_MESSAGE_CREATE:87612938-5b4b-441f-b4aa-2c0266092fe0",
    "d": {
        "author": {
            "member_openid": "E4F4AEA33253A2797FB897C50B81D7ED"
        },
        "content": " 123",
        "group_openid": "C9F778FE6ADF9D1D1DBE395BF744A33A",
        "id": "ROBOT1.0_eBIyWnxpmSu6uLQ7u7fU0eGloKGYg4eEa737vRyKnMCgyZjKi7JLYkQ9B0VapbiY",
        "timestamp": "2023-11-06T13:37:18+08:00"
    }
}
```

- **其他说明**

为了确保消息可到达，极端情况下，相同的 msg_id 的消息会有概率重复推送，当开发者在做“被动回复消息”响应业务的时候，如果开发者不对 msg_id 的回复做存储排重后的回复逻辑，很可能会回复了两条相同的消息给用户，这里我们引入了一个 `msg_seq` 的字段，便于过滤重复消息响应，可参考消息发送接口 msg_seq 的用法。


<!-- ## 🚫群聊全量消息（私域）

「暂不开放」用户在群内发送的所有聊天消息

## 🚫群聊关键词消息

「暂不开放」用户在群内发送的消息命中了某些关键词 -->

## 频道私信消息

用户在频道私信给机器人发送的消息

- **基本概况**

<table>
	<tr>
	  <th colspan="2">基本</th>
	</tr>
	<tr>
    <td>事件类型</td>
    <td>DIRECT_MESSAGE_CREATE</td>
	</tr>
	<tr>
    <td>触发场景</td>
    <td>用户在频道私信内发送消息给机器人</td>
	</tr>
  <tr>
    <td>权限要求</td>
    <td>无特殊要求</td>
	</tr>
  <tr>
    <td>推送方式</td>
    <td>Websocket</td>
	</tr>
</table>

### 发送时机

- 用户通过私信发消息给机器人时
- 由于私信场景无法设置沙箱频道，目前私信事件不支持沙箱环境，开发者可以通过用户 id 白名单的方式来调试私信

### 内容

内容为 [Message](../template/model.md#message) 对象

### 示例

```json
{
    "author": {
        "avatar": "http://thirdqq.qlogo.cn/0",
        "bot": false,
        "id": "1234",
        "username": "abc"
    },
    "channel_id": "100010",
    "content": "ndnnd",
    "guild_id": "18700000000001",
    "id": "0812345677890abcdef",
    "member": {
        "joined_at": "2021-04-12T16:34:42+08:00",
        "roles": [
            "1"
        ]
    },
    "timestamp": "2021-05-20T15:14:58+08:00"
}
```

## 文字子频道@机器人

用户在文字子频道内@机器人发送的消息

- **基本概况**

<table>
	<tr>
	  <th colspan="2">基本</th>
	</tr>
	<tr>
    <td>事件类型</td>
    <td>AT_MESSAGE_CREATE</td>
	</tr>
	<tr>
    <td>触发场景</td>
    <td>用户在频道私信内发送消息给机器人</td>
	</tr>
  <tr>
    <td>权限要求</td>
    <td>无特殊要求</td>
	</tr>
  <tr>
    <td>推送方式</td>
    <td>Websocket</td>
	</tr>
</table>

### 发送时机

- 用户发送消息，@当前机器人或回复机器人消息时
- 为保障消息投递的速度，消息顺序我们虽然会尽量有序，但是并不保证是严格有序的，如开发者对消息顺序有严格有序的需求，可以自行缓冲消息事件之后，基于 Message.seq 进行排序

### 内容

内容为 [Message](../template/model.md#message) 对象

### 示例

```json
{
  "author": {
    "avatar": "http://thirdqq.qlogo.cn/0",
    "bot": false,
    "id": "1234",
    "username": "abc"
  },
  "channel_id": "100010",
  "content": "ndnnd",
  "guild_id": "18700000000001",
  "id": "0812345677890abcdef",
  "member": {
    "joined_at": "2021-04-12T16:34:42+08:00",
    "roles": ["1"]
  },
  "timestamp": "2021-05-20T15:14:58+08:00",
  "seq": 101
}
```

## 文字子频道全量消息（私域）

用户在文字子频道内发送的所有聊天消息（私域）

- **基本概况**

<table>
	<tr>
	  <th colspan="2">基本</th>
	</tr>
	<tr>
    <td>事件类型</td>
    <td>MESSAGE_CREATE</td>
	</tr>
	<tr>
    <td>触发场景</td>
    <td>用户在频道私信内发送消息给机器人</td>
	</tr>
  <tr>
    <td>权限要求</td>
    <td>无特殊要求</td>
	</tr>
  <tr>
    <td>推送方式</td>
    <td>Websocket</td>
	</tr>
</table>

### 发送时机

- 用户发送消息，@当前机器人或回复机器人消息时
- 为保障消息投递的速度，消息顺序我们虽然会尽量有序，但是并不保证是严格有序的，如开发者对消息顺序有严格有序的需求，可以自行缓冲消息事件之后，基于 Message.seq 进行排序

### 内容

内容为 [Message](../template/model.md#message) 对象

### 示例

```json
{
  "author": {
    "avatar": "http://thirdqq.qlogo.cn/0",
    "bot": false,
    "id": "1234",
    "username": "abc"
  },
  "channel_id": "100010",
  "content": "ndnnd",
  "guild_id": "18700000000001",
  "id": "0812345677890abcdef",
  "member": {
    "joined_at": "2021-04-12T16:34:42+08:00",
    "roles": ["1"]
  },
  "timestamp": "2021-05-20T15:14:58+08:00",
  "seq": 101
}
```


<!-- ## 🚫文字子频道关键词消息

「暂不开放」用户在文字子频道内发送的消息命中了某些关键词 -->

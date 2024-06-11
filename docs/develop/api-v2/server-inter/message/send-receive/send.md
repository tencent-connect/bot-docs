# 发送消息
<!-- > 发送消息分为，主动推送与被动回复，主动消息和被动消息在不同的场景下，发送的频次有不同的规则。
> 发送消息的接口有4个场景：QQ单聊、QQ群聊、文字子频道、频道私信 -->
::: tip 说明
发送消息分为，主动推送与被动回复，主动消息和被动消息在不同的场景下，发送的频次有不同的规则。
发送消息的接口有`4`个场景：QQ单聊、QQ群聊、文字子频道、频道私信
:::
主动消息与被动消息说明：
QQ 用户可以在 QQ 客户端主动设置是否接收机器人发送的主动消息，如果设置了关闭，主动消息一律发送失败。
- 单聊
  - 主动消息每月 `4 条`，超额会发送失败。（例如：给相同用户每月最多发 4 条）
  - 被动消息（回复类）有效时间为 `60 分钟`，每个消息最多回复 `5 次`，超时或超频会发送（回复）失败；
- 群聊
  - 主动消息每月 `4 条`，超额会发送失败。（例如：给相同群每月最多发 4 条）
  - 被动消息（回复类）有效时间为 `5 分钟`，每个消息最多回复 `5 次`，超时或超频会发送（回复）失败；
- 文字子频道
  - 主动消息在频道主或管理设置了情况下，按设置的数量进行限频。在未设置的情况遵循如下限制:
    - 主动推送消息，默认每天往每个子频道可推送的消息数是 `20` 条，超过会被限制。
    - 主动推送消息在每个频道中，每天可以往 `2` 个子频道推送消息。超过后会被限制。
  - 不论主动消息还是被动消息，在一个子频道中，`每秒` 最多可发送 `5 条` 消息。
  - 被动回复消息有效期为 `5 分钟`，超时会发送失败。
  - 发送消息接口要求机器人接口需要连接到 `WebSocket` 上保持在线状态
  - 有关主动消息审核，可以通过 `事件订阅 Intents` 中审核事件 `MESSAGE_AUDIT` 返回 `MessageAudited` 对象获取结果。
- 频道私信
  - 私信场景下，每个机器人每天可以对一个用户发 `2 条` 主动消息。
  - 私信场景下，每个机器人每天累计可以发 `200 条` 主动消息。
  <!-- - 私信场景下，被动消息没有条数限制。 -->
  - 被动回复消息有效期为 `5 分钟`，超时会发送失败。
 
发动的消息内容包含 URL 的说明：

如开发者需要在消息内容发送含有 url 信息的消息，请现在 q.qq.com 后台-开发设置-消息URL配置 预先配置，否则会发送失败。
调用发消息 http 接口的 timeout 建议设置最低为 5 秒，避免出现实际消息已发送成功，但没接收到同步的结果返回。

## 单聊

<!-- > 单独发动消息给用户。 -->
::: tip 说明
单独发动消息给用户。
:::
- **请求**
<table>
    <tr>
      <th colspan="2">基本</th>
    </tr>
    <tr>
    <td>HTTP URL</td>
    <td>/v2/users/{openid}/messages</td>
    </tr>
    <tr>
    <td>HTTP Method</td>
    <td>POST</td>
    </tr>
    <!-- <tr>
    <td>接口频率限制</td>
    <td></td>
    </tr> -->
</table>
- **路径参数**

| **属性** | **类型** | **必填** | **说明** |
| --- | --- | --- | --- |
| openid | string | 是 | QQ 用户的 openid，可在各类事件中获得。 |

- **请求参数**

| **属性** | **类型** | **必填** | **说明** |
| --- | --- | --- | --- |
| content | string | 否 | 文本内容 |
| msg_type | int | 是 | 消息类型：0 是文本，2 是 markdown， 3 ark，4 embed，7 media 富媒体 |
| markdown | object | 否 | 格式参考"消息类型=\>markdown=\>数据结构与协议" |
| keyboard | object | 否 | 格式参考"消息交互=\>消息按钮=\>数据结构与协" |
| ark | object | 否 | 格式参考"消息类型=\>ark=\>数据结构与协议" |
| media | object | 否 | {file_info: ""} 数据来源"消息收发=\>富媒体消息" |
| message_reference | object | 否 | 【暂未支持】消息引用 |
| event_id | string | 否 | 前置收到的事件 ID，用于发送被动消息，支持事件："INTERACTION_CREATE"、"C2C_MSG_RECEIVE"、"FRIEND_ADD"|
| msg_id | string | 否 | 前置收到的用户发送过来的消息 ID，用于发送被动（回复）消息 |
| msg_seq	| int	| 否 | 回复消息的序号，与 msg_id 联合使用，避免相同消息id回复重复发送，不填默认是1。相同的 msg_id + msg_seq 重复发送会失败。 |



<!-- |input_notify    |object    |否    |仅 msg_type = 6 时使用 <br> {"input_type": 1, "input_second": 3} <br> input_type：int｜1：对方正在输入...、2：手动取消展示、3：对方正在讲话.. 、4：正在生成... 、5：正在想象...<br> input_second：int｜持续X秒，1-60之间 |
|typing_setting    |object|    否|    仅 msg_type = 6 时使用 <br>{"status": 1, "duration": 3 } <br>status：int｜必填｜0：手动取消状态、1：对方正在输入...、2：对方正在讲话... 、3：正在生成... 、4：正在想象...<br>duration：int｜选填｜持续X秒，1-60之间，不填默认3<br>其他说明：<br>当设置状态后，发送一条新的消息，状态会自动取消。成功的重复调用，覆盖上次请求的设置。| -->
- **返回参数**

| **属性** | **类型** | **说明** |
| --- | --- | --- |
| id | string | 消息唯一ID |
| timestamp | int | 发送时间 |

- **常见错误码**
- 当 msg_type = 7 时，content 字段需要填入一个值，譬如一个空格 “ ”，后续版本会修复该问题。、

| **code** | **message** | **说明** |
| --- | --- | --- |
| 22009 | msg limit exceed | 消息发送超频 |
| 304082 | upload media info fail | 富媒体资源拉取失败，请重试 |
| 304083 | convert media info fail | 富媒体资源拉取失败，请重试 |
## 群聊
<!-- > 发动消息到群。 -->
::: tip 说明
发动消息到群。
:::
- **请求**
<table>
    <tr>
      <th colspan="2">基本</th>
    </tr>
    <tr>
    <td>HTTP URL</td>
    <td>/v2/groups/{group_openid}/messages</td>
    </tr>
    <tr>
    <td>HTTP Method</td>
    <td>POST</td>
    </tr>
    <!-- <tr>
    <td>接口频率限制</td>
    <td></td>
    </tr> -->
</table>
- **路径参数**

| **属性** | **类型** | **必填** | **说明** |
| --- | --- | --- | --- |
| group_openid | string | 是 | 群聊的 openid |

- **请求参数**

| **属性** | **类型** | **必填** | **说明** |
| --- | --- | --- | --- |
| content | string | 是 | 文本内容 |
| msg_type | int | 是 | 消息类型： 0 文本，2 是 markdown，3 ark 消息，4 embed，7 media 富媒体 |
| markdown | object | 否 | 格式参考"消息类型=\>markdown=\>数据结构与协议" |
| keyboard | object | 否 | 格式参考"消息交互=\>消息按钮=\>数据结构与协" |
| media | object | 否 | {file_info: ""} 数据来源"消息收发=\>富媒体消息" |
| ark | object | 否 | 格式参考"消息类型=\>ark=\>数据结构与协议" |
| message_reference | object | 否 | 【暂未支持】消息引用 |
| event_id | string | 否 | 前置收到的事件 ID，用于发送被动消息，支持事件："INTERACTION_CREATE"、"GROUP_ADD_ROBOT"、"GROUP_MSG_RECEIVE" |
| msg_id | string | 否 | 前置收到的用户发送过来的消息 ID，用于发送被动消息（回复） |
| msg_seq	| int	| 否 | 回复消息的序号，与 msg_id 联合使用，避免相同消息id回复重复发送，不填默认是 1。相同的 msg_id + msg_seq 重复发送会失败。

- **返回参数**

| **属性** | **类型** | **说明** |
| --- | --- | --- |
| id | string | 消息唯一 ID |
| timestamp | int | 发送时间 |

- **常见错误码**
- 当 msg_type = 7 时，content 字段需要填入一个值，譬如一个空格 “ ”，后续版本会修复该问题。

| **code** | **message** | **说明** |
| --- | --- | --- |
| 22009 | msg limit exceed | 消息发送超频 |
| 304082 | upload media info fail | 富媒体资源拉取失败，请重试 |
| 304083 | convert media info fail | 富媒体资源拉取失败，请重试 |
## 文字子频道
<!-- > 发动消息到文字子频道。 -->
::: tip 说明
发动消息到文字子频道。
:::
- **请求**
<table>
    <tr>
      <th colspan="2">基本</th>
    </tr>
    <tr>
    <td>HTTP URL</td>
    <td>/channels/{channel_id}/messages</td>
    </tr>
    <tr>
    <td>HTTP Method</td>
    <td>POST</td>
    </tr>
    <!-- <tr>
    <td>接口频率限制</td>
    <td></td>
    </tr> -->
</table>
- **详细文档**
[发送消息|QQ机器人文档](../post_messages.md)
## 频道私信
发动消息到频道私信，请求参数与文字子频道发送消息参数一致
- **请求**
<table>
    <tr>
      <th colspan="2">基本</th>
    </tr>
    <tr>
    <td>HTTP URL</td>
    <td>/dms/{guild_id}/messages</td>
    </tr>
    <tr>
    <td>HTTP Method</td>
    <td>POST</td>
    </tr>
    <!-- <tr>
    <td>接口频率限制</td>
    <td></td>
    </tr> -->
</table>
- **详细文档**
[发送私信|QQ机器人文档](../dms/post_dms_messages.md)

# 发送消息

<!-- > 发送消息分为，主动推送与被动回复，主动消息和被动消息在不同的场景下，发送的频次有不同的规则。
> 发送消息的接口有4个场景：QQ单聊、QQ群聊、文字子频道、频道私信 -->
::: tip 说明
发送消息分为，主动推送与被动回复，主动消息和被动消息在不同的场景下，发送的频次有不同的规则。
发送消息的接口有`4`个场景：QQ单聊、QQ群聊、文字子频道、频道私信
:::


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
| msg_type | int | 是 | 消息类型：0 是文本，1 图文混排 ，2 是 markdown 3 ark，4 embed |
| markdown | object | 否 | 格式参考"消息类型=\>markdown=\>数据结构与协议" |
| keyboard | object | 否 | 格式参考"消息交互=\>消息按钮=\>数据结构与协" |
| ark | object | 否 | 格式参考"消息类型=\>ark=\>数据结构与协议" |
| image | | 否 | 【暂不支持】 |
| message_reference | object | 否 | 【暂未支持】消息引用 |
| event_id | string | 否 | 【暂未支持】前置收到的事件ID，用于发送被动消息 |
| msg_id | string | 否 | 前置收到的消息ID，用于发送被动消息 |
| msg_seq	|int	|否|	回复消息的序号，与 msg_id 联合使用，避免相同消息id回复重复发送，不填默认是1。相同的 msg_id + msg_seq 重复发送会失败。|


<!-- |input_notify	|object	|否	|仅 msg_type = 6 时使用 <br> {"input_type": 1, "input_second": 3} <br> input_type：int｜1：对方正在输入...、2：手动取消展示、3：对方正在讲话... 、4：正在生成... 、5：正在想象...<br> input_second：int｜持续X秒，1-60之间 |
|typing_setting	|object|	否|	仅 msg_type = 6 时使用 <br>{"status": 1, "duration": 3 } <br>status：int｜必填｜0：手动取消状态、1：对方正在输入...、2：对方正在讲话... 、3：正在生成... 、4：正在想象...<br>duration：int｜选填｜持续X秒，1-60之间，不填默认3<br>其他说明：<br>当设置状态后，发送一条新的消息，状态会自动取消。成功的重复调用，覆盖上次请求的设置。| -->


- **返回参数**

| **属性** | **类型** | **说明** |
| --- | --- | --- |
| id | string | 消息唯一ID |
| timestamp | int | 发送时间 |

- **错误码**

| **错误码** | **错误码取值** |
| --- | --- |
| 0 | ok |

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
| msg_type | int | 是 | 消息类型： 0 是文本，1 图文混排 ，2 是 markdown 3 ark，4 embed|
| markdown | object | 否 | 格式参考"消息类型=\>markdown=\>数据结构与协议" |
| keyboard | object | 否 | 格式参考"消息交互=\>消息按钮=\>数据结构与协" |
| ark | object | 否 | 格式参考"消息类型=\>ark=\>数据结构与协议" |
| image | | 否 | 【暂不支持】 |
| message_reference | object | 否 | 【暂未支持】消息引用 |
| event_id | string | 否 | 【暂未支持】前置收到的事件ID，用于发送被动消息 |
| msg_id | string | 否 | 前置收到的消息ID，用于发送被动消息 |

<!-- | timestamp | int | 是 | unix 秒级时间戳 | -->

- **返回参数**

| **属性** | **类型** | **说明** |
| --- | --- | --- |
| id | string | 消息唯一 ID |
| timestamp | int | 发送时间 |

- **错误码**

| **错误码** | **错误码取值** |
| --- | --- |
| 0 | ok |

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

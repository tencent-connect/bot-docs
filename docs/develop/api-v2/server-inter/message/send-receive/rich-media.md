# 富媒体消息

仅用于在QQ单聊和QQ群聊内，发送图片、视频、语音、文件的相关富媒体资源在消息收发的候使用。
本接口有以下两种使用方式：
1. 当 `srv_send_msg = true` 时，消息会直接发送到目标端，占用 `主动消息频次`，超频会发送失败。
 
2. 当 `srv_send_msg = false` 时，消息不会直接发送到目标端，返回的 `file_info` 字段数据，可使用在消息发送接口 `media` 字段中，file_info 有 `过期时间` ，开发者需要自行维护有效期，过期需要重新获得新的 `file_info`，`file_info` 不受发送的目标端影响，一个 `file_info` 可复用发送到多个群或多个用户（注意：用 `/v2/groups/{group_openid}/files` 上传的文件，仅能发到群聊内，用 `/v2/users/{openid}/files` 上传的文件，也仅能发送到单聊）。

推荐使用第 2 种方式

## 用于单聊

- **请求**

<table>
	<tr>
	  <th colspan="2">基本</th>
	</tr>
	<tr>
    <td>HTTP URL</td>
    <td>/v2/users/{openid}/files</td>
	</tr>
	<tr>
    <td>HTTP Method</td>
    <td>POST</td>
	</tr>
	<!-- 
	<tr>
    <td>接口频率限制</td>
    <td></td>
	</tr> 
	-->
</table>

- **路径参数**

| **属性** | **类型** | **必填** | **说明** |
| --- | --- | --- | --- |
| openid | string | 是 | QQ 用户的 openid，可在各类事件中获得。 |

- **请求参数**

| **属性** | **类型** | **必填** | **说明** |
| --- | --- | --- | --- |
| file_type | int | 是 | 媒体类型：1 图片，2 视频，3 语音，4 文件（暂不开放）<br/>资源格式要求<br/>图片：png/jpg，视频：mp4，语音：silk |
| url | string | 是 | 需要发送媒体资源的url |
| srv_send_msg | bool | 是 | 设置 true 会直接发送消息到目标端，且会占用`主动消息频次` |
| file_data |  | 否 | 【暂未支持】 |

- **返回参数**

| **属性** | **类型** | **说明** |
| --- | --- | --- |
| file_uuid | string | 文件 ID |
| file_info | string | 文件信息，用于发消息接口的 media 字段使用 |
| ttl | int | 有效期，表示剩余多少秒到期，到期后 file_info 失效，当等于 0 时，表示可长期使用 |
| id | string | 发送消息的唯一ID，当srv_send_msg设置为true时返回 |

- **错误码**



## 用于群聊

- **请求**

<table>
	<tr>
	  <th colspan="2">基本</th>
	</tr>
	<tr>
    <td>HTTP URL</td>
    <td>/v2/groups/{group_openid}/files</td>
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
| file_type | int | 是 | 媒体类型：1 图片，2 视频，3 语音，4 文件（暂不开放）<br/>资源格式要求<br/>图片：png/jpg，视频：mp4，语音：silk |
| url | string | 是 | 需要发送媒体资源的url |
| srv_send_msg | bool | 是 | 设置 true 会直接发送消息到目标端，且会占用`主动消息频次` |
| file_data |  | 否 | 【暂未支持】 |

- **返回参数**

| **属性** | **类型** | **说明** |
| --- | --- | --- |
| file_uuid | string | 文件 ID |
| file_info | string | 文件信息，用于发消息接口的 media 字段使用 |
| ttl | int | 有效期，表示剩余多少秒到期，到期后 file_info 失效，当等于 0 时，表示可长期使用 |
| id | string | 发送消息的唯一ID，当srv_send_msg设置为true时返回 |

<!-- - **错误码** -->




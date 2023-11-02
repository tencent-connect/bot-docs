# 富媒体消息

仅用于在QQ单聊和QQ群聊内，发送图片、视频、语音、文件的相关富媒体资源在消息收发的候使用。

## 发送到单聊

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
	<tr>
    <td>接口频率限制</td>
    <td></td>
	</tr>
</table>

- **路径参数**

| **属性** | **类型** | **必填** | **说明** |
| --- | --- | --- | --- |
| openid | string | 是 | QQ 用户的 openid，可在各类事件中获得。 |

- **请求参数**

| **属性** | **类型** | **必填** | **说明** |
| --- | --- | --- | --- |
| file_type | int | 是 | 媒体类型：1 图片，2 视频，3 语音，4 文件（暂不开放）资源格式要求图片：png/jpg，视频：mp4，语音：slik |
| url | string | 是 | 需要发送媒体资源的url |
| srv_send_msg | bool | 是 | 固定是：true |
| file_data |  | 否 | 【暂未支持】 |

- **返回参数**

| **属性** | **类型** | **说明** |
| --- | --- | --- |
| id | string | 消息唯一ID |
| timestamp | int | 发送时间 |

- **错误码**

| **错误码** | **错误码取值** | **解决方案** |
| --- | --- | --- |
| 0 | ok | |

## 发送到群聊

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
	<tr>
    <td>接口频率限制</td>
    <td></td>
	</tr>
</table>

- **路径参数**

| **属性** | **类型** | **必填** | **说明** |
| --- | --- | --- | --- |
| group_openid | string | 是 | 群聊的 openid |

- **请求参数**

| **属性** | **类型** | **必填** | **说明** |
| --- | --- | --- | --- |
| file_type | int | 是 | 媒体类型：1 图片，2 视频，3 语音，4 文件（暂不开放）资源格式要求图片：png/jpg，视频：mp4，语音：slik |
| url | string | 是 | 需要发送媒体资源的url |
| srv_send_msg | bool | 是 | 固定是：true |
| file_data |  | 否 | 【暂未支持】 |

- **返回参数**

| **属性** | **类型** | **说明** |
| --- | --- | --- |
| id | string | 消息唯一ID |
| timestamp | int | 发送时间 |

- **错误码**

| **错误码** | **错误码取值** | **解决方案** |
| --- | --- | --- |
| 0 | ok | |


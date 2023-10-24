# 群组模块

> 开放平台支持的功能设置的配置项：
> - 进群破冰消息配置

## 群管理

<!-- ### 🚫获取群资料信息

暂不对外开放

### 🚫获取机器人加入群列表

暂不对外开放 -->

### ✅事件(4)

#### ✅机器人加入群聊

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
    <td>GROUP_ADD_ROBOT</td>
	</tr>
	<tr>
    <td>触发场景</td>
    <td>机器人被添加到群聊</td>
	</tr>
  <tr>
    <td>权限要求</td>
    <td>暂无</td>
	</tr>
	<tr>
    <td>推送方式</td>
    <td>Websocket</td>
	</tr>
</table>

- **事件字段**

| **属性** | **类型** | **说明** |
| --- | --- | --- |
| timestamp | int | 加入的时间戳 |
| group_openid | string | 加入群的群openid |
| op_member_openid | string | 操作添加机器人进群的群成员openid |

- **事件示例**

```

```

#### ✅机器人退出群聊

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
    <td>GROUP_DEL_ROBOT</td>
	</tr>
	<tr>
    <td>触发场景</td>
    <td>机器人被移出群聊</td>
	</tr>
  <tr>
    <td>权限要求</td>
    <td>暂无</td>
	</tr>
	<tr>
    <td>推送方式</td>
    <td>Websocket</td>
	</tr>
</table>

- **事件字段**

| **属性** | **类型** | **说明** |
| --- | --- | --- |
| timestamp | int | 移除的时间戳 |
| group_openid | string | 移除群的群openid |
| op_member_openid | string | 操作移除机器人退群的群成员openid |

- **事件示例**

```

```


#### ✅群聊拒绝机器人主动消息

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
    <td>GROUP_MSG_REJECT</td>
	</tr>
	<tr>
    <td>触发场景</td>
    <td>群管理员主动在机器人资料页操作关闭通知</td>
	</tr>
  <tr>
    <td>权限要求</td>
    <td>暂无</td>
	</tr>
	<tr>
    <td>推送方式</td>
    <td>Websocket</td>
	</tr>
</table>

- **事件字段**

| **属性** | **类型** | **说明** |
| --- | --- | --- |
| timestamp | int | 操作的时间戳 |
| group_openid | string | 操作群的群openid |
| op_member_openid | string | 操作群成员的openid |

- **事件示例**

```

```

#### ✅群聊接受机器人主动消息

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
    <td>GROUP_MSG_RECEIVE</td>
	</tr>
	<tr>
    <td>触发场景</td>
    <td>群管理员主动在机器人资料页操作开启通知</td>
	</tr>
  <tr>
    <td>权限要求</td>
    <td>暂无</td>
	</tr>
	<tr>
    <td>推送方式</td>
    <td>Websocket</td>
	</tr>
</table>

- **事件字段**

| **属性** | **类型** | **说明** |
| --- | --- | --- |
| timestamp | int | 操作的时间戳 |
| group_openid | string | 操作群的群openid |
| op_member_openid | string | 操作群成员的openid |

- **事件示例**

```

```

## 群成员

<!-- ### 🚫获取用户群内身份

[暂不开放] -->

### ⚠️ 获取群内成员列表

\[内邀开放\]

> 获取群成员 openid 列表

- **请求**

<table>
	<tr>
	  <th colspan="2">基本</th>
	</tr>
  <tr>
    <td>HTTP URL</td>
    <td>/v2/groups/{group_openid}/members</td>
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
| limit | int | 否 | 每页限制数量 1-500 |
| start_index | int | 否 | 首页输入 0，后续填入返回参数的 next_index |

- **返回参数**

| **属性** | **类型** | **说明** |
| --- | --- | --- |
| members | object[] | openid 列表{member_openid:'',join_timestamp: 0} |
| next_index | int | 下一页的拉取标记位 |

- **错误码**

| **错误码** | **错误码取值** | **解决方案** |
| --- | --- | --- |
| 0 | ok | |

<!-- ### 事件

#### 🚫用户加入群聊

暂不对外开放

#### 🚫用户退出群聊

暂不对外开放

## 三方平台

### 🚫获取小程序链接

暂不对外开放 -->

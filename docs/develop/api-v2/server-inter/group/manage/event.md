# 事件

## 机器人加入群聊

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

```json
{
	"op": 0,
	"s": 2,
	"t": "GROUP_ADD_ROBOT",
	"id": "GROUP_ADD_ROBOT:39ab91b8-36ee-44d6-80e9-4447a2f2c571",
	"d": {
		"group_openid": "C9F778FE6ADF9D1D1DBE395BF744A33A",
		"op_member_openid": "E4F4AEA33253A2797FB897C50B81D7ED",
		"timestamp": 1699240248
	}
}
```

## 机器人退出群聊

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

```json
{
	"op": 0,
	"s": 5,
	"t": "GROUP_DEL_ROBOT",
	"id": "GROUP_DEL_ROBOT:a94f1712-b316-4731-b1f1-9f39474ef4b6",
	"d": {
		"group_openid": "C9F778FE6ADF9D1D1DBE395BF744A33A",
		"op_member_openid": "E4F4AEA33253A2797FB897C50B81D7ED",
		"timestamp": 1699240426
	}
}
```


## 群聊拒绝机器人主动消息

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

```json
{
	"op": 0,
	"s": 7,
	"t": "GROUP_MSG_REJECT",
	"id": "GROUP_MSG_REJECT:68f2b039-ae03-44f2-a4d1-b88e5de881cb",
	"d": {
		"group_openid": "C9F778FE6ADF9D1D1DBE395BF744A33A",
		"op_member_openid": "E4F4AEA33253A2797FB897C50B81D7ED",
		"timestamp": 1699240458
	}
}
```

## 群聊接受机器人主动消息

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

```json
{
	"op": 0,
	"s": 8,
	"t": "GROUP_MSG_RECEIVE",
	"id": "GROUP_MSG_RECEIVE:db4a10f1-0599-4345-bbbb-a2ed194b9c9c",
	"d": {
		"group_openid": "C9F778FE6ADF9D1D1DBE395BF744A33A",
		"op_member_openid": "E4F4AEA33253A2797FB897C50B81D7ED",
		"timestamp": 1699240477
	}
}
```


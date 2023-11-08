# 用户模块

::: tip 温馨提示
开放平台支持的功能设置的配置项：
- 添加好友后的破冰消息文案；
- 主动消息变更后自动推送给用户的消息文案；
:::

## 用户管理

<!-- ### 🚫获取机器人的用户列表

暂不对外开放 -->

### 事件

#### 用户添加机器人

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
    <td>FRIEND_ADD</td>
	</tr>
	<tr>
    <td>触发场景</td>
    <td>用户添加机器人'好友'到消息列表</td>
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
| timestamp | int | 添加时间戳 |
| openid | string | 用户openid |

- **事件示例**

```json
{
	"op": 0,
	"s": 4,
	"t": "FRIEND_ADD",
	"id": "FRIEND_ADD:701d1cfb-46cd-4979-9a01-1031819c2e4b",
	"d": {
		"openid": "E4F4AEA33253A2797FB897C50B81D7ED",
		"timestamp": 1699240365
	}
}
```

#### 用户删除机器人

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
    <td>FRIEND_DEL</td>
	</tr>
	<tr>
    <td>触发场景</td>
    <td>用户删除机器人'好友'</td>
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
| timestamp | int | 删除时间戳 |
| openid | string | 用户openid |

- **事件示例**

```json
{
	"op": 0,
	"s": 3,
	"t": "FRIEND_DEL",
	"id": "FRIEND_DEL:bcb31d69-a2b6-4a3e-89dc-077951f22e53",
	"d": {
		"openid": "E4F4AEA33253A2797FB897C50B81D7ED",
		"timestamp": 1699240328
	}
}
```

#### 拒绝机器人主动消息

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
    <td>C2C_MSG_REJECT</td>
	</tr>
	<tr>
    <td>触发场景</td>
    <td>用户在机器人资料卡手动关闭"主动消息"推送</td>
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
| timestamp | int | 操作时间戳 |
| openid | string | 用户 openid |

- **事件示例**

```json
{
	"op": 0,
	"s": 9,
	"t": "C2C_MSG_REJECT",
	"id": "C2C_MSG_REJECT:5f68ab54-f67e-446c-81e4-2e6e1975eb29",
	"d": {
		"openid": "E4F4AEA33253A2797FB897C50B81D7ED",
		"timestamp": 1699240599
	}
}
```

#### 允许机器人主动消息

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
    <td>C2C_MSG_RECEIVE</td>
	</tr>
	<tr>
    <td>触发场景</td>
    <td>用户在机器人资料卡手动开启"主动消息"推送开关</td>
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
| timestamp | int | 操作时间戳 |
| openid | string | 用户 openid |

- **事件示例**

```json
{
	"op": 0,
	"s": 10,
	"t": "C2C_MSG_RECEIVE",
	"id": "C2C_MSG_RECEIVE:f064381c-360d-4400-9320-ea3dae112ce2",
	"d": {
		"openid": "E4F4AEA33253A2797FB897C50B81D7ED",
		"timestamp": 1699240617
	}
}
```
<!-- ## 三方平台

### 🚫获取小程序链接

暂不对外开放 -->

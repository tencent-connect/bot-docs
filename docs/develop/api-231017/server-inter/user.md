# 用户模块

> 开放平台支持的功能设置的配置项：
> - 添加好友后的破冰消息文案；
> - 主动消息变更后自动推送给用户的消息文案；

## 用户管理

<!-- ### 🚫获取机器人的用户列表

暂不对外开放 -->

### ✅事件(4)

#### ✅用户添加机器人

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

```

```

#### ✅用户删除机器人

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

```

```

#### ✅拒绝机器人主动消息

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

```

```

#### ✅允许机器人主动消息

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

```

```
<!-- ## 三方平台

### 🚫获取小程序链接

暂不对外开放 -->

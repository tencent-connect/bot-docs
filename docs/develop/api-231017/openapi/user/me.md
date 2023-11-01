# 获取用户详情

### 接口

`GET /users/@me`

### 功能描述

用于获取当前用户（机器人）详情。

### Content-Type

`application/json`

### 返回

返回 [User](model.md#user) 对象。

### 错误码

详见[错误码](../error/error.md)。

### 示例

响应数据包

```json
{
  "id": "11586990140073229091",
  "username": "gitsub",
  "avatar": "https://thirdqq.qlogo.cn/g?b=oidb&k=M5TibpXicS7Jt4z89BZxiamAA&s=100&t=1641802698",
  "union_openid": "74F138F7F3AF68C4B8E8325013FCA295",
  "union_user_account": ""
}
```

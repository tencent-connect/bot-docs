# 创建频道身份组成员

## 接口

```http
PUT /guilds/{guild_id}/members/{user_id}/roles/{role_id}
```

## 功能描述

用于将频道`guild_id`下的用户 `user_id` 添加到身份组 `role_id` 。

- 需要使用的 `token` 对应的用户具备增加身份组成员权限。如果是机器人，要求被添加为管理员。
- 如果要增加的身份组 `ID` 是`5-子频道管理员`，需要增加 `channel` 对象来指定具体是哪个子频道。

## Content-Type

```http
application/json
```

## 参数

| 字段名  | 类型                                        | 描述                                 |
| ------- | ------------------------------------------- | ------------------------------------ |
| channel | [Channel](../manage/channel/model.md#Channel) 对象 | 接收一个只填充了子频道 id 字段的对象 |

## 返回

成功返回 HTTP 状态码 `204`。

## 错误码

详见[错误码](../../../openapi/error/error.md)。


## 示例

请求数据包

```json
{
	"channel": {
		"id": "1744939"
	}
}
```

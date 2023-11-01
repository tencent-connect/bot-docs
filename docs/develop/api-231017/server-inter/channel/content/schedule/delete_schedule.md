# 删除日程

## 接口

`DELETE /channels/{channel_id}/schedules/{schedule_id}`

## 功能描述

用于删除日程子频道 `channel_id` 下 `schedule_id` 指定的日程。

- 要求操作人具有`管理频道`的权限，如果是机器人，则需要将机器人设置为管理员。

## Content-Type

`application/json`

## 返回

成功返回 HTTP 状态码 `204`。

## 错误码

详见[错误码](../../../../openapi/error/error.md)。

## 示例

请求数据包

```shell
DELETE /channels/123456/schedules/112233
```

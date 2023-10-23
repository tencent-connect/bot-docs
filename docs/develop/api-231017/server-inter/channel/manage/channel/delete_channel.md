# 删除子频道

## 接口

`DELETE /channels/{channel_id}`

## 功能描述

用于删除 `channel_id` 指定的子频道。

- 要求操作人具有`管理子频道`的权限，如果是机器人，则需要将机器人设置为管理员。
- 修改成功后，会触发**子频道删除事件**。

<PrivateDomain/>

## Content-Type

`application/json`

## 返回

成功返回 HTTP 状态码 `200`。

## 错误码

详见[错误码](../../../../gateway/error/error.md)。

## 示例

请求数据包

```shell
DELETE /channels/123456
```

## 注意

**子频道的删除是无法撤回的，一旦删除，将无法恢复。**

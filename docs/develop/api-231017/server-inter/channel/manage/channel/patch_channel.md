# 修改子频道

## 接口

```http
PATCH /channels/{channel_id}
```

## 功能描述

用于修改 `channel_id` 指定的子频道的信息。

- 要求操作人具有`管理子频道`的权限，如果是机器人，则需要将机器人设置为管理员。
- 修改成功后，会触发**子频道更新事件**。

<PrivateDomain/>

## Content-Type

```http
application/json
```

## 参数

| 字段名           | 类型   | 描述                                                       |
| ---------------- | ------ | ---------------------------------------------------------- |
| name             | string | 子频道名                                                   |
| position         | int    | 排序                                                       |
| parent_id        | string | 分组 id                                                    |
| private_type     | int    | 子频道私密类型 [PrivateType](model.md#privatetype)         |
| speak_permission | int    | 子频道发言权限 [SpeakPermission](model.md#speakpermission) |

需要修改哪个字段，就传递哪个字段即可。

## 返回

返回[Channel](model.md#Channel) 对象。

## 错误码

详见[错误码](../../../../openapi/error/error.md)。

## 示例

请求数据包

```json
{
  "name": "新的私密子频道",
  "position": 1,
  "owner_id": "0",
  "sub_type": 0,
  "private_type": 1
}
```

响应数据包

```json
{
  "id": "xxxxxx",
  "guild_id": "xxxxxx",
  "name": "私密子频道a",
  "type": 10006,
  "position": 2,
  "parent_id": "xxxxxx",
  "owner_id": "xxxxxx",
  "sub_type": 0,
  "private_type": 1
}
```

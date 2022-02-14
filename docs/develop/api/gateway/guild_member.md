# 频道成员事件

## 内容

在 [MemberWithGuildID](../openapi/member/model.md#MemberWithGuildID) 基础上，增加 `op_user_id` 代表操作人。

注：此事件由于开发较早，尚有一些字段未标准化处理，如 `joined_at`, `roles` 请开发者适配的时候注意。晚些时候我们也会将这些字段标准化处理。

## GUILD_MEMBER_ADD

### 发送时机

- 新用户加入频道

### 示例

```json
{
  "op": 0,
  "s": 5,
  "t": "GUILD_MEMBER_ADD",
  "d": {
    "guild_id": "200000000",
    "joined_at": "1643775140",
    "nick": "",
    "op_user_id": "100000000",
    "roles": [
      "Normal"
    ],
    "user": {
      "avatar": "http://thirdqq.qlogo.cn/g?b=oidb&k=IU4JJatZtNXCVrf44eshNg&s=0&t=1638261405",
      "bot": true,
      "id": "8834102668809967837",
      "username": "b站机器人"
    }
  }
}
```

## GUILD_MEMBER_UPDATE

### 发送时机

- 用户的频道属性发生变化，如频道昵称，或者身份组

### 示例

```json
{
 "op": 0,
 "s": 6,
 "t": "GUILD_MEMBER_UPDATE",
 "d": {
  "guild_id": "200000000",
  "joined_at": "1643775140",
  "nick": "",
  "op_user_id": "8834102668809967837",
  "roles": ["Admin"],
  "user": {
   "avatar": "http://thirdqq.qlogo.cn/g?b=oidb\u0026k=IU4JJatZtNXCVrf44eshNg\u0026s=0\u0026t=1638261405",
   "bot": true,
   "id": "8834102668809967837",
   "username": "b站机器人"
  }
 }
}
```

## GUILD_MEMBER_REMOVE

### 发送时机

- 用户离开频道

### 示例

```json
{
  "op": 0,
  "s": 4,
  "t": "GUILD_MEMBER_REMOVE",
  "d": {
    "guild_id": "200000000",
    "joined_at": "1641462538",
    "nick": "",
    "op_user_id": "100000000",
    "roles": [
      "Admin"
    ],
    "user": {
      "avatar": "http://thirdqq.qlogo.cn/g?b=oidb&k=IU4JJatZtNXCVrf44eshNg&s=0&t=1638261405",
      "bot": true,
      "id": "8834102668809967837",
      "username": "b站机器人"
    }
  }
}
```

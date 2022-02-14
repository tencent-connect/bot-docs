# 频道事件

## 事件内容

在 [Guild](../openapi/guild/model.md#guild) 的基础上，增加 `op_user_id` 字段表示操作人。

注：此事件由于开发较早，尚有一些字段未标准化处理，如 `joined_at`, `icon` 请开发者适配的时候注意。晚些时候我们也会将这些字段标准化处理。


## GUILD_CREATE

### 发送时机

- 机器人被加入到某个频道的时候

### 示例

```json
{
  "op": 0,
  "s": 6,
  "t": "GUILD_CREATE",
  "d": {
    "description": "频道介绍",
    "icon": "163799886",
    "id": "200000000",
    "joined_at": "1632372431",
    "max_members": 300,
    "member_count": 17,
    "name": "频道名称",
    "op_user_id": "100000000",
    "owner_id": "100000000"
  }
}
```

## GUILD_UPDATE

### 发送时机

- 频道信息变更
- 事件内容为变更后的数据

### 示例

```json
{
  "op": 0,
  "s": 7,
  "t": "GUILD_UPDATE",
  "d": {
    "description": "修改了的频道介绍",
    "icon": "16379981579",
    "id": "200000000",
    "joined_at": "1632372431",
    "max_members": 300,
    "member_count": 18,
    "name": "频道名称",
    "op_user_id": "100000000",
    "owner_id": "100000000"
  }
}
```

## GUILD_DELETE

### 发送时机

- 频道被解散
- 机器人被移除
- 事件内容为变更前的数据

### 示例

```json
{
  "op": 0,
  "s": 5,
  "t": "GUILD_DELETE",
  "d": {
    "description": "频道介绍",
    "icon": "163799886",
    "id": "200000000",
    "joined_at": "1632372431",
    "max_members": 300,
    "member_count": 17,
    "name": "频道名称",
    "op_user_id": "100000000",
    "owner_id": "100000000"
  }
}
```

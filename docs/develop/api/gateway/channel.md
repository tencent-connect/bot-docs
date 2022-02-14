# 子频道事件

## 内容

在 [Channel](../openapi/channel/model.md#channel) 的**部分字段**基础上，增加 `op_user_id` 代表操作人。

## CHANNEL_CREATE

### 发送时机

- 子频道被创建

### 示例

```json
{
  "op": 0,
  "s": 2,
  "t": "CHANNEL_CREATE",
  "d": {
    "guild_id": "200000000",
    "id": "2943679",
    "name": "测试",
    "op_user_id": "100000000",
    "owner_id": "100000000",
    "sub_type": 0,
    "type": 0
  }
}
```

## CHANNEL_UPDATE

### 发送时机

- 子频道信息变更

### 示例

```json
{
  "op": 0,
  "s": 3,
  "t": "CHANNEL_UPDATE",
  "d": {
    "guild_id": "200000000",
    "id": "2943679",
    "name": "测试2",
    "op_user_id": "100000000",
    "owner_id": "100000000",
    "sub_type": 0,
    "type": 0
  }
}
```

## CHANNEL_DELETE

### 发送时机

- 子频道被删除

### 示例

```json
{
  "op": 0,
  "s": 4,
  "t": "CHANNEL_DELETE",
  "d": {
    "guild_id": "200000000",
    "id": "2943679",
    "name": "测试2",
    "op_user_id": "100000000",
    "owner_id": "100000000",
    "sub_type": 0,
    "type": 0
  }
}
```
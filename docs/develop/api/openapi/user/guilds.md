# 获取当前用户频道列表

### 接口
`GET /users/@me/guilds`

### 返回
当前用户所加入的 [Guild](../guild/model.md#guild) 对象列表

### 参数

| 字段名       | 类型              | 描述           | 要求 			|
| ------------ | ----------------- | ---------------| --------------|
| before       | string            | 读此id之前的数据     | guild id, before/after 只能带一个 |
| after        | string            | 读此id之后的数据     | guild id, before/after 只能带一个 |
| limit        | int               | 每次拉取多少条数据   | 最大不超过100，默认100 |


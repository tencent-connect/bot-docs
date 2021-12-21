# 获取频道身份组列表

### 接口
`GET /guilds/{guild_id}/roles`

### 返回
| 字段名 | 类型 | 描述 |
| --- | --- | --- |
| guild_id  | string | 频道ID |
| roles | [Role](role_model.md#role) 对象数组 | 一组频道身份组对象 |
| role_num_limit | string | 默认分组上限 |

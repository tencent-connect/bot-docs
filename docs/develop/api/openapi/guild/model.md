# 频道对象(Guild)

频道对象中所涉及的 ID 类数据，都仅在机器人场景流通，与真实的 ID 无关。请不要理解为真实的 ID

### Guild
| 字段名 | 类型 | 描述 |
| --- | --- | --- |
| id  | string | 频道ID |
| name | string | 频道名称 |
| icon | string | 频道头像地址 |
| owner_id | string | 创建人用户ID |
| owner | bool | 当前人是否是创建人 |
| member_count | int | 成员数 |
| max_members | int | 最大成员数 |
| description  | string | 描述 |
| joined_at | string | 加入时间 |

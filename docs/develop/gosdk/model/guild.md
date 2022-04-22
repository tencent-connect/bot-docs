# 频道对象(Guild)

频道对象中所涉及的 ID 类数据，都仅在机器人场景流通，与真实的 ID 无关，请不要理解为真实的 ID。

## Guild

| 字段名       | 类型    | 描述               |
| ------------ | ------- | ------------------ |
| ID           | string  | 频道 ID            |
| Name         | string  | 频道名称           |
| Icon         | string  | 频道头像           |
| OwnerID      | string  | 拥有者ID          |
| IsOwner      | bool | 当前人是否是创建人 |
| MemberCount  | int  | 成员数             |
| MaxMembers   | int64  | 最大成员数         |
| Desc         | string  | 描述               |
| JoinedAt     | Timestamp | 当前用户加入群的时间，此字段只在GUILD_CREATE事件中使用|

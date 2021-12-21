# 成员对象(Member)

### Member
| 字段名       | 类型              | 描述           |
| ------------ | ----------------- | ---------------|
| user         | [User](../user/model.md#user) | 用户基础信息，来自QQ资料，只有成员相关接口中会填充此信息 |
| nick         | string                         | 用户在频道内的昵称   |
| roles        | string 数组                    | 用户在频道内的身份组ID, 默认值可参考[DefaultRoles](../guild/role_model.md#DefaultRoles) |
| joined_at    | ISO8601 timestamp             | 用户加入频道的时间   |

### MemberWithGuildID
| 字段名       | 类型              | 描述           |
| ------------ | ----------------- | ---------------|
| guild_id     | string                         | 频道id              |
| user         | [User](../user/model.md#user) | 用户基础信息         |
| nick         | string                         | 用户在频道内的昵称   |
| roles        | string 数组                    | 用户在频道内的身份   |
| joined_at    | ISO8601 timestamp             | 用户加入频道的时间   |

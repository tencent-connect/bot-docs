# 成员对象(Member)

### Member
| 字段名       | 类型              | 描述           |
| ------------ | ----------------- | ---------------|
| user         | [User](../user/model.md#user) | 用户的频道基础信息，只有成员相关接口中会填充此信息 |
| nick         | string                         | 用户的昵称   |
| roles        | string 数组                    | 用户在频道内的身份组ID, 默认值可参考[DefaultRoles](../../server-inter/channel/role/member/role_model.md#defaultroleids%E7%B3%BB%E7%BB%9F%E9%BB%98%E8%AE%A4%E7%94%9F%E6%88%90%E4%B8%8B%E5%88%97%E8%BA%AB%E4%BB%BD%E7%BB%84id) |
| joined_at    | ISO8601 timestamp             | 用户加入频道的时间   |

### MemberWithGuildID
| 字段名       | 类型              | 描述           |
| ------------ | ----------------- | ---------------|
| guild_id     | string                         | 频道id              |
| user         | [User](../user/model.md#user) | 用户的频道基础信息         |
| nick         | string                         | 用户的昵称   |
| roles        | string 数组                    | 用户在频道内的身份   |
| joined_at    | ISO8601 timestamp             | 用户加入频道的时间   |

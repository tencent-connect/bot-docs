# 删除频道身份组成员

删除频道身份组成员。

## 使用示例

```javascript
async function demo() {
  let { data } = await client.memberApi.memberDeleteRole(guildId, roleId, userId, channelId);
}
```

::: warning 注意

- 需要使用的 token 对应的用户具备删除身份组成员权限，如果是机器人，要求被添加为管理员。

:::

## 参数说明

| 字段名      | 必填 | 类型                             | 描述                          |
| ----------- | ---- | -------------------------------- | ----------------------------- |
| guildId     | 是   | string                           | 频道 ID                       |
| roleId      | 是   | string                           | 身份组 ID                     |
| userId      | 是   | string                           | 用户 ID                       |
| ~~channel~~ | 否   | [Channel](./../model/channel.md) | ~~只填充 id 属性的 Channel 对象~~(**已弃用，请使用 channelId**) |
| channelId   | 否   | string                           | 子频道 ID                     |

::: warning 注意

- 如果目标身份组 `ID` 是 [5-子频道管理员](#defaultroleids)（即：`roleId = '5'`），需要指定`channelId`参数，否则会报错。

:::

### DefaultRoleIDs

系统默认生成下列身份组 ID:

| 身份组 ID 默认值 | 描述         |
| ---------------- | ------------ |
| 1                | 全体成员     |
| 2                | 管理员       |
| 4                | 群主/创建者  |
| 5                | 子频道管理员 |

## 返回说明

返回结果为空，HTTP 状态码 `204`。

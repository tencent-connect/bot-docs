# 获取频道身份组列表

获取频道身份组列表

## 使用示例

```javascript
async function demo() {
  let { data } = await client.roleApi.roles(guildId);
}
```

## 参数说明

| 字段名  | 必填 | 类型   | 描述    |
| ------- | ---- | ------ | ------- |
| guildId | 是   | string | 频道 ID |

## 返回说明

### Role

字段参见 [GuildRole](role_model.md)

## 返回示例

`data`：

```js
{
  guild_id: 'GUILD_ID',
  roles: [
    {
      id: '4',
      name: '创建者',
      color: 4294927682,
      hoist: 1,
      number: 1,
      member_limit: 1
    },
    {
      id: '2',
      name: '管理员',
      color: 4280276644,
      hoist: 1,
      number: 6,
      member_limit: 50
    },
  ],
  role_num_limit: '30'
}
```

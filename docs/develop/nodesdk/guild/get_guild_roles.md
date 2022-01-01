# 获取频道身份组列表 <Badge text="v1.0.0" />

获取频道身份组列表。

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

| 字段名   | 类型                    | 描述               |
| -------- | ----------------------- | ------------------ |
| guild_id | string                  | 频道 ID            |
| roles    | [GuildRole[]](#guildrole) | 频道身份组对象数组 |

### GuildRole

| 字段名       | 类型   | 描述                                                           |
| ------------ | ------ | -------------------------------------------------------------- |
| id           | string | 身份组 ID                                                      |
| name         | string | 名称                                                           |
| color        | number | ARGB 的 HEX 十六进制颜色值转换后的十进制数值（例：4294927682） |
| hoist        | number | 是否在成员列表中单独展示: 0-否, 1-是                           |
| number       | number | 人数                                                           |
| member_limit | number | 成员上限                                                       |

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

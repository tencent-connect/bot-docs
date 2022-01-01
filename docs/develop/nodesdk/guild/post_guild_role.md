# 创建频道身份组 <Badge text="v1.0.0" />

创建一个频道身份组。

## 使用示例

```javascript
async function demo() {
  let { data } = await client.roleApi.postRole(guildId, roleInfo);
}
```

::: warning 注意
需要使用的 token 对应的用户具备创建身份组权限。如果是机器人，要求被添加为管理员。
:::

## 参数说明

| 字段名   | 必填 | 类型                  | 描述           |
| -------- | ---- | --------------------- | -------------- |
| guildId  | 是   | string                | 频道 ID        |
| roleInfo | 是   | [RoleInfo](#roleinfo) | 频道身份组参数 |

### RoleInfo

| 字段名 | 必填 | 类型   | 描述                                                           |
| ------ | ---- | ------ | -------------------------------------------------------------- |
| name   | 是   | string | 名称                                                           |
| color  | 否   | number | ARGB 的 HEX 十六进制颜色值转换后的十进制数值（例：4294927682） |
| hoist  | 否   | number | 在成员列表中单独展示: 0-否, 1-是                               |

## 返回说明

| 字段名  | 类型                    | 描述           |
| ------- | ----------------------- | -------------- |
| role_id | string                  | 频道身份组 ID  |
| role    | [GuildRole](#guildrole) | 频道身份组对象 |

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
    role_id: 'ROLE_ID',
    role: {
      id: 'ROLE_ID',
      name: '普通成员222',
      color: 4286151052,
      hoist: 0,
      number: 0,
      member_limit: 2000
    }
}
```

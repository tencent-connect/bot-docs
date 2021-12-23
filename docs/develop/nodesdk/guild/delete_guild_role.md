# 删除频道身份组

删除频道身份组。

## 使用示例

```javascript
async function demo() {
  let { data } = await client.roleApi.deleteRole(guildId, roleId);
}
```

::: warning 注意

- 需要使用的 token 对应的用户具备增加身份组成员权限。如果是机器人，要求被添加为管理员

:::

### 参数说明

| 参数    | 必填 | 类型   | 说明      |
| ------- | ---- | ------ | --------- |
| guildId | 是   | string | 频道 ID   |
| roleId  | 是   | string | 身份组 ID |

### 返回说明

--

### 返回示例

`data`：

```js
'';
```

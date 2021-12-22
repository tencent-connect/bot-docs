# 删除频道成员

移除频道的某个成员。

<Warnning />

## 使用示例

```javascript
async function demo() {
  let { data } = await client.guildApi.deleteGuildMember(guildId, userId);
}
```

::: warning 注意

- 需要使用的 token 对应的用户具备踢人权限。如果是机器人，要求被添加为管理员。
- 操作成功后，会触发频道成员删除事件
  :::

## 参数说明

| 字段名  | 必填 | 类型   | 描述    |
| ------- | ---- | ------ | ------- |
| guildId | 是   | string | 频道 ID |
| userId  | 是   | string | 用户 ID |

## 返回说明

无

## 返回示例

`data`:

```js
'';
```

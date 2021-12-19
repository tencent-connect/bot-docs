# 创建频道身份组成员

创建频道身份组成员

## 使用示例

```javascript
async function demo() {
  let { data } = await client.memberApi.memberAddRole(guildId, roleId, userId, channel);
}
```

::: warning 注意

- 需要使用的 token 对应的用户具备增加身份组成员权限。如果是机器人，要求被添加为管理员
- 如果要增加的身份组 ID 是 5-子频道管理员，需要增加 channel 对象来指定具体是哪个子频道
  :::

## 参数说明

| 字段名  | 必填 | 类型                                      | 描述                                 |
| ------- | ---- | ----------------------------------------- | ------------------------------------ |
| guildId | 是 | string                                    | 频道 ID                              |
| roleId  | 是 | string                                    | 身份组 ID                            |
| userId  | 是 | string                                    | 用户 ID                              |
| channel | 是 | [子频道对象](../channel/model.md#channel) | 接收一个只填充了子频道 ID 字段的对象 |

## 返回说明

--

## 返回示例

`data`:

```js
'';
```

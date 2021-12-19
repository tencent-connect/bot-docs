# 获取频道详情

拿到频道详情信息

## 使用示例

```javascript
async function demo() {
  let { data } = await client.guildApi.guild(guildId);
}
```

## 参数说明

| 字段名  | 必填 | 类型   | 描述    |
| ------- | ---- | ------ | ------- |
| guildId | 是   | string | 频道 ID |

## 返回说明

字段参见 [Guild](model.md#Guild)

## 返回示例

`data`：

```js
{
    "id": "GUILD_ID",
    "name": "Ost测试频道",
    "owner_id": "OWNER_ID",
    "owner": false,
    "member_count": 10,
    "max_members": 300,
    "description": "测试用"
}
```

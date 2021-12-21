# 创建私信会话

## 功能描述

- 机器人和同在一个频道内的成员创建私信会话。
- 创建成功后，返回创建成功的频道 id ，子频道 id 和创建时间。

## 使用示例

```js
const res = await client.directMessageApi.createDirectMessage({
  recipient_id: userID, // 用户ID
  source_guild_id: guildID, // 频道ID
});
```

## 参数说明

| 字段名          | 类型   | 描述      |
| --------------- | ------ | --------- |
| recipient_id    | string | 接收者 ID |
| source_guild_id | string | 源频道 ID |

## 返回说明

成功创建后，返回[DMS](model.md#dms)对象返回创建成功的频道 ID，子频道 ID 和创建时间。

| 字段名      | 类型   | 描述      |
| ----------- | ------ | --------- |
| guild_id    | string | 频道 ID   |
| channel_id  | string | 子频道 ID |
| create_time | string | 创建时间  |

## 返回示例

`data`：

```json
{
  "guild_id": "xxxxxx",
  "channel_id": "xxxxxx",
  "create_time": "1638323931"
}
```

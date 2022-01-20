# 禁言全员 <Badge text="v2.1.0" />

将频道内全部成员（非管理员）禁言。

该接口同样可用于解除禁言，具体使用见[解除全员禁言](#解除禁言)。

## 使用示例

```javascript
async function demo() {
  let { data } = await client.muteApi.muteAll(guildID, options);

  // e.g. 禁言 100 秒
  // let { data } = await client.muteApi.muteAll("xxxxxx", { seconds:"100" });

  // e.g. 禁言到 2022-01-08 10:29:11
  // let { data } = await client.muteApi.muteAll("xxxxxx", { timeTo:"1641608951" });

  // e.g. 解除禁言
  // let { data } = await client.muteApi.muteAll("xxxxxx", { timeTo:"0" });

  // e.g. 解除禁言
  // let { data } = await client.muteApi.muteAll("xxxxxx", { seconds:"0" });
}
```

## 参数说明

| 字段名  | 必填 | 类型                        | 描述                         |
| ------- | ---- | --------------------------- | ---------------------------- |
| guildID | 是   | string                      | [频道 ID](../model/guild.md) |
| options | 是   | [MuteOptions](#muteoptions) | 禁言时长控制参数             |

### MuteOptions

| 字段名  | 类型   | 描述                                                                                    |
| ------- | ------ | --------------------------------------------------------------------------------------- |
| timeTo  | string | 禁言到期时间戳，`绝对时间戳`，单位：`秒`（与 `seconds` 字段同时赋值的话，以该字段为准） |
| seconds | string | 禁言多少秒（两个字段二选一，**默认以 `timeTo` 为准**）                                  |

#### 解除禁言

该接口同样支持**解除全员禁言**，将`timeTo`或`seconds`传值为字符串`'0'`即可。

## 返回说明

成功返回空对象。

## 返回示例

`data`：

```js
{
}
```

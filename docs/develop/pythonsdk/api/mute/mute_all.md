# 禁言全员

将频道内全部成员（非管理员）禁言。

## 使用示例

#### sync

```python
import qqbot

token = qqbot.Token({appid}, {token})


def demo():
    api = qqbot.MuteAPI(token, False)
    is_success = api.mute_all(guild_id, options)
```

#### async

```python
import qqbot

token = qqbot.Token({appid}, {token})


async def demo():
    api = qqbot.AsyncMuteAPI(token, False)
    is_success = await api.mute_all(guild_id, options)
```

## 参数说明

| 字段名  | 必填 | 类型                      | 描述                         |
| ------- | ---- | ------------------------- | ---------------------------- |
| guild_id | 是   | string                    | [频道 ID](../../model/guild.md) |
| options  | 是   | [MuteOption](#muteoption) | 禁言时长控制参数             |

### MuteOption

| 字段名  | 类型   | 描述                                                                                    |
| ------- | ------ | --------------------------------------------------------------------------------------- |
| mute_end_timestamp  | string | 禁言到期时间戳，`绝对时间戳`，单位：`秒`（与 `seconds` 字段同时赋值的话，以该字段为准） |
| mute_seconds | string | 禁言多少秒（两个字段二选一，**默认以 `mute_end_timstamp` 为准**）                                  |

## 返回说明

成功返回空对象。

## 返回示例

`data`：

```python
True
```

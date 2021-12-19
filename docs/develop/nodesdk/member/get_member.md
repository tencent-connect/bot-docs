# 获取频道成员详情

获取频道下某个成员的信息

## 使用示例

```javascript
async function demo() {
  let { data } = await client.guildApi.guildMember(guildId, userId);
}
```

## 参数说明

| 字段名  | 必填 | 类型   | 描述    |
| ------- | ---- | ------ | ------- |
| guildId | 是   | string | 频道 ID |
| userId  | 是   | string | 用户 ID |

## 返回说明

字段参见 [Member](model.md)

## 返回示例

`data`：

```js
{
    user: {
      id: 'USERID',
      username: '机器人管家-ostwindli',
      avatar: 'http://thirdqq.qlogo.cn/g?b=oidb&k=oPicoPIg01ujpSr8oosudkQ&s=0&t=1637218059',
      bot: false,
      public_flags: 0,
      system: false
    },
    nick: '阿青',
    roles: [ '4' ],
    joined_at: '2021-11-23T15:16:48+08:00',
    deaf: false,
    mute: false,
    pending: false
  }
}
```

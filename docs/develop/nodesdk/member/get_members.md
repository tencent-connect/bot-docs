# 获取频道成员列表

获取频道下的成员列表
<Warnning />

## 使用示例

```javascript
async function demo() {
  let { data } = await client.guildApi.guildMembers(guildId, queryParams);
}
```

## 参数说明

| 字段名      | 必填 | 类型                        | 描述     |
| ----------- | ---- | --------------------------- | -------- |
| guildId     | 是   | string                      | 频道 ID  |
| queryParams | 否   | [QueryParams](#QueryParams) | 查询参数 |

### QueryParams

| 字段名 | 必填 | 类型   | 描述                                                       |
| ------ | ---- | ------ | ---------------------------------------------------------- |
| after  | 否   | string | 上一次回包中最大的用户 ID， 如果是第一次请求填 0，默认为 0 |
| limit  | 否   | number | 分页大小，1-1000，默认是 1                                 |

## 返回说明

字段参见 [Member](model.md)

## 返回示例

`data`：

```js
[
  {
    user: {
      id: 'USERID',
      username: '机器人管家-ostwindli',
      avatar: 'http://thirdqq.qlogo.cn/g?b=oidb&k=oPicoPIg01ujpSr8oosudkQ&s=0&t=1637218059',
      bot: false,
      public_flags: 0,
      system: false,
    },
    nick: '阿青',
    roles: ['4'],
    joined_at: '2021-11-23T15:16:48+08:00',
    deaf: false,
    mute: false,
    pending: false,
  },
];
```

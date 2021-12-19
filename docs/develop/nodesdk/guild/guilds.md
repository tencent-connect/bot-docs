# 获取频道列表

通过此接口，可以拿到当前用户下的所有频道信息列表

## 使用示例

```javascript
async function demo() {
  let { data } = await client.meApi.meGuilds();
}
```

## 参数说明

无

## 返回说明

字段参见 [Guild](model.md#Guild)

## 返回示例

`data`：

```js
[
  {
    id: 'GUILD_ID',
    name: 'Ost测试频道',
    icon: 'https://groupprohead-76292.picgzc.qpic.cn/89435891637651808/100?t=1637651809045',
    owner: false,
  },
];
```

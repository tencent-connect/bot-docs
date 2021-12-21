# 获取频道列表

获取当前用户下的所有频道信息列表。

## 使用示例

```javascript
async function demo() {
  let { data } = await client.meApi.meGuilds();
}
```

## 参数说明

无

## 返回说明

返回 [Guild](#guild) 数组。

### Guild

| 字段名 | 类型    | 描述               |
| ------ | ------- | ------------------ |
| id     | string  | 频道 ID            |
| name   | string  | 频道名称           |
| icon   | string  | 频道头像地址       |
| owner  | boolean | 当前人是否是创建人 |

## 返回示例

`data`：

```js
[
  {
    id: 'xxxxxx',
    name: 'Ost测试频道',
    icon: 'xxxxxx',
    owner: false,
  },
];
```

# 获取频道列表 <Badge text="v1.0.0" />

获取当前用户下的所有频道列表，频道用[Guild](../model/guild.md)描述。

## 使用示例

```javascript
async function demo() {
  let { data } = await client.meApi.meGuilds(options);
}
```

## 参数说明

| 字段名  | 必填 | 类型                      | 描述             |
| ------- | ---- | ------------------------- | ---------------- |
| options | 否   | [ReqOptions](#reqoptions) | 获取频道列表范围 |

### ReqOptions

| 字段名 | 必填 | 类型   | 描述                                             |
| ------ | ---- | ------ | ------------------------------------------------ |
| before | 否   | string | 读取此 `id` 之前的数据                           |
| after  | 否   | string | 读取此 `id` 之后的数据                           |
| limit  | 否   | string | 每次拉取多少条数据，最大不超过 `100`，默认 `100` |

::: warning 注意

before、after 同时存在时，以 before 为准。

:::

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

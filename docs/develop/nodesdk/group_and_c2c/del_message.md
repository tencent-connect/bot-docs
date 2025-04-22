# 撤回消息 <Badge text="v2.10.0" />

## 功能描述

用于撤回机器人发送给当前用户 openid 的消息 message_id，发送超出2分钟的消息不可撤回

## 使用示例

```js
/** 单聊 */
async function demo() {
  const res = await client.C2cAPI.delMessage(openid, message_id);
}

/** 群聊 */
async function demo() {
  const res = await client.GroupAPI.delMessage(group_openid, message_id);
}
```

## 参数说明

| 字段名  | 必填 | 类型                                                           | 描述                                                 |
| ------- | ---- | -------------------------------------------------------------- | ---------------------------------------------------- |
| openid | 是（单聊）  | string                                                         | QQ 用户的 openid，可在各类事件中获得。                       |
| group_openid | 是（群聊）   | string                                                         | 群号，可在各类事件中获得。|
| message_id  | 是   | string | 消息id  |


## 返回参数

成功返回 HTTP 状态码 200。

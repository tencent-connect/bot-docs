# 获取子频道在线成员数

## 接口

`GET /channels/{channel_id}/online_nums`

## 功能描述

用于查询音视频/直播子频道 channel_id 的在线成员数。

## Content-Type

`application/json`

## 返回
成功返回空对象。

```
{
  "online_nums": 1
}
```
## 错误码
详见[错误码](../../../openapi/error/error.md)。

## 示例

请求数据包
`GET /channels/123456/online_nums`

响应数据包
```
{
  "online_nums": 1
}
```

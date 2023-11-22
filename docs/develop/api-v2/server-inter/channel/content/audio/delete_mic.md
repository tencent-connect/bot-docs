# 机器人下麦

## 接口

```http
DELETE /channels/{channel_id}/mic
```

## 功能描述

机器人在 `channel_id` 对应的语音子频道下麦。

音频接口：仅限音频类机器人才能使用，后续会根据机器人类型自动开通接口权限，现如需调用，需联系平台申请权限。

## Content-Type

```http
application/json
```

## 参数

url参数：channel_id

## 返回

成功返回空对象。

```json
{}
```

## 错误码

详见[错误码](../../../../openapi/error/error.md)。

## 示例

请求数据包

```json
{}
```

响应数据包

```json
{}
```

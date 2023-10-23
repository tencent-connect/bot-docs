# 获取通用 WSS 接入点

### 接口

`GET /gateway`

### 功能描述

用于获取 WSS 接入地址，通过该地址可建立 `websocket` 长连接。

### Content-Type

`application/json`

### 返回

返回一个用于连接 `websocket` 的地址。

### 错误码

详见[错误码](../../gateway/error/error.md)。

### 示例

响应数据包

```json
{
  "url": "wss://api.sgroup.qq.com/websocket/"
}
```

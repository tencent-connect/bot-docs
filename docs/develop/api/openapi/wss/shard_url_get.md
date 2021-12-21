# 获取带分片 WSS 接入点

### 接口
`GET /gateway/bot`

### 返回
一个用于连接 websocket 的地址。同时返回建议的分片数，以及目前连接数使用情况。

| 字段名 | 类型 | 描述 |
| --- | --- | --- |
| url	  | string | WebSocket 的连接地址 |
| shards | int | 建议的 shard 数 |
| session_start_limit | SessionStartLimit | 创建Session限制信息 |

### SessionStartLimit

| 字段名 | 类型 | 描述 |
| --- | --- | --- |
| total	  | int | 每 24 小时可创建 Session 数 |
| remaining | int | 目前还可以创建的 Session 数 |
| reset_after | int | 重置计数的剩余时间(ms) |
| max_concurrency | int | 每 5s 可以创建的 Session 数 |

### Example

```json
{
  "wss://api.sgroup.qq.com/websocket/",
  "shards": 9,
  "session_start_limit": {
    "total": 1000,
    "remaining": 999,
    "reset_after": 14400000,
    "max_concurrency": 1
  }
}
```
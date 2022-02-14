# Shard 机制

随着`bot`的增长并被添加到越来越多的频道中，事件越来越多，业务有必要对事件进行水平分割，实现负载均衡。机器人网关实现了一种用户可控制的分片方法，该方法允许跨多个网关连接拆分事件。 分片完全由用户控制，并且不需要在单独的连接之间进行状态共享。

要在连接上启用分片，需要在建立连接的时候指定分片参数，具体参考[gateway](reference.md)


### 获得合适的分片数
使用[/gateway/bot](../openapi/wss/shard_url_get.md)接口获取网关地址的时候，会同时返回一个建议的shard数，及最大并发限制。
```json
{
    "url": "wss://sandbox.api.sgroup.qq.com/websocket",
    "shards": 1,
    "session_start_limit": {
        "total": 1000,
        "remaining": 1000,
        "reset_after": 86400000,
        "max_concurrency": 1
    }
}
```

### 分片规则
分片是按照频道id进行哈希的，同一个频道的信息会固定从同一个链接推送。具体哈希计算规则如下：
```bash
shard_id = (guild_id >> 22) % num_shards
```

### 最大连接数
每个机器人创建的连接数不能超过`remaining`剩余连接数

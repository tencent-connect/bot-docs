# 接入方法

## payload

payload 指的是在websocket连接上传输的数据，网关的上下行消息采用的都是同一个结构，如下：

```json
{
  "op": 0,
  "d": {},
  "s": 42,
  "t": "GATEWAY_EVENT_NAME"
}
```

`op` 指的是 opcode，全部 opcode 列表参考 [opcode](opcode.md)。

`s` 下行消息都会有一个序列号，标识消息的唯一性，客户端需要再发送心跳的时候，携带客户端收到的最新的`s`。

`t`和`d` 主要是用在`op`为 `0 Dispatch` 的时候，`t` 代表事件类型，`d` 代表事件内容，不同事件类型的事件内容格式都不同，请注意识别。

## 1.连接到Gateway

第一步先调用 [/gateway](../openapi/wss/url_get.md) 或 [/gateway/bot](../openapi/wss/shard_url_get.md) 接口获取网关地址。 会得到一个类似下面这样的地址：
```
wss://api.sgroup.qq.com/websocket/
```

然后进行websocket连接，一旦连接成功，就会返回 [OpCode 10 Hello](opcode.md) 消息。这个消息主要的内容是心跳周期，单位毫秒(milliseconds)，如下：
``` json
{
  "op": 10,
  "d": {
    "heartbeat_interval": 45000
  }
}
```


## 2.鉴权连接

建立websocket连接之后，就需要进行鉴权了，需要发送一个 [OpCode 2 Identify](opcode.md) 消息，如下：

```json
{
  "op": 2,
  "d": {
    "token": "my_token",
    "intents": 513,
    "shard": [0,4],
    "properties": {
      "$os": "linux",
      "$browser": "my_library",
      "$device": "my_library"
    }
  }
}
```

`token` 是创建机器人的时候分配的，格式为`Bot {appid}.{app_token}`

`intents` 是此次连接所需要接收的事件，具体可参考 [Intents](intents.md)

`shard` 该参数是用来进行水平分片的。该参数是个拥有两个元素的数组。例如：`[0,4]`，代表分为四个片，当前链接是第0个片，业务稍后应该继续建立shard为`[1,4]`,`[2,4]`,`[3,4]`的链接，才能完整接收事件。更多详细的内容可以参考[Shard](shard.md)。

`properties` 目前无实际作用，可以按照自己的实际情况填写，也可以留空

鉴权成功之后，后台会下发一个 `Ready Event`，结构如下：
```json
{
    "op":0,
    "s":1,
    "t":"READY",
    "d":{
        "version":1,
        "session_id":"082ee18c-0be3-491b-9d8b-fbd95c51673a",
        "user":{
            "id":"6158788878435714165",
            "username":"群pro测试机器人",
            "bot":true
        },
        "shard":[
            0,
            0
        ]
    }
}
```


## 3.发送心跳
鉴权成功之后，就需要按照周期进行心跳发送。`d`为客户端收到的最新的消息的`s`，如果是第一次连接，传`null`。
```json
{
    "op": 1,
    "d": 251
}
```
心跳发送成功之后会收到 [OpCode 11 Heartbeat ACK](opcode.md) 消息，如下：
```json
{
  "op": 11
}
```


## 4.恢复连接

有很多原因都会导致连接断开，断开之后短时间内重连会补发中间遗漏的事件，以保障业务逻辑的正确性。断开重连不需要发送`Identify`请求。在连接到Gateway之后，需要发送 [Opcode 6 Resume](opcode.md)消息，结构如下：

```json
{
  "op": 6,
  "d": {
    "token": "my_token",
    "session_id": "session_id_i_stored",
    "seq": 1337
  }
}
```

恢复成功之后，就开始补发遗漏事件，所有事件补发完成之后，会下发一个 `Resumed Event`，结构如下：

```json
{
    "op":0,
    "s":2,
    "t":"RESUMED",
    "d":""
}
```
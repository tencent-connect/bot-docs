
# 事件订阅｜异步通知

> 当用户在QQ平台内的一些行为操作或某些接口的有异步返回通知确认机制的场景的时候，QQ 会通过"事件"的方式，通知到开发者服务器，开发者可自行根据具体事件通知来进行下一步响应。譬如用户跟机器人发消息，用户添加机器人好友，机器人被拉入群聊等等事件。

## WebSocket 方式

通过 WebSocket 建立与QQ后台的长链接通信管道，当需要事件通知的时候QQ后台通过 WebSocket 连接下发事件到开发者服务器上。

开发者需要维护 WebSocket 长链接的状态，包括连接状态维护、登录鉴权、心跳维护、断线恢复重连等。

优势：本地服务器即可发起调试，无需依赖公网域名和公网服务器（WebHook）接收回调通知。

### 通用数据结构 Payload

payload 指的是在 websocket 连接上传输的数据，网关的上下行消息采用的都是同一个结构，如下：
```
{
  "op": 0,
  "d": {},
  "s": 42,
  "t": "GATEWAY\_EVENT\_NAME"
}

op 指的是 opcode，参考连接维护
opcode 列表
s 下行消息都会有一个序列号，标识消息的唯一性，客户端需要再发送心跳的时候，携带客户端收到的最新的s。
t和d 主要是用在op为 0 Dispatch 的时候。
t 代表事件类型。
d 代表事件内容，不同事件类型的事件内容格式都不同，请注意识别。
```

### 长连接维护 OpCode

所有 opcode 列表如下：

| **CODE** | **名称** | **客户端行为** | **描述** |
| --- | --- | --- | --- |
| 0 | Dispatch | Receive | 服务端进行消息推送 |
| 1 | Heartbeat | Send/Receive | 客户端或服务端发送心跳 |
| 2 | Identify | Send | 客户端发送鉴权 |
| 6 | Resume | Send | 客户端恢复连接 |
| 7 | Reconnect | Receive | 服务端通知客户端重新连接 |
| 9 | Invalid Session | Receive | 当 identify 或 resume 的时候，如果参数有错，服务端会返回该消息 |
| 10 | Hello | Receive | 当客户端与网关建立 ws 连接之后，网关下发的第一条消息 |
| 11 | Heartbeat ACK | Receive/Reply | 当发送心跳成功之后，就会收到该消息 |
| 12 | HTTP Callback ACK | Reply | 仅用于 http 回调模式的回包，代表机器人收到了平台推送的数据 |

客户端行为含义如下：

Receive 客户端接收到服务端 push 的消息

Send 客户端发送消息

Reply 客户端接收到服务端发送的消息之后的回包（HTTP 回调模式）

### 发起连接到 Gateway

第一步先调用 [获取通用WSS 接入点 | QQ机器人文档](../text) 或 [获取带分片WSS 接入点 | QQ机器人文档](../text) 接口获取网关地址。

会得到一个类似下面这样的地址：

`wss://api.sgroup.qq.com/websocket/`

然后进行 websocket 长连接建立，一旦连接成功，就会返回 OpCode 10 Hello消息。这个消息主要的内容是心跳周期，单位毫秒(milliseconds)，如下：
```
{

"op": 10,

"d": {

"heartbeat\_interval": 45000

}

}
```

### 登录鉴权获得 Session

websocket 长连接建立之后，需要进行登录鉴权，登录鉴权成功后会获得一个 session 会话 id，只有登录成功后，QQ后台才会下发事件通知，

发送一个 OpCode 2 Identify 消息，payload 如下：
```
{

"op": 2,

"d": {

"token": "token string",

"intents": 513,

"shard": [0, 4],

"properties": {

"$os": "linux",

"$browser": "my\_library",

"$device": "my\_library"

}

}

}

```

<!-- | **字段** | **描述** |
| --- | --- |
| token | 格式为"QQBot {AccessToken}" |
| intents | 是此次连接所需要接收的事件，具体可参考 Intents[事件订阅](../text)intents | QQ机器人文档 |
| shard | 考虑到开发者事件接收时可以实现负载均衡，QQ 提供了分片逻辑，事件通知会落在不同的分片上，该参数是个拥有两个元素的数组。例如：[0,4]，代表分为四个片，当前链接是第 0 个片，业务稍后应该继续建立 shard 为[1,4],[2,4],[3,4]的链接，才能完整接收事件，更多详细的内容可以参考 Shard[Shard 机制 | QQ机器人文档](../text)若无需分片，使用[0, 1]即可。 |
| properties | 目前无实际作用，可以按照自己的实际情况填写，也可以留空 | -->

鉴权成功之后，QQ 后台会下发一个 Ready Event，payload 如下：
```
{

"op": 0,

"s": 1,

"t": "READY",

"d": {

"version": 1,

"session\_id": "082ee18c-0be3-491b-9d8b-fbd95c51673a",

"user": {

"id": "6158788878435714165",

"username": "群pro测试机器人",

"bot": true

},

"shard": [0, 0]

}

}
```

### 发送心跳 Ack

鉴权成功之后，就需要按照周期进行心跳发送。d 为客户端收到的最新的消息的 s，如果是首次连接，d 为传 null，payload 如下：
```
{

"op": 1,

"d": 251 // null

}
```


心跳发送成功之后会收到 OpCode 11 Heartbeat ACK消息，payload 如下：

```
{

"op": 11

}
```

### 恢复登录态 Session

有很多原因可能会导致 websocket 长连接断开，断开之后短时间内重连会补发中间遗漏的事件，以保障业务逻辑的正确性。断开重连 gateway 后不需要发送重新登录 Opcode 2 Identify请求。在连接到 Gateway 之后，需要发送 Opcode 6 Resume消息，payload 如下：
```
{

"op": 6,

"d": {

"token": "my\_token",

"session\_id": "session\_id\_i\_stored",

"seq": 1337

}

}
```

其中 seq 指的是在接收事件时候的 s 字段，我们推荐开发者在处理过事件之后记录下 s 这样可以在 resume 的时候传递给 websocket，websocket 会自动补发这个 seq 之后的事件。

恢复成功之后，就开始补发遗漏事件，

所有事件补发完成之后，会下发一个 Resumed Event，payload 如下：

```
{
  "op": 0,
  "s": 2002,
  "t": "RESUMED",
  "d": ""
}
```



### 事件类型 Intents

详细文档：[事件订阅](../text)[intents | QQ机器人文档](../text)


### 分片连接 LoadBalance

详细文档：[Shard 机制 | QQ机器人文档](../text)

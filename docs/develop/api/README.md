# 开发说明

## 接口说明

QQ频道机器人提供两类接口：
- 基于 REST 风格的 OPENAPI
- 基于 WebSocket 提供实时事件通知的事件中心

### 接口域名

- 正式环境：`https://api.sgroup.qq.com/`
- 沙箱环境：`https://sandbox.api.sgroup.qq.com` 沙箱环境只会收到测试频道的事件，且调用openapi仅能操作测试频道

### SDK
- golang: https://github.com/tencent-connect/botgo

## 票据
申请机器人通过后，平台将会下发三个票据。具体描述如下：

| 票据 | 描述 |
| --- | --- |
| app_id | 用于识别一个机器人的 id |
| app_key | 用于在 oauth 场景进行请求签名的密钥，在一些描述中也叫做 app_secret |
| token | 机器人token，用于以机器人身份调用 openapi，格式为 ${app_id}.${random_str} |

### OPENAPI 鉴权方式

使用在 HTTP 上添加 `Authorization` 头来进行鉴权。支持两种类型的 TOKEN

### Bot Token

使用申请机器人时平台返回的机器人 appID + token 拼接而成。此时，所有的操作都是以机器人身份来完成的。

`Authorization: Bot 100000.Cl2FMQZnCjm1XVW7vRze4b7Cq4se7kKWs`

### Bearer Token

使用 OAUTH2.0 接口，通过一次性 CODE 换取的代表用户登录态的 Token。此时所有的操作都是以授权用户的身份来完成的。

`Authorization: Bearer CZhtkLDpNYXgPH9Ml6shqh2OwykChw`

## 加密

只支持 HTTPS 以及 WSS。不支持不安全的 HTTP 与 WS。

## 错误信息描述

使用 HTTP 状态码来代表具体错误。20x 为成功。5xx 错误码代表服务端相关错误。4xx错误代表客户端相关错误，如鉴权不通过。
当 HTTP 状态码不是 20x 的时候，可以从 body 中读取错误信息 json 进行解析，获取具体错误内容。

具体错误处理可以参考`错误处理`目录

## ID 描述

协议中返回的用户ID，频道ID，子频道ID，均是 UINT64 类型的数字。
由于返回在 JSON 中，JS 解析 JSON 中的大数的时候会造成精度丢失所以在返回中都用字符串来返回。

## 数据格式

目前仅支持返回 JSON 格式数据

## 开发流程

- 开发者注册开发者平台账号并创建机器人后，可以通过官方提供的 API 或 SDK 进行机器人业务逻辑的开发。

- 开发者可以阅读本文档后通过原生 HTTP 与 Websocket 的方式进行开发，也可以使用官方提供的 Go SDK 进行开发。

// 本文档将采用 `Go SDK` 的方式进行描述。

### 1.Go 开发环境配置

下载 Golang v1.13 及以上版本。点击[这里](https://golang.org/dl/)进行下载。

### 2.SDK 下载

```bash
go get github.com/tencent-connect/botgo
```

### 3.使用

在项目中引入 SDK：

```go
import bot "github.com/tencent-connect/botgo"
```

定义一个 bot client 来调用 SDK 提供的各种操作 QQ 频道的 API：

```go
token := token.BotToken(conf.AppID, conf.Token)
api := botgo.NewOpenAPI(token).WithTimeout(3 * time.Second) // 使用NewSandboxOpenAPI创建沙箱环境的实例
```

查看本文下方的[例子](#使用例子)和[文档](#文档)获取更多信息。

#### 使用例子

https://github.com/tencent-connect/botgo/tree/master/testcase

## 一种简单的工作流

### 添加机器人

从手Q上，添加机器人到频道中

### 获取频道ID

获取频道ID有两个方法

**1.监听 websocket 事件**

- 监听 `GUILD_CREATE` 类型事件，得到 `Guild ID`
- 监听 `AT_MESSAGE_CREATE` 类型事件，得到 `Guild ID`

**2.查询机器人接入的频道列表**

- 调用 `GET /users/@me/guilds` 获取机器人所在的频道，从中提取 `Guild ID`

### 发送消息

- 使用 `Guild ID` 拉取 `Channels`，得到 `Channel ID`
- 使用 `POST /channels/{channel_id}/messages` 发送消息

### 获取其他数据

- 如果需要其他数据，也可以调用跟其他接口获取

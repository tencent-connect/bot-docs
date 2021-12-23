# Python SDK 接入指南

## 当前版本
![PyPI](https://img.shields.io/pypi/v/qq-bot)

## 安装

``` bash
pip install qq-bot
```

更新包的话需要添加 ``--upgrade`` ``注：需要python3.7+``

## 使用示例-API访问

下面的例子，通过api获取当前机器人的相关信息：

``` py
import qqbot

token = qqbot.Token("{appid}","{token}")
api = qqbot.UserAPI(token, IS_SANDBOX)
user = api.me()

print(user.username)  # 打印机器人名字
```

## 使用示例-异步消息

通过注册需要监听的事件并设置回调函数后，即可完成对事件的监听。

比如下面这个例子：需要监听机器人被@后消息并进行相应的回复。

``` py
# 先初始化需要用的 `token` 对象
t_token = qqbot.Token(test_config["token"]["appid"], test_config["token"]["token"])
# 通过 `qqbot.HandlerType` 定义需要监听的事件（部分事件可能需要权限申请）可以注册多个
qqbot_handler = qqbot.Handler(qqbot.HandlerType.AT_MESSAGE_EVENT_HANDLER, _message_handler)
# 通过 `qqbot.listen_events` 注册需要监听的事件
qqbot.listen_events(t_token, False, qqbot_handler)

# 定义注册事件回调执行函数,如 `_message_handler`
def _message_handler(event, message: Message):
    msg_api = qqbot.MessageAPI(t_token, False)
    # 打印返回信息
    qqbot.logger.info("event %s" % event + ",receive message %s" % message.content)
    # 构造消息发送请求数据对象
    send = qqbot.MessageSendRequest("<@%s>谢谢你，加油" % message.author.id, message.id)
    # 通过api发送回复消息
    msg_api.post_message(message.channel_id, send)
```

注：当前支持事件及回调事件可参考[事件监听](websocket/listen_events.md#当前支持的事件类型)

## 日志打印

基于自带的 logging 模块封装的日志模块，提供了日志写入以及美化了打印格式，并支持通过设置 `QQBOT_LOG_LEVEL` 环境变量来调整日志打印级别（默认打印级别为 `INFO`）。

### 使用方法

``` py
# 引用模块
from core.util import logging

# 获取 `logger` 实例
logger = logging.getLogger(__name__)

# 打印日志
logger.info("hello world!")
```

### 设置日志级别

通过 `export` 命令添加 `QQBOT_LOG_LEVEL` 环境变量可以设置日志级别。例如：

``` bash
export QQBOT_LOG_LEVEL=10  # 10表示DEBUG级别
```

几个可选取值（参考了[logging模块的取值](https://docs.python.org/3/library/logging.html#levels)）：

| Level | 取值 |
| ----- | ------------- |
| CRITICAL  | 50  |
| ERROR | 40 |
| WARNING | 30 |
| INFO | 20 |
| DEBUG | 10 |
| NOTSET | 0 |

### 禁用日志文件输出

默认情况下 qqbot 会在当前执行目录下生成格式为 `qqbot.log.*` 的日志文件。如果想禁用这些日志文件，可以通过设置 `QQBOT_DISABLE_LOG` 环境变量为 1 来关闭。

``` bash
export QQBOT_DISABLE_LOG=1  # 1表示禁用日志
```

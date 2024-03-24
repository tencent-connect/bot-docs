# Python SDK 接入指南
![PyPI](https://img.shields.io/pypi/v/qq-botpy)

## sdk 安装

外发版本通过下面方式安装

```bash
pip install qq-botpy
```

> 更新包的话需要添加 `--upgrade` `兼容版本：python3.8+`

## sdk 使用

需要使用的地方`import botpy`

```python
import botpy
```

### 兼容提示

> 原机器人的老版本`qq-bot`仍然可以使用，但新接口的支持上会逐渐暂停，此次升级不会影响线上使用的机器人 


## 示例机器人

[`examples`](https://github.com/tencent-connect/botpy/tree/master/examples) 目录下存放示例机器人，可供实现参考。

## botpy-API

基于 [机器人开放平台API](https://bot.q.qq.com/wiki/develop/api/) 实现的 API 接口封装。

### 快速示例

通过继承实现`bot.Client`, 实现自己的机器人Client 

```python
import botpy
from botpy.types.message import Message

class MyClient(botpy.Client):
    async def on_at_message_create(self, message: Message):
        await self.api.post_message(channel_id=message.channel_id, content="content")

intents = botpy.Intents(public_guild_messages=True) 
client = MyClient(intents=intents)
client.run(appid={appid}, token={secret})
```

## botpy-事件监听

异步模块基于 websocket 技术用于监听频道内的相关事件，如消息、成员变化等事件，用于开发者对事件进行相应的处理。

更完整的事件说明，请参考 [事件监听](https://bot.q.qq.com/wiki/develop/pythonsdk/websocket/listen_events.html)

## 订阅事件的方法

### 方法一：

```python
intents = botpy.Intents() 
client = MyClient(intents=intents)
```

在Intents中填入对应的[参数](#参数列表)

例子：

```python
intents = botpy.Intents(public_guild_messages=True, direct_message=True, guilds=True)
```

### 方法二：

```python
intents = botpy.Intents.none()
```

然后打开对应的订阅([参数列表](#参数列表))

```python
intents.public_guild_messages=True
intents.direct_message=True
intents.guilds=True
```

说明：

方法二对应的快捷订阅方式为

1. 订阅所有事件

```python
intents = botpy.Intents.all()
```

2. 订阅所有的公域事件

```python
intents = botpy.Intents.default()
```

### 备注

也可以通过预设置的类型，设置需要监听的事件通道

```python
import botpy

intents = botpy.Intents.none()
intents.public_guild_messages=True
```

#### 参数列表

| 参数                      | 含义                                 |
| ----------------------- | ---------------------------------- |
| public_guild_messages   | 公域消息事件                             |
| guild_messages          | 消息事件 **(仅 `私域` 机器人能够设置此 intents)** |
| direct_message          | 私信事件                               |
| guild_message_reactions | 消息相关互动事件                           |
| guilds                  | 频道事件                               |
| guild_members           | 频道成员事件                             |
| interaction             | 互动事件                               |
| message_audit           | 消息审核事件                             |
| forums                  | 论坛事件 **(仅 `私域` 机器人能够设置此 intents)** |
| audio_action            | 音频事件                               |

## 日志打印

基于自带的 logging 模块封装的日志模块，提供了日志写入以及美化了打印格式，并支持调整打印级别（默认打印级别为 `INFO`）。

### 使用方法

引用模块，并获取 `logger` 实例：

```python
from botpy import logging
```

或者通过`botpy.logger`也可以获取logger对象

然后就可以愉快地使用 logger 进行打印。例如：

```python
from botpy import logger

logger.info("hello world!")
```

### 日志设置

SDK的日志设置集成在`bot.Client`的实例化阶段，也可通过[`logging.configure_logging`](botpy/logging.py)修改(均为可选)

```python
import botpy

# 示例，非默认值
botpy.Client(
    log_level=10,
    log_format="new format",
    bot_log=None,
    ext_handlers=False,
    log_config="log_config.json"
)
```

### log_level

日志级别，默认为`INFO`

命令行启动py可增加参数`-d` 或 `--debug`快捷打开debug日志

```bash
python3 demo_at_reply.py -d
```

几个可选取值（参考了[logging模块的取值](https://docs.python.org/3/library/logging.html#levels)）：

| Level    | 取值  |
| -------- | --- |
| CRITICAL | 50  |
| ERROR    | 40  |
| WARNING  | 30  |
| INFO     | 20  |
| DEBUG    | 10  |
| NOTSET   | 0   |

### log_format

日志控制台输出格式，默认为 `"\033[1;33m[%(levelname)s]\t(%(filename)s:%(lineno)s)%(funcName)s\t\033[0m%(message)s"`

### bot_log

是否启用`botpy`日志，默认为`True`

`True` 启用  
`None` 禁用 拓展  
`False` 禁用 拓展+控制台输出

### ext_handlers

日志Handler拓展，为`True`使用默认拓展，`False`不添加拓展，可用list添加多个拓展。默认为`True`

[默认拓展](./botpy/logging.py)

```python
import os
import logging
from logging.handlers import TimedRotatingFileHandler

DEFAULT_FILE_HANDLER = {
    # 要实例化的Handler
    "handler": TimedRotatingFileHandler,
    # 可选 Default to DEFAULT_FILE_FORMAT
    "format": "%(asctime)s\t[%(levelname)s]\t(%(filename)s:%(lineno)s)%(funcName)s\t%(message)s",
    # 可选 Default to DEBUG
    "level": logging.DEBUG,
    # 以下是Handler相关参数
    "when": "D",
    "backupCount": 7,
    "encoding": "utf-8",
    # *特殊* 对于filename参数，其中如有 %(name)s 会在实例化阶段填入相应的日志name
    "filename": os.path.join(os.getcwd(), "%(name)s.log"),
}
```

#### 修改默认拓展

```python
import os
import botpy
from botpy.logging import DEFAULT_FILE_HANDLER

# 修改日志路径
DEFAULT_FILE_HANDLER["filename"] = os.path.join(os.getcwd(), "log", "%(name)s.log")
# 修改日志格式
DEFAULT_FILE_HANDLER["format"] = "new format"

botpy.Client(ext_handlers=DEFAULT_FILE_HANDLER)
```

### log_config

该参数将传入`logging.config.dictConfig`(内置logging而非botpy.logging)，如果为.json/.yaml文件路径将从文件中读取配置，无默认值

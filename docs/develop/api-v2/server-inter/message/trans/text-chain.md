# 文本交互

<!-- > 文本消息内嵌的蓝色文本，QQ Bot 提供文本消息的交互能力，当开发者使用指定的格式发送消息，用户即可在消息体上进行点击交互操作，例如@某人，跳转链接等。 -->
::: tip 说明
QQBot 提供文本消息的交互能力，当开发者使用指定的格式发送消息，用户即可在消息体上进行点击交互操作，例如@某人，跳转链接等。
:::

## 使用 @ 能力

<!-- > 群聊&文字子频道，支持 文本消息、图文消息、markdown消息。 -->
::: tip 说明
群聊&文字子频道，支持含有文本文字的消息类型，如：文本消息、图文消息、markdown 消息。
:::

1. @某人｜群聊、文字子频道可用

嵌入文本使用格式：`<@userid>`

客户端解析为： <font style="color: #09f">@用户</font> 标签

2. @全部成员｜仅在文字子频道可用

嵌入文本使用格式：`@everyone`

客户端解析为： <font style="color: #09f">@全部成员</font> 标签，需要机器人拥有发送 <font style="color: #09f">@全部成员</font> 消息的权限，

<!-- ## 指令操作

目前仅在 markdown 支持。

**1. 回车指令格式（点击后，文本直接发送）**

嵌入文本使用格式：

`[/回车指令](mqqapi://aio/inlinecmd?command={urlencode(/回车指令)}&reply=false&enter=true)`

客户端解析为： <font style="color: #09f">/回车指令</font> 用户可点击的标签

- `command` 自定义文本，数据需要 `url 编码`。
- `enter` 参数必须 `true`。
- `reply` 参数必须 `false`。

**2. 参数指令格式（点击后，文本插入输入框，用户自行编辑发送）**

嵌入文本使用格式：

`[/参数指令](mqqapi://aio/inlinecmd?command={urlencode(/参数指令（带引用）)&reply=true&enter=false) `

客户端解析为： <font style="color: #09f">/参数指令</font> 用户可点击的标签

- `command` 自定义文本，数据需要 `url 编码`。
- `enter` 参数必须 `false`。
- `reply` 可选 `true` 或 `false`，填 `true` 则带引用回复到输入框中。 -->
  
<!-- ```
<cmd reply=true cmd="/参数指令（带引用本消息）">
<cmd reply=false cmd="/参数指令（不带引用）">
``` -->
<!-- 原生 scheme 格式： -->


## 跳转子频道

仅频道可用。

嵌入文本使用格式：`<#channel_id>`

客户端解析为： <font style="color: #09f">#XXX文字子频道</font> 标签，点击可以跳转至子频道，仅支持当前频道内的子频道。


## 表情

仅频道可用，解析为系统表情。 具体表情id参考 [Emoji 列表](../../../openapi/emoji/model.md#Emoji%20列表)。

嵌入文本使用格式：`<emoji:id>`

- 仅支持 `type = 1` 的系统表情。
- `type = 2` 的 emoji 表情直接按字符串填写即可。

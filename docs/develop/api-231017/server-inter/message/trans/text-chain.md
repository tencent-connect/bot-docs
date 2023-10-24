# ✅文字链

> 文本消息内嵌的蓝色文本，QQ Bot 提供文本消息的交互能力，当开发者使用指定的格式发送消息，用户即可在消息体上进行点击交互操作，例如@某人，跳转链接等。

## AT 相关

> 群聊&文字子频道，支持 文本消息、图文消息、markdown消息。

at 某人，解析为 <font style="background: #C7ECFF">@用户</font> 标签

嵌入文本格式：

`<@userid>`

at 所有人，解析为 <font style="background: #C7ECFF">@所有人</font> 标签，需要机器人拥有发送 <font style="background: #C7ECFF">@所有人</font> 消息的权限，仅在文字子频道可用

嵌入文本格式：

`@everyone`

## 指令相关

目前仅在 markdown 支持。

格式：

`<cmd enter=truereply=true cmd="/回车指令">`

原生 scheme 格式：

`[/回车指令](mqqapi://aio/inlinecmd?command={urlencode('/回车指令')}&reply=false&enter=true)`

格式：

```
<cmd reply=true cmd="/参数指令（带引用本消息）">
<cmd reply=false cmd="/参数指令（不带引用）">
```

原生 scheme 格式：

```
[/参数指令（带引用本消息）](mqqapi://aio/inlinecmd?command="{urlencode('/参数指令（带引用本消息）')"&reply=true&enter=false) 
[/参数指令（不带引用）](mqqapi://aio/inlinecmd?command="{urlencode('/参数指令（不带引用）')"&reply=false&enter=false) 
```

## 跳转子频道

仅频道可用，#子频道 解析为 <font style="background: #C7ECFF">#子频道</font> 标签，点击可以跳转至子频道，仅支持当前频道内的子频道

`<#channel_id>`

## 表情

仅频道可用，解析为系统表情，具体表情id参考 [Emoji 列表](../../../openapi/emoji/model.md#Emoji%20列表)，仅支持type=1的系统表情，type=2的emoji表情直接按字符串填写即可`<emoji:id>`

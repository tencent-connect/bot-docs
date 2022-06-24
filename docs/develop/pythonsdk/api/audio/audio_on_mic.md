# 机器人上麦

## 使用示例

```py
import botpy
from botpy.audio import Audio

class MyClient(botpy.Client):
    async def on_audio_start(self, audio: Audio):
        await self.api.on_microphone(audio.channel_id)

intents = botpy.Intents(audio_action=True)
client = MyClient(intents=intents)
client.run(appid={appid}, token={token})

```

## 参数说明

| 字段名       | 类型                                    | 描述           |
| ------------ | ------------------------------------- | -------------- |
| channel_id    | String                                | 子频道 id      |

## 返回说明

```json
{}
```

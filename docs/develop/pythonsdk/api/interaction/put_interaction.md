# 异步更新交互数据

对互动回调事件进行数据异步回复更新

## 使用示例

#### sync

```python
import qqbot

token = qqbot.Token({appid}, {token})


def demo():
    api = qqbot.InteractionAPI(token, False)
    data = InteractionData(type=InteractionDataType.INLINE_KEYBOARD_BUTTON_CLICK, resolved="Test")
    result = await interaction_api.put_interaction(interaction_id, data)
```

#### async

```python
import qqbot

token = qqbot.Token({appid}, {token})


async def demo():
    api = qqbot.AsyncInteractionAPI(token, False)
    data = InteractionData(type=InteractionDataType.INLINE_KEYBOARD_BUTTON_CLICK, resolved="Test")
    result = await interaction_api.put_interaction(interaction_id, data)
```

## 参数说明

| 字段名            | 必填 | 类型                                  | 描述                             |
| -----------      | ---- | ------------------------------------- | -------------------------------- |
| interaction_id   | 是   | string                                | 子频道 ID |
| interaction_data | 是   | [InteractionData](../../model.interaction.md#interactiondata)      |由具体互动回调的类型来决定，当前支持的类型有：消息按钮组件                   |

## 返回说明

返回是否更新成功

## 返回示例

`data`：

```Python
True
```


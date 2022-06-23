# 获取子频道身份组权限 

获取指定子频道身份组的权限。

## 使用示例

#### sync

```python
import botpy
from botpy.message import Message

class MyClient(botpy.Client):
    async def on_at_message_create(self, message: Message):
        await self.api.get_channel_role_permissions(channel_id="xxxx", role_id="xxxx")

intents = botpy.Intents(public_guild_messages=True)
client = MyClient(intents=intents)
client.run(appid={appid}, token={token})
```

## 参数说明

| 字段名    | 必填 | 类型   | 描述                                        |
| --------- | ---- | ------ | ------------------------------------------- |
| channel_id | 是   | string | 子频道 ID                                   |
| role_id    | 是   | string | 身份组 ID |

## 返回说明

返回 [ChannelPermissions](#channelpermissions) 对象。

### ChannelPermissions

| 字段名      | 类型   | 描述                                                   |
| ----------- | ------ | ------------------------------------------------------ |
| channel_id  | string | 子频道 ID                                              |
| role_id     | string | 身份组 ID，            |
| permissions | string | 用户拥有的子频道权限，参考 [Permissions](#permissions) |

### Permissions

权限是 QQ 频道管理频道成员的一种方式，管理员可以对不同的人、不同的子频道设置特定的权限。用户的权限包括`个人权限`和`身份组权限`两部分，最终生效是取两种权限的并集。

权限在`服务端`使用`十六进制`方式描述，现有权限类型如下：

| 权限         | 值                   | 描述                                         |
| ------------ | -------------------- | -------------------------------------------- |
| 可查看子频道 | 0x0000000001(1 << 0) | 支持`指定成员`可见类型，支持`身份组`可见类型 |
| 可管理子频道 | 0x0000000002(1 << 1) | 创建者、管理员、子频道管理员都具有此权限     |
| 可发言子频道 | 0x0000000004(1 << 2) | 支持`指定成员`发言类型，支持`身份组`发言类型 |

::: tip 提示

对`位运算`和`移位操作符`不熟悉的可参考[相关文档](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Expressions_and_Operators#%E4%BD%8D%E8%BF%90%E7%AE%97%E7%AC%A6)。
以上述`可发言子频道`权限为例，操作数`1`经`1<<2`移位操作后，对应的二进制数为`100`，对应的`16`进制数为`0x4`。同理如果要表示权限`可发言 + 可查看`，将两种权限做加法即可，即：`0x0000000002`+`0x0000000004`=`0x0000000006`。

:::

`SDK`中权限用`十进制字符串`描述，以下面[返回示例](#返回示例)为例，`permissions`是`'1'`，表示拥有`可查看子频道(1)`权限。

## 返回示例

`data`：

```json
{
  "channel_id": 'CHANNEL_ID',
  "role_id": 'ROLE_ID',
  "permissions": '1'
}
```

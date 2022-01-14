# 修改子频道身份组权限 <Badge text="v1.0.0" />

修改子频道身份组的权限。

## 使用示例

#### sync

```python
import qqbot

token = qqbot.Token({appid}, {token})


def demo():
    api = qqbot.ChannelPermissionsAPI(token, False)
    is_success = api.update_channel_role_permissions(channel_id, role_id, channel_permissions)
```

#### async

```python
import qqbot

token = qqbot.Token({appid}, {token})


async def demo():
    api = qqbot.AsyncChannelPermissionsAPI(token, False)
    is_success = await api.update_channel_role_permissions(channel_id, role_id, channel_permissions)
```

::: warning 注意

- 要求操作人具有管理子频道的权限，如果是机器人，则需要将机器人设置为管理员。
- 参数包括 add 和 remove 两个字段，分别表示授予的权限以及删除的权限。要授予用户权限即把 add 对应位置 1，删除用户权限即把 remove 对应位置 1。当两个字段同一位都为 1，表现为删除权限。
- 本接口不支持修改可管理子频道权限。
  :::

::: warning 注意

- 要求操作人具有管理子频道的权限，如果是机器人，则需要将机器人设置为管理员。
- 本接口不支持修改`可管理子频道`权限。

:::

## 参数说明

| 字段名           | 必填 | 类型                                  | 描述                                      |
| ---------------- | ---- | ------------------------------------- | ----------------------------------------- |
| channel_id        | 是   | string                                | 子频道 ID                                 |
| role_id           | 是   | string                                | 身份组 ID  |
| channel_permissions | 是   | [UpdatePermission](#updatepermission) | 权限参数                                  |

### UpdatePermission

参数包括`add`和`remove`两个字段，分别表示`授予`的权限以及`删除`的权限。要授予用户权限即把`add`对应位`置1`，删除用户权限即把`remove`对应位`置1`。当两个字段同一位`都为1`，表现为`删除`权限。

| 字段名 | 类型   | 描述                                                                                |
| ------ | ------ | ----------------------------------------------------------------------------------- |
| add    | string | **字符串**形式的**十进制**数表示**赋予**用户的权限，参考[Permissions](#permissions) |
| remove | string | **字符串**形式的**十进制**数表示**删除**用户的权限，参考[Permissions](#permissions) |

### Permissions

权限是 QQ 频道管理频道成员的一种方式，管理员可以对不同的人、不同的子频道设置特定的权限。用户的权限包括`个人权限`和`身份组权限`两部分，最终生效是取两种权限的并集。

权限在`服务端`使用`十六进制`方式描述，现有权限类型如下：

| 权限         | 值                   | 描述                                         |
| ------------ | -------------------- | -------------------------------------------- |
| 可查看子频道 | 0x0000000001(1 << 0) | 支持`指定成员`可见类型，支持`身份组`可见类型 |
| 可管理子频道 | 0x0000000002(1 << 1) | 创建者、管理员、子频道管理员都具有此权限     |
| 可发言子频道 | 0x0000000004(1 << 2) | 支持`指定成员`发言类型，支持`身份组`发言类型 |

::: tip 提示

对`位运算`和`移位操作符`
不熟悉的可参考[相关文档](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Expressions_and_Operators#%E4%BD%8D%E8%BF%90%E7%AE%97%E7%AC%A6)。
以上述`可发言子频道`权限为例，操作数`1`经`1<<2`移位操作后，对应的二进制数为`100`，对应的`16`进制数为`0x4`。同理如果要表示权限`可发言 + 可查看`，将两种权限做加法即可，即：`0x0000000002`
+`0x0000000004`=`0x0000000006`。

:::

`SDK`中权限用`十进制字符串`描述，可参考如下提示：

::: tip 提示

以添加`可发言子频道`权限为例：

```python
async def demo():
    api = qqbot.AsyncChannelPermissionsAPI(token, False)
    update_permissions = qqbot.UpdatePermission(add="4")
    is_succeeded = await api.update_channel_role_permissions(channel_id, role_id, update_permissions)
```

同理，移除`可发言子频道`如下：

```python
async def demo():
    api = qqbot.AsyncChannelPermissionsAPI(token, False)
    update_permissions = qqbot.UpdatePermission(remove="4")
    is_succeeded = await api.update_channel_role_permissions(channel_id, role_id, update_permissions)
```

## 返回示例

`data`：

```Python
True
```

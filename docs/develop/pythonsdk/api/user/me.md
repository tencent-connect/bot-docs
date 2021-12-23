# 获取当前用户信息

## 使用示例

``` python
import qqbot

token = qqbot.Token({appid}, {token})

api = qqbot.UserAPI(token, False)
user = api.me()
```

## 返回说明

使用当前用户信息填充的 [User](#user) 对象

### User

| 字段名             | 类型    | 描述                                                                                               |
| ------------------ | ------- | -------------------------------------------------------------------------------------------------- |
| id                 | string  | 用户 ID                                                                                           |
| username           | string  | 用户名                                                                                             |
| avatar             | string  | 用户头像地址                                                                                       |
| union_openid       | string  | 特殊关联应用的 openid，需要特殊申请并配置后才会返回。如需申请，请联系平台运营人员。                |
| union_user_account | string  | 机器人关联的互联应用的用户信息，与 union_openid 关联的应用是同一个。如需申请，请联系平台运营人员。 |

## 返回示例

`data`：

```json
{
  "id": "xxxxxx",
  "username": "zsh-测试中",
  "avatar": "xxxxxx",
  "union_openid": "xxxxxx",
  "union_user_account": ""
}
```

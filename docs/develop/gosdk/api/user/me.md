# 获取当前用户信息

## 使用示例

``` go
token := token.BotToken("appid", "token")
api := botgo.NewOpenAPI(token).WithTimeout(3 * time.Second)
ctx := context.Background()

user, meError := api.Me(ctx)
if meError != nil {
  log.Fatalln("调用 Me 接口失败, err = ", meError)
}
```

## 返回说明

使用当前用户信息填充的 [User](#user) 对象

### User

| 字段名             | 类型    | 描述                                                                                               |
| ------------------ | ------- | -------------------------------------------------------------------------------------------------- |
| ID                 | string  | 用户 ID                                                                                           |
| Username           | string  | 用户名                                                                                             |
| Avatar             | string  | 用户头像地址                                                                                       |
| Bot                | bool    | 是否是机器人                                                                            ｜
| UnionOpenID        | string  | 特殊关联应用的 openid，需要特殊申请并配置后才会返回。如需申请，请联系平台运营人员。                |
| UnionUserAccount   | string  | 机器人关联的互联应用的用户信息，与 union_openid 关联的应用是同一个。如需申请，请联系平台运营人员。 |

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

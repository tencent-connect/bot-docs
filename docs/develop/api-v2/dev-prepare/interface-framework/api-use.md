
# 接口调用与鉴权

<!-- > QQ BOT 服务端开放的 openapi 接口，均使用 https 方式进行调用，通过  `access token` 机制实现对 openapi 接口调用的鉴权。 -->

::: tip 说明
`QQ BOT` 服务端开放的 `openapi` 接口，均使用 `https` 方式进行调用，通过  `access token` 机制实现对 openapi 接口调用的鉴权。
:::

## 获取调用凭证

- **请求**

<table>
	<tr>
	  <th colspan="2">基本</th>
	</tr>
	<tr>
    <td>HTTP URL</td>
    <td>https://bots.qq.com/app/getAppAccessToken</td>
	</tr>
	<tr>
    <td>HTTP Method</td>
    <td>POST</td>
	</tr>
	<!-- <tr>
    <td>接口频率限制</td>
    <td></td>
	</tr> -->
</table>

- **请求参数**

| **属性** | **类型** | **必填** | **说明** |
| --- | --- | --- | --- |
| appId | string | 是 | 在开放平台管理端上获得。 |
| clientSecret | string | 是 | 在开放平台管理端上获得。 |

- **返回参数**

| **属性** | **类型** | **说明** |
| --- | --- | --- |
| access_token | string | 获取到的凭证。 |
| expires_in | number | 凭证有效时间，单位：秒。目前是7200秒之内的值。 |

- **错误码**

| **错误码** | **错误码取值** |
| --- | --- |
| 0 | ok |

- **调用示例**

```shell
curl --location 'https://bots.qq.com/app/getAppAccessToken' \
--header 'Content-Type: application/json' \
--data '{
  "appId": "APPID",
  "clientSecret": "CLIENTSECRET"
}'
```

- **返回示例**
```json
{
  "access_token": "ACCESS_TOKEN",
  "expires_in": "7200"
}
```

- **其他说明**

目前 `access_token` 生命周期默认 `7200` 秒，每次请求不会刷新新的 `access_token`，开发者需要在过期后自行刷新 `access_token`，保证调用链路权限正常。

在上一个 `access_token` 接近过期时间 `60` 秒内，获取 `access_token` 时，会获得一个新的 `access_token`，老的 `access_token` 在这个`60`秒内仍然有效。

## 鉴权方式

在每次调用 https 的 openapi 开放接口请求的时候，需要在 header 内引入 `access_token` 进行调用权限验证。

**统一地址**

```
https://api.sgroup.qq.com
```


**请求头**

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| Authorization | string | 是 | 格式值："QQBot ACCESS_TOKEN" |
| X-Union-Appid | string | 是 | 格式值："BOT_APPID", 机器人 appid |

**示例**
```json
'headers'': {
  'Authorization': "QQBot {ACCESS_TOKEN}",
  'X-Union-Appid': "{BOT_APPID}",
}
```

<!-- ## 调用权限错误码

与  `access token` 权限有关的错误码。 -->

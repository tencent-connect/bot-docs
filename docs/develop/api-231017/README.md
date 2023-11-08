# 注册申请机器人

[QQ 开放平台](https://q.qq.com/#/) 获得必要接入信息，AppId，AppSecret，Token

## 票据
申请机器人通过后，平台将会下发三个票据。具体描述如下：

| 票据 | 描述 |
| --- | --- |
| AppId | 用于识别一个机器人的 id |
| AppSecret | 用于在 oauth 场景进行请求签名的密钥 |
| Token | 机器人token，用于以机器人身份调用 openapi，格式为 ${app_id}.${random_str} |

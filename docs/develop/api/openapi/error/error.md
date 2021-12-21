# openapi 错误

## 错误处理

错误码分为两部分：

- http 状态码
- http body 返回的 json 中的 code

如：
![error](./error.png)

### http 状态码

| 值   | 含义                  |
| :--- | :-------------------- |
| 20x  | 成功 (200,201,204 等) |
| 401  | 认证失败              |
| 404  | 未找到 API            |
| 405  | http method 不允许    |
| 429  | 频率限制              |
| 500  | 处理失败              |
| 504  | 处理失败              |

### code

| 值              | 含义                                                                                                                                              |
| :-------------- | :------------------------------------------------------------------------------------------------------------------------------------------------ |
| 10001           | UnknownAccount 账号异常                                                                                                                           |
| 10003           | UnknownChannel 子频道异常                                                                                                                         |
| 10004           | UnknownGuild 频道异常                                                                                                                             |
| 11281           | ErrorCheckAdminFailed 检查是否是管理员失败，系统错误，一般重试一次会好，最多只能重试一次                                                          |
| 11282           | ErrorCheckAdminNotPass 检查是否是管理员未通过，该接口需要管理员权限，但是用户在添加机器人的时候并未授予该权限，属于逻辑错误，可以提示用户进行授权 |
| 11251           | ErrorWrongAppid 参数中的 appid 错误，开发者填的 token 错误，appid 无法识别                                                                        |
| 11252           | ErrorCheckAppPrivilegeFailed 检查应用权限失败，系统错误，一般重试一次会好，最多只能重试一次                                                       |
| 11253           | ErrorCheckAppPrivilegeNotPass 检查应用权限不通过，该机器人应用未获得调用该接口的权限，需要向平台申请                                              |
| 11254           | ErrorInterfaceForbidden 应用接口被封禁，该机器人虽然获得了该接口权限，但是被封禁了。                                                              |
| 11261           | ErrorWrongAppid 参数中缺少 appid，同 11251                                                                                                        |
| 11262           | ErrorCheckRobot 当前接口不支持使用机器人 Bot Token 调用                                                                                           |
| 11263           | ErrorCheckGuildAuth 检查频道权限失败，系统错误，一般重试一次会好，最多只能重试一次                                                                |
| 11264           | ErrorGuildAuthNotPass 检查小站权限未通过，管理员添加机器人的时候未授予该接口权限，属于逻辑错误，可提示用户进行授权                                |
| 11265           | ErrorRobotHasBaned 机器人已经被封禁                                                                                                               |
| 11241           | ErrorWrongToken 参数中缺少 token                                                                                                                  |
| 11242           | ErrorCheckTokenFailed 校验 token 失败，系统错误，一般重试一次会好，最多只能重试一次                                                               |
| 11243           | ErrorCheckTokenNotPass 校验 token 未通过，用户填充的 token 错误，需要开发者进行检查                                                               |
| 11273           | ErrorCheckUserAuth 检查用户权限失败，当前接口不支持使用 Bearer Token 调用                                                                         |
| 11274           | ErrorUserAuthNotPass 检查用户权限未通过，用户 OAuth 授权时未给与该接口权限，可提示用户重新进行授权                                                |
| 11275           | ErrorWrongAppid 无 appid ，同 11251                                                                                                               |
| 12001           | ReplaceIDFailed 替换 id 失败                                                                                                                      |
| 12002           | RequestInvalid 请求体错误                                                                                                                         |
| 12003           | ResponseInvalid 回包错误                                                                                                                          |
| 20028           | ChannelHitWriteRateLimit 子频道消息触发限频                                                                                                       |
| 50006           | CannotSendEmptyMessage 消息为空                                                                                                                   |
| 50035           | InvalidFormBody form-data 内容异常                                                                                                                |
| 304003          | URL_NOT_ALLOWED url 未报备                                                                                                                        |
| 304004          | ARK_NOT_ALLOWED 没有发 ark 消息权限                                                                                                               |
| 304005          | EMBED_LIMIT embed 长度超限                                                                                                                        |
| 304006          | SERVER_CONFIG 后台配置错误                                                                                                                        |
| 304007          | GET_GUILD 查询频道异常                                                                                                                            |
| 304008          | GET_BOT 查询机器人异常                                                                                                                            |
| 304009          | GET_CHENNAL 查询子频道异常                                                                                                                        |
| 304010          | CHANGE_IMAGE_URL 图片转存错误                                                                                                                     |
| 304011          | NO_TEMPLATE 模板不存在                                                                                                                            |
| 304012          | GET_TEMPLATE 取模板错误                                                                                                                           |
| 304014          | ARK_PRIVILEGE 没有模板权限                                                                                                                        |
| 304016          | SEND_ERROR 发消息错误                                                                                                                             |
| 304017          | UPLOAD_IMAGE 图片上传错误                                                                                                                         |
| 304018          | SESSION_NOT_EXIST 机器人没连上 gateway                                                                                                            |
| 304019          | AT_EVERYONE_TIMES @全体成员 次数超限                                                                                                              |
| 304020          | FILE_SIZE 文件大小超限                                                                                                                            |
| 304021          | GET_FILE 下载文件错误                                                                                                                             |
| 304022          | PUSH_TIME 推送消息时间限制                                                                                                                        |
| 304023          | PUSH_MSG_ASYNC_OK 推送消息异步调用成功, 等待人工审核                                                                                              |
| 304024          | REPLY_MSG_ASYNC_OK 回复消息异步调用成功, 等待人工审核                                                                                             |
| 304025          | BEAT 消息被打击                                                                                                                                   |
| 304026          | MSG_ID 回复的消息 id 错误                                                                                                                         |
| 304027          | MSG_EXPIRE 回复的消息过期                                                                                                                         |
| 304028          | MSG_PROTECT 非 At 当前用户的消息不允许回复                                                                                                        |
| 304029          | CORPUS_ERROR 调语料服务错误                                                                                                                       |
| 304030          | CORPUS_NOT_MATCH 语料不匹配
| 500000~500999   | 公告错误                                                                                                                                        |
| 501001          | 参数校验失败                                                                                                                                        |
| 501002          | 创建子频道公告失败(可重试)                                                                                                                                        |
| 501003          | 删除子频道公告失败(可重试)                                                                                                                                        |
| 501004          | 获取频道信息失败(可重试)                                                                                                                                         |
| 501005          | MessageID 错误                                                                                                                                        |
| 501006          | 创建频道全局公告失败(可重试)                                                                                                                                          |
| 501007          | 删除频道全局公告失败(可重试)                                                                                                                                         |
| 501008          | MessageID 不存在                                                                                                                                        |
| 1000000~2999999 | 发消息错误                                                                                                                                        |
| 1100100         | 安全打击：消息被限频                                                                                                                              |
| 1100101         | 安全打击：内容涉及敏感，请返回修改                                                                                                                |
| 1100102         | 安全打击：抱歉，暂未获得新功能体验资格                                                                                                            |
| 1100103         | 安全打击                                                                                                                                          |
| 1100104         | 安全打击：该群已失效或当前群已不存在                                                                                                              |
| 1100300         | 系统内部错误                                                                                                                                      |
| 1100301         | 调用方不是群成员                                                                                                                                  |
| 1100302         | 获取指定频道名称失败                                                                                                                              |
| 1100303         | 主页频道非管理员不允许发消息                                                                                                                      |
| 1100304         | @次数鉴权失败                                                                                                                                     |
| 1100305         | TinyId 转换 Uin 失败                                                                                                                              |
| 1100306         | 非私有频道成员                                                                                                                                    |
| 1100307         | 非白名单应用子频道                                                                                                                                |
| 1100308         | 触发频道内限频                                                                                                                                    |
| 1100499         | 其他错误                                                                                                                                          |

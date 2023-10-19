# 唯一身份机制

不同的 bot（AppId） 获取到的用户 openid，群 openid，频道 openid 均不一样，若跨业务有串联身份需求，后续提供跨 AppId 绑定后，使用 unionid 打通身份。

举个例子：

> - 不同 bot 在单聊场景，获取到的用户 openid 不一样；称为 user\_openid
> - 不同 bot 在群聊场景，获取到的群 openid 不一样；称为 group\_openid
> - 同一个 bot 在不同的群获取到同一个用户的 openid 不一样； 称为 member\_openid

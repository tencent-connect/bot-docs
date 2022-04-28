# v.3(2022.03.11)

## 一、机器人/小程序管理端

### 1. 新增小程序一键加入频道

开发者可以通过绑定频道，引导小程序用户入驻频道，提升自有频道的用户量

详细内容请参考 [【能力新增】小程序一键加频道](https://qun.qq.com/qqweb/qunpro/share?_wv=3&_wwv=128&inviteCode=YFsQh&contentID=INSF&businessType=2&from=181074&biz=ka&shareSource=5)

### 2. 新增开发者指令和服务使用场景

#### （1）未提交审核的指令

模块入口：发布设置-功能配置-指令

<img :src="$withBotBase('/images/newfeature/nine/function_config_directive.jpg')" alt="功能配置-指令">

模块入口：发布设置-功能配置-服务

<img :src="$withBotBase('/images/newfeature/nine/function_config_serve.jpg')" alt="功能配置-服务">

#### （2）已提交审核的指令

请将指令删除后，重新配置即可

### 3. 机器人指令面板区分私信/频道

<img :src="$withBotBase('/images/newfeature/nine/robot_message_channel.jpg')" alt="机器人指令面板区分私信/频道">

备注：开发者需先在开发者端配置私信下的指令服（具体操作见2--“新增开发者指令和服务使用场景”），3月15日后发布手q8883版本可展示

### 4. 新增GitHub开发者资料卡

支持绑定平台账号，将Github资料卡同步到频道

添加路径：频道左侧头像按钮-绑定平台账号-添加平台账号-GitHub。注意：需手机网络能正常打开GitHub官网才可绑定成功

<img :src="$withBotBase('/images/newfeature/nine/github_datacard.jpg')" alt="GitHub开发者资料卡">

## 二、开放平台

### 1. 机器人和小程序账号打通

详情请见入驻文档：[开发者管理端入驻文档](https://doc.weixin.qq.com/doc/w3_AOAAjAaFABEKqWS60L2SDepr1pduA?scode=AJEAIQdfAAoMDecxapAWUAZgYYALY)预计3月11日发布

### 2. 支持创建多个机器人

企业级开发者：①一个账号最多允许注册10个机器人；②一个主体下最多允许存在50个APPID

个体开发者：①一个账号最多允许注册5个机器人；②一个主体下最多允许存在5个APPID

预计3月底上线

## 三、机器人接口

### 1. 机器人拉取子频道列表的时候，附带机器人在该子频道的权限情况
### 2. 机器人可以设置/删除/获取精华消息

<img :src="$withBotBase('/images/newfeature/nine/value_message.jpg')" alt="精华消息">

### 3. 机器人可以发送/删除表情表态（采纳社区开发者建议）

<img :src="$withBotBase('/images/newfeature/nine/emot.jpg')" alt="精华消息">

### 4. 机器人可以接受到引用回复消息事件，该事件复用了AT_MESSAGE_CREATE（intents AT_MESSAGES）事件，由标志位区分是@机器人还是回复机器人消息
### 5. 机器人支持发送小黄脸表情，由内嵌格式实现

<img :src="$withBotBase('/images/newfeature/nine/emoji_iframe.jpg')" alt="小黄脸表情">

### 6. 创建频道公告支持设置推荐子频道

<img :src="$withBotBase('/images/newfeature/nine/create_channel.jpg')" alt="创建频道">

### 7. 踢出成员时，支持删除该成员的发言（灰度中）和将成员拉入黑名单（采纳社区开发者建议）

<img :src="$withBotBase('/images/newfeature/nine/add_blacklist.jpg')" alt="黑名单">

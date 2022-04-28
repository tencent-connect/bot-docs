# QQ机器人能力迭代第十期
## 一、接口能力

### 1. 提供机器人删除撤回消息小灰条能力

支持管理员删除频道内残留的消息小灰条，删除之后所有人将看不到该撤回消息的小灰条。

<img :src="$withBotBase('/images/newfeature/ten/withdraw-a-message.jpg')" alt="撤回消息">

 [撤回消息 | QQ机器人文档](https://bot.q.qq.com/wiki/develop/api/openapi/message/delete_message.html)

### 2. 用户消息被撤回提供事件通知给机器人

<img :src="$withBotBase('/images/newfeature/ten/direct_message_delete.jpg')" alt="撤回通知机器人">

## 二、C端能力

### 1. 支持每日上新的机器人外露在机器人入口

虽然说酒香不怕巷子深，但好玩实用的机器人怎么能不被人发现呢？

为了让管理员/频道主对机器人的感知性更强，目前支持外露每日上新的全量推荐机器人，展示机器人头像和文案等信息。

<img :src="$withBotBase('/images/newfeature/ten/daily_update.jpg')" alt="每日上新">

### 2. 优化机器人私信场景，提升用户体验

①私信场景下，机器人主动消息带“来自XXX频道”的小尾巴，用户可以自由地回到原始频道。

②私信场景下，支持直接点击用户与机器人的共同频道，可以跳转到共同频道半屏浮层。

③支持点击私信aio的顶部机器人头像，呼起资料卡半屏面板。

<img :src="$withBotBase('/images/newfeature/ten/optimize-private-message.jpg')" alt="优化机器人私信">

### 3. 指令面板上的指令/机器人优化

①增加机器人tab切换，定位到半屏面板对应的机器人。

②增加最近指令tab，使最近使用的指令前置。

<img :src="$withBotBase('/images/newfeature/ten/optimize-robot.jpg')" alt="机器人优化">

## 三、机器人管理端

### 机器人开发者管理端UI界面优化

升级机器人开发者管理端的视觉效果，使得管理端页面更加简洁舒适。

<img :src="$withBotBase('/images/newfeature/ten/optimize-robot-ui.jpg')" alt="优化机器人开发者管理端UI">

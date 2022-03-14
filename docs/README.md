---
sidebar: auto
---

# QQ 机器人

## 简介

QQ 频道机器人通过开放的平台承载机器人的定制化功能，让开发者获得更畅快的开发体验。

## **亮点**

**便捷**：通过开放接口的形式，QQ 开放平台允许开发者进行机器人定制化开发。

**高效**：开放平台整合多样化机器人 SDK，可以帮助开发者实现机器人的快速开发和迭代。

**趣味**：机器人创新 C 端交互方式，通过指令的方式承载服务，让多样化服务变得触手可达。

**赋能**：频道内用户基础大，机器人管理能力强，服务范围广，可以对频道快速完成信息触达，并帮助频道主进行频道管理，促进频道活跃。

## 接入流程

<img :src="$withBotBase('/images/introduce/Aspose.Words.a59f0707-65ac-4bec-8de6-d0d8efeb74d0.001.png')" alt="接入流程">

### 1. 阅读文档

为了更高效的进驻到 QQ 机器人平台，建议先阅读下列文档后再启动进驻工作：

[运营规范](https://bot.q.qq.com/wiki/business/)

[API 文档](https://bot.q.qq.com/wiki/develop/api/)

### 2. 企业主体入驻

#### 步骤总览

<img :src="$withBotBase('/images/introduce/open_platform_step.png')" alt="步骤总览">

::: warning 注意

企业入驻需要提供工商信息，包括：**营业执照**、**对公账号**，如不具备的用户请前往个人入口进行入驻
邮箱一旦填写完毕进入激活步骤，则被占用，不可修改，所以选错主体类型的用户需要更换邮箱重新注册。

:::

#### 2.1 点击「立即注册」

<img style="margin-top:20px;" :src="$withBotBase('/images/introduce/open_platform_register.png')" alt="立即注册">

::: tip 温馨提示

服务的三个类目，将鼠标放上去，将会有相关应用的文档及对应便捷入口，在注册前可先阅读相关文档。

:::

#### 2.2 选择企业

<img style="margin-top:20px;" :src="$withBotBase('/images/introduce/open_platform_choose_business.png')" alt="选择企业">

#### 2.3 填写邮箱

<img style="margin-top:20px;" :src="$withBotBase('/images/introduce/open_platform_mail.png')" alt="填写邮箱">

::: tip 温馨提示

之前已经注册过的邮箱不需再注册，直接去登陆界面登陆即可。

:::

#### 2.4 激活邮箱

<img style="margin-top:20px;" :src="$withBotBase('/images/introduce/open_platform_mail_active.png')" alt="激活邮箱">

::: tip 温馨提示

如未收到邮件，请检查垃圾箱或者点击重新发送进行尝试。

:::

#### 2.5 上传工商信息

<img style="margin-top:20px;" :src="$withBotBase('/images/introduce/open_platform_upload_business.png')" alt="上传工商信息">

::: tip 温馨提示

请务必确认上传的营业执照与填写的主体信息保持一致，账号注册完毕，后续还存在其他主体认证步骤，信息不一致否则会导致后续步骤出现问题。

:::

#### 2.6 绑定管理员

<img style="margin-top:20px;" :src="$withBotBase('/images/introduce/open_platform_bind_manager.png')" alt="绑定管理员">

::: tip 温馨提示

姓名和身份证号码务必与手机号码对应运营商实名登记的信息一致，否则会提示错误。

:::

#### 2.7 资质审核

- 管理员绑定完成后账号即注册成功，进入应用管理页后，需进行后续企业资质审核步骤。
- 此步骤可与第三步创建应用同步进行，但此步骤需尽快完成，否则会影响应用的提审。
- 入口：点击页面提示条上的「查看详情」，即可进入详情页面查看进度。

<img :src="$withBotBase('/images/introduce/open_platform_audit.png')" alt="资质审核">

##### 资质审核详细流程

- **审核中-资料审核：**  注册完成即自动进入工商信息审核，此步骤无需开发者操作，但请随时关注状态变更。
- **审核中-待打款：**  填写银行信息，点击查看详情，进入二级页面填写对公账户的银行信息，如系统没有对应【银行所在地的区】，可选择同市其他区。
- **审核中-银行打款中：**  如银行信息审核无误，则 3 天内腾讯公司将会对填写的对公银行账户进行 1 元以下小额打款，请关注银行收款。
  - 打款帐号主体：深圳市腾讯计算机系统有限公司，打款银行账号：755901658210820。
- **审核中-校验金额：**  收到打款后，请在规定时间内于开发者管理端回填收到的打款金额进行验证。

  - 金额校验次数有限，请确认收到打款后进入二级页面，填写具体的金额，如次数用完且校验不通过，该账号将被冻结。

  <img :src="$withBotBase('/images/introduce/open_platform_audit_detail.png')" alt="资质审核">

### 3 个人主体入驻

#### 步骤总览

<img :src="$withBotBase('/images/introduce/open_platform_individual_step.png')" alt="步骤总览">

#### 3.1 点击「立即注册」

<img style="margin-top:20px;" :src="$withBotBase('/images/introduce/open_platform_individual_register.png')" alt="立即注册">

::: tip 温馨提示

服务的三个类目，将鼠标放上去，将会有相关应用的文档及对应便捷入口，在注册前可先阅读相关文档。

:::

#### 3.2 选择个人

<img style="margin-top:20px;" :src="$withBotBase('/images/introduce/open_platform_choose_individual.png')" alt="选择个人">

#### 3.3 填写邮箱

<img style="margin-top:20px;" :src="$withBotBase('/images/introduce/open_platform_individual_mail.png')" alt="填写邮箱">

::: tip 温馨提示

之前已经注册过的邮箱不需再注册，直接去登陆界面登陆即可。

:::

#### 3.4 激活邮箱

<img style="margin-top:20px;" :src="$withBotBase('/images/introduce/open_platform_individual_mail_active.png')" alt="激活邮箱">

::: tip 温馨提示

如未收到邮件，请检查垃圾箱或者点击重新发送进行尝试。

:::

#### 3.6 绑定管理员

<img  style="margin-top:20px;" :src="$withBotBase('/images/introduce/open_platform_individual_bind_manager.png')" alt="绑定管理员">

::: tip 温馨提示

姓名和身份证号码务必与手机号码对应运营商实名登记的信息一致，否则会提示错误。

:::

绑定成功即可进入应用管理页开始创建应用。

### 4 创建应用

创建机器人 / 小程序 / 小游戏。

#### 4.1 点击「创建机器人」/「创建小程序」

<img style="margin-top:20px;" :src="$withBotBase('/images/introduce/open_platform_create_app.png')" alt="创建应用">

::: tip 温馨提示

小游戏创建入口同小程序。

:::

#### 4.2 填写资料

##### 4.2.1 机器人资料填写页面

<img style="margin-top:20px;" :src="$withBotBase('/images/introduce/open_platform_robot_info.png')" alt="机器人资料填写页面">

::: tip 温馨提示

沙箱频道为下拉选择，该频道由开发者在频道中自主创建。

:::

提交机器人基本信息后，机器人会出现在沙箱频道的机器人列表当中，开发者可在沙箱频道里进行功能自测，便于填写复审时需要的自测报告。

##### 4.2.2 小程序资料填写页面

<img style="margin-top:20px;" :src="$withBotBase('/images/introduce/open_platform_miniapp_info.png')" alt="小程序资料填写页面">

##### 4.2.3 进入管理端

资料提交成功后，即会生成`appid`，点击对应的应用即可跳转管理端。

<img :src="$withBotBase('/images/introduce/open_platform_bot_list.png')" alt="进入管理端">

::: tip 温馨提示

如需要创建小游戏，则在进入管理端内，在设置--服务类目处设置。

:::

服务类目请选择「游戏类目」，并上传资质证书。

<img :src="$withBotBase('/images/introduce/open_platform_miniapp_certificate.png')" alt="进入管理端">

<img :src="$withBotBase('/images/introduce/open_platform_certificate_detail.png')" alt="进入管理端">

### 5 添加机器人

`BotAppID`生成后，可在自己的测试频道机器人列表里获取自己的测试机器人并添加，操作路径如下：

**点击频道右上角「...」--->点击「频道设置」--->点击「机器人」--->添加测试机器人**

<img :src="$withBotBase('/images/introduce/Aspose.Words.a59f0707-65ac-4bec-8de6-d0d8efeb74d0.006.png')" alt="添加机器人">

### 6. 开发设置

#### 6.1 机器人 BotAppID

此处主要展示`BotAppID`、`BotToken`、`BotSecret`。

:::tip 温馨提示
此信息不要对外传播
:::

#### 6.2 回调地址

在跳转 `h5` 需要 `OAuth` 的时候使用 （如机器人服务是跳转小程序，可忽略），回调地址上限为`10`条。

<img :src="$withBotBase('/images/introduce/Aspose.Words.a59f0707-65ac-4bec-8de6-d0d8efeb74d0.008.png')" alt="回调地址">

#### 6.3 消息 URL 配置

填写机器人下发消息中所包含的链接域名，域名需在此处提交后才可生效，域名上限为`20`条，每年可修改`50`次。

<img :src="$withBotBase('/images/introduce/callback-info-url.png')" alt="消息 URL 配置">

:::tip 温馨提示
域名需提前进行 ICP 备案，并通过域名校验才可报备成功。
:::

#### 6.4 频道用户意见反馈

为了帮助开发者获取 C 端用户对于机器人的评价与反馈，平台为开发者接入了”兔小巢反馈空间“，开发者可以通过创建产品反馈空间。

**频道用户意见反馈：** 点击进入登陆后，根据提示创建产品，将会获得一个兔小巢反馈空间，C 端用户所填写的机器人反馈将同步至此空间，开发者以后可登陆此空间查看用户反馈。

**产品 ID 填写：** 需要在此处填写兔小巢反馈空间的产品 ID，C 端用户的机器人反馈才可同步至此处，详细获取路径如开发者端提示：设置-->产品设置-->产品 ID。

<img :src="$withBotBase('/images/introduce/feedback.png')" alt="频道用户意见反馈">

:::tip 温馨提示
兔小巢创建与使用详情可点击[**用户反馈空间创建攻略**](https://docs.qq.com/doc/DY0FBR0FUSm5lT0pn)
:::

### 7. 设置

基本信息修改限制：每月可修改`5`次。

<img :src="$withBotBase('/images/introduce/config.png')" alt="设置">

### 8. 权限设置

#### 8.1 角色

开发者管理端的角色共有两种：管理员和普通成员。

- **管理员**：支持修改，但仅管理员本人可操作
- **普通成员**：可添加最大限度为 `50` 人

#### 8.2 权限

- **登陆权限**：拥有该权限的成员可登陆和查看开发者管理端信息，但不可编辑。
- **发布权限**：拥有该权限的成员可编辑和提交语料、服务、指令等模块。
- **开发设置**：拥有该权限的成员可编辑和提交回调地址、URL 模块。

<img :src="$withBotBase('/images/introduce/auth.png')" alt="权限">

:::tip 温馨提示
**登陆权限是基础权限，要拥有发布权限和开发权限的前提是拥有登陆权限**
:::

### 9. 发布设置

开发者可以通过发布设置配置对话类型语料以及机器人服务，此处配置的语料和功能配置完毕，均需通过代码开发实现。

<img :src="$withBotBase('/images/introduce/Aspose.Words.a59f0707-65ac-4bec-8de6-d0d8efeb74d0.009.png')" alt="发布设置">

#### 9.1 语料配置

对话类型语料配置要求语料必须以`一问一答`的对话形式上传，且此类问答对话为严格按照配置好的内容进行对话（即被动消息），如需产生动态变化（如问我的战绩排名），可申请被动消息发 `ark` 的形式进行开发配置（邮件模板见下文）。

用户可以下载模板使用 `csv` 文件批量上传，也可以一条一条单独添加。

添加提交后会进行平台审核：对于已经审核通过的语料，仅支持删除，不可修改；未审核通过的语料，可修改后重新提交。

**配置上限总量`1000`条，但批量新增提交审核单次上限`100`条。**

**输入：** 填写用户@机器人的文本，不允许配置链接、缩写、火星文或大量符号，最多`6`个字符。

**回复：** 填写机器人的回答文本，不允许配置链接、缩写、火星文或大量符号，最多`100`个字符。

**图片链接：** 填写机器人回答中图片的`url`链接，图片链接`url`需带`http`或`https`前缀，图片不允许涉及政治敏感与色情。

<img :src="$withBotBase('/images/introduce/Aspose.Words.a59f0707-65ac-4bec-8de6-d0d8efeb74d0.010.png')" alt="语料配置">

:::tip 温馨提示
**所有开发者注册完机器人默认拥有“不校验语料 id”能力，即不需要在管理端的对话型语料里进行语料报备，直接使用代码实现 AB 回复逻辑即可，一旦机器人被平台发现有违规行为，该能力将被收回，所有被动消息均需要在此处进行报备才可发出。**
:::

**【消息类型】机器人发送消息分为主动消息和被动消息：**

- **被动消息**：严格的 AB 对话形式（用户艾特机器人发送 A，机器人回复 B），此类消息需要在开发者管理端的提交语料进行平台审核；被动消息有效期为`5`分钟。
- **主动消息**：主动触发类型的消息，满足条件机器人主动发送（如定时提醒），主动消息无需在管理者平台进行上传审核。

**【主动消息限制 】**

- 主动消息每日每个频道限制发送`20`条，且仅允许在`2`个子频道下发主动消息。
- 暂不开放“入群欢迎语”服务。
- 监听事件“当机器人被添加进频道”后，限制机器人仅在 `1` 个子频道内下发主动消息。
- 普通消息不支持图文+文本，如需配置图文+文本，可使用 `ark` 消息实现。

**【被动消息申请 ark 能力】**

**邮件模板**

- **标题**：【QQ 机器人被动消息发 ark 申请】XX 机器人申请

- **邮件内容**：

> 基础信息：机器人 Bot id、机器人名称、企业主体名称（具体写上申请公司名称）
>
> 机器人功能说明
>
> 被动消息发 ark 消息使用场景
>
> 承诺业务将严格遵守 QQ 机器人平台的运营规范，如果有违反，一切后果由业务使用侧自行承担。
>
> 承诺方： XX 公司
>
> 承诺日期： 20xx 年 xx 月 xx 日

---

以上信息，邮箱发送：**QQ_Bot@tencent.com**

#### 9.2 功能配置

功能配置分为服务配置与指令配置。

##### 9.2.1 服务配置

开发者需在管理端配置用于 C 端的机器人功能资料卡的小程序服务，可配置功能上限为`18`个。

- **名称**：请简单凝练的描述功能，字数不超过`5`个字，内容需符合平台运营规范。

- **介绍**：请简单的对功能进行介绍，字数不超过`15`个字，内容需符合平台运营规范。

- **appID**：请输入小程序服务的`ID`号。

- **path**：请输入小程序的路径。

- **extData**：请输入小程序 `extendData`。

  - [配置示例及详情](https://bot.q.qq.com/wiki/develop/api/miniapp/interface.html#%E4%BB%8E-extenddata-%E4%B8%AD%E8%8E%B7%E5%8F%96%E9%A2%91%E9%81%93id)

- **权限菜单**：请选择本服务是开放给所有用户还是仅针对频道主和管理员。

<img :src="$withBotBase('/images/introduce/Aspose.Words.a59f0707-65ac-4bec-8de6-d0d8efeb74d0.011.png')" alt="服务配置">

:::tip 温馨提示
**开发者可添加、删减功能，管理端配置的功能顺序与 C 端机器人资料卡展示的功能顺序一致**
:::

##### 9.2.2 指令配置

开发者在管理端配置用户 C 端指令集面板的服务，可配置上限为`18`个。

- **指令名**：请简单凝练地描述指令，字数不超过`5`个字，，内容需符合平台运营规范。

- **指令介绍**：请简单的对指令进行描述，字数不超过`10`个字，内容需符合平台运营规范。

- **权限菜单**：请选择本指令是开放给所有用户还是仅针对频道主和管理员。

::: warning 注意
指令集的指令内容是上述【语料配置】模块中“输入”内容的子集，即指令必须包含在已经审核通过的“输入”内容中，否则指令会无法提交。
:::

开发者可添加、删减指令，管理端配置的功能顺序与 C 端机器人指令集展示的功能顺序一致，建议将常用/核心的指令前置。

<img :src="$withBotBase('/images/introduce/Aspose.Words.a59f0707-65ac-4bec-8de6-d0d8efeb74d0.012.png')" alt="指令配置">

:::warning 注意
**指令和服务模块暂不需要单独提审，自测完成后，填写自测报告与自测报告一起提审**。
:::

#### 9.3 自测报告

开发者需下载机器人自测报告模版，在自测频道内根据模板要求测试机器人的功能，并填写完自测报告后上传。

<img :src="$withBotBase('/images/introduce/Aspose.Words.a59f0707-65ac-4bec-8de6-d0d8efeb74d0.013.png')" alt="自测报告">

- **自测报告**：[机器人自测报告模板](https://docs.qq.com/sheet/DZlplZ1FFQUpmWWVt)。

- **审核结果**：请自行在对应提审模块查看，如果审核不通过，则需要修改后再次提交审核。

- **审核时效**：工作日`24`小时内审核，不支持催审，请耐心等待审核验收结果。

<img :src="$withBotBase('/images/introduce/audit.png')" alt="自测报告-审核">

::: tip 温馨提示
提交功能配置审核前需完成机器人的资质认证，提交审核后，服务配置、指令配置和自测报告将一起送往平台进行审核。
:::

### 10. 审核

机器人上线前需完成平台审核，因此开发者需将机器人的语料配置、功能配置和自测报告提交平台审核，如果审核不通过机器人则无法上线。

::: tip 温馨提示
此处配置的语料和功能配置完毕，均需通过代码开发实现；也可先代码开发，再将需要的语料和功能在管理端进行报备审核，请详细填写自测报告，如审核中发现未写明的功能将直接打回。
:::

### 11. 上线

开发者在开发者管理端提交机器人上线后，需要平台进行配置，灰度频道 ID，只有被灰度到的频道才能搜到上线的机器人。

::: warning 注意
在机器人上线后，若开发者需要修改机器人功能配置或基本资料，则需要重新提交审核，并且在审核通过后重新上线；在新功能配置或基本资料上线前，机器人在线上展示原有信息。
:::

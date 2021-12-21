# 频道事件

## GUILD_CREATE

### 发送时机
- 机器人被加入到某个频道的时候

### 内容
[Guild](../openapi/guild/model.md#guild)

## GUILD_UPDATE

### 发送时机
- 频道信息变更 

### 内容
[Guild](../openapi/guild/model.md#guild)，字段内容为变更后的字段内容

## GUILD_DELETE

### 发送时机
- 频道被解散
- 机器人被移除

### 内容
[Guild](../openapi/guild/model.md#guild)，字段内容为变更前的字段内容
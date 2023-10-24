# 频道消息频率设置对象 (MessageSetting)

## MessageSetting

| 字段名                  | 类型        | 描述                  |
|----------------------|-----------|---------------------|
| disable_create_dm    | string    | 是否允许创建私信            |
| disable_push_msg     | string    | 是否允许发主动消息           |
| channel_ids          | string 数组 | 子频道 id 数组           |
| channel_push_max_num | uint32    | 每个子频道允许主动推送消息最大消息条数 |

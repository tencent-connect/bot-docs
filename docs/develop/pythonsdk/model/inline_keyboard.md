# 消息按钮组件（InlineKeyboard）

### InlineKeyboard

| 字段名       | 类型                                                  | 描述                        |
|-----------|-----------------------------------------------------|---------------------------|
| rows      | [InlineKeyboardRow](#inlinekeyboardrow) 消息按钮组件行对象数组 | 数组的一项代表消息按钮组件的一行,最多含有 5 行 |

### InlineKeyboardRow

| 字段名     | 类型                       | 描述                                               |
|---------|--------------------------|--------------------------------------------------|
| buttons | [Button](#button) 按钮对象数组 | 数组的一项代表一个按钮，每个 InlineKeyboardRow 最多含有 5 个 Button |

### Button

| 字段名         | 类型                                 | 描述           |
|-------------|------------------------------------|--------------|
| id          | string                             | 按钮 id        |
| render_data | [RenderData](#renderdata) 按纽渲染展示对象 | 用于设定按钮的显示效果  |
| action      | [Action](#action) 该按纽操作相关字段        | 用于设定按钮点击后的操作 |

### RenderData

| 字段名           | 类型     | 描述                                  |
|---------------|--------|-------------------------------------|
| label         | string | 按纽上的文字                              |
| visited_label | string | 点击后按纽上文字                            |
| style         | int    | 按钮样式，参考 [RenderStyle](#renderstyle) |

### RenderStyle

| 字段名 | 类型  | 描述   |
|-----|-----|------|
| 0   | int | 灰色线框 |
| 1   | int | 蓝色线框 |

### Action

| 字段名                   | 类型                            | 描述                                           |
| ------------------------ | ------------------------------- | ---------------------------------------------- |
| type                     | int                             | 操作类型，参考 [ActionType](#actiontype)       |
| permission               | [Permission](#permission) 对象 | 用于设定操作按钮所需的权限                     |
| click_limit              | int                             | 可点击的次数, 默认不限                         |
| data                     | string                          | 操作相关数据                                   |
| at_bot_show_channel_list | bool                            | false:不弹出子频道选择器 true:弹出子频道选择器 |

### ActionType
| 值  | 描述                                                                                        |
| --- | ------------------------------------------------------------------------------------------- |
| 0   | http 或 小程序 客户端识别 schem, data字段为链接                                             |
| 1   | 回调后台接口, data 传给后台                                                                 |
| 2   | at机器人, 根据 at_bot_show_channel_list 决定在当前频道或用户选择频道,自动在输入框 @bot data |

### Permission

| 字段名           | 类型        | 描述                                             |
| ---------------- | ----------- | ------------------------------------------------ |
| type             | int         | 权限类型，参考 [PermissionType](#permissiontype) |
| specify_role_ids | string 数组 | 有权限的身份组id的列表                           |
| specify_user_ids | string 数组 | 有权限的用户id的列表                             |

### PermissionType

| 值  | 描述             |
| --- | ---------------- |
| 0   | 指定用户可操作   |
| 1   | 仅管理者可操作   |
| 2   | 所有人可操作     |
| 3   | 指定身份组可操作 |

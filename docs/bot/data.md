# Data

该类为Bot的设置和缓存以及相关方法

| 属性                     | 类型                                                  | 说明                     |
| ------------------------ | ----------------------------------------------------- | ------------------------ |
| name                     | `string`                                              | Bot名称                  |
| userId                   | `number`                                              | Bot的登录QQ              |
| groupList                | `{[group_id: number]: string}`                        | 群名缓存                 |
| updateGroupsList         | `() => Promise<void>`                                 | 更新群名缓存             |
| groupMemberList          | `{[group_id: number]: { [uesr_id: number]: string }}` | 群员昵称缓存             |
| updateGroupMemberList    | `(group_id: number) => Promise<void>`                 | 更新指定群组群员昵称缓存 |
| updateAllGroupMemberList | `() => Promise<void>`                                 | 更新所有群组群员昵称缓存 |
| friendList               | `{[user_id: number]: string}`                         | 好友昵称缓存             |
| showLog                  | `boolean`                                             | 是否显示Log输出          |
| noLogList                | `Set<number>`                                         | 不显示Log输出的群组列表  |
| setNoLog                 | `(list: number[]) => void`                            | 增加不显示Log输出的群组  |
| noCommList               | `Set<number>`                                         | 不启用内置指令的群组列表 |
| setNoComm                | `(list: number[]) => void`                            | 增加不启用内置指令的群组 |
# API
:::warning
部分方法可能会因为客户端更新而失效
:::

使用API可调用客户端的各种功能

## 检查链接安全性

▸ **checkUrlSafely**(`url`: *string*): *Promise*<{ `level`: ``1`` \| ``2`` \| ``3``  }\>

1. 安全 2. 未知 3. 危险

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | *string* | 需要检查的链接 |

**Returns:** *Promise*<{ `level`: ``1`` \| ``2`` \| ``3``  }\>

Defined in: Bot/modules/Api.ts:921

___

## 移出精华消息

▸ **deleteEssenceMsg**(`message_id`: *number*): *void*

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `message_id` | *number* | 消息ID |

**Returns:** *void*

Defined in: Bot/modules/Api.ts:879

___

## 撤回信息(仅对群消息有效)

▸ **deleteMsg**(`message_id`: *number*): *void*

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `message_id` | *number* | 消息 ID |

**Returns:** *void*

Defined in: Bot/modules/Api.ts:122

___

## 测试API可用性

▸ **getApiStatus**(): *void*

**Returns:** *void*

Defined in: Bot/modules/Api.ts:13

___

## 获取精华消息列表

▸ **getEssenceMsgList**(`group_id`: *number*): *Promise*<[*EssenceMsg*](../interfaces/type_message.essencemsg.md)[]\>

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `group_id` | *number* | 群号 |

**Returns:** *Promise*<[*EssenceMsg*](../interfaces/type_message.essencemsg.md)[]\>

Defined in: Bot/modules/Api.ts:895

___

## 获取合并转发内容

▸ **getForwardMsg**(`message_id`: *number*): *Promise*<[*Message*](../modules/type_message.md#message)[]\>

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `message_id` | *number* | 消息 ID |

**Returns:** *Promise*<[*Message*](../modules/type_message.md#message)[]\>

Defined in: Bot/modules/Api.ts:177

___

## 获取好友列表

▸ **getFriendList**(): *Promise*<[*QQInfo*](../interfaces/type_qq.qqinfo.md)[]\>

**Returns:** *Promise*<[*QQInfo*](../interfaces/type_qq.qqinfo.md)[]\>

Defined in: Bot/modules/Api.ts:528

___

## 获取群@全体成员剩余次数

▸ **getGroupAtAllRemain**(`group_id`: *number*): *Promise*<{ `can_at_all`: *boolean* ; `remain_at_all_count_for_group`: *number* ; `remain_at_all_count_for_uin`: *number*  }\>

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `group_id` | *number* | 群号 |

**Returns:** *Promise*<{ `can_at_all`: *boolean* ; `remain_at_all_count_for_group`: *number* ; `remain_at_all_count_for_uin`: *number*  }\>

Defined in: Bot/modules/Api.ts:776

___

## 获取群荣誉信息

▸ **getGroupHonorInfo**<T\>(`group_id`: *number*, `type`: T): *Promise*<[*HonorInfo*](../interfaces/type_message.honorinfo.md) & [*HonorItem*](../interfaces/type_message.honoritem.md)[T]\>

#### Type parameters:

| Name | Type |
| :------ | :------ |
| `T` | [*HonorType*](../modules/type_message.md#honortype) |

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `group_id` | *number* | 群号 |
| `type` | T | 要获取的群荣誉类型, 可传入 talkative performer legend strong_newbie emotion 以分别获取单个类型的群荣誉数据, 或传入 all 获取所有数据 |

**Returns:** *Promise*<[*HonorInfo*](../interfaces/type_message.honorinfo.md) & [*HonorItem*](../interfaces/type_message.honoritem.md)[T]\>

Defined in: Bot/modules/Api.ts:674

___

## 获取群信息

▸ **getGroupInfo**(`group_id`: *number*, `no_cache?`: *boolean*): *Promise*<[*GroupInfo*](../interfaces/type_group.groupinfo.md)\>

#### Parameters:

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `group_id` | *number* | - | 群号 |
| `no_cache` | *boolean* | false | 是否不使用缓存（使用缓存可能更新不及时，但响应更快） |

**Returns:** *Promise*<[*GroupInfo*](../interfaces/type_group.groupinfo.md)\>

Defined in: Bot/modules/Api.ts:550

___

## 获取群列表

▸ **getGroupList**(): *Promise*<[*GroupInfo*](../interfaces/type_group.groupinfo.md)[]\>

**Returns:** *Promise*<[*GroupInfo*](../interfaces/type_group.groupinfo.md)[]\>

Defined in: Bot/modules/Api.ts:582

___

## 获取群成员信息

▸ **getGroupMemberInfo**(`group_id`: *number*, `user_id`: *number*, `no_cache?`: *boolean*): *Promise*<[*MemberInfo*](../interfaces/type_group.memberinfo.md)\>

#### Parameters:

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `group_id` | *number* | - | 群号 |
| `user_id` | *number* | - | QQ 号 |
| `no_cache` | *boolean* | false | 是否不使用缓存（使用缓存可能更新不及时，但响应更快） |

**Returns:** *Promise*<[*MemberInfo*](../interfaces/type_group.memberinfo.md)\>

Defined in: Bot/modules/Api.ts:605

___

## 获取群成员列表

▸ **getGroupMemberList**(`group_id`: *number*): *Promise*<[*MemberInfo*](../interfaces/type_group.memberinfo.md)[]\>

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `group_id` | *number* | 群号 |

**Returns:** *Promise*<[*MemberInfo*](../interfaces/type_group.memberinfo.md)[]\>

Defined in: Bot/modules/Api.ts:648

___

## 获取群消息历史记录

▸ **getGroupMsgHistory**(`group_id`: *number*, `message_seq?`: *number*): *Promise*<{ `messages`: [*Message*](../modules/type_message.md#message)[]  }\>

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `group_id` | *number* | 群号 |
| `message_seq?` | *number* | 起始消息序号, 可通过 get_msg 获得 |

**Returns:** *Promise*<{ `messages`: [*Message*](../modules/type_message.md#message)[]  }\>

Defined in: Bot/modules/Api.ts:837

___

## 获取.image文件的图片信息

▸ **getImage**(`file`: *string*): *Promise*<[*ImageInfo*](../interfaces/type_file.imageinfo.md)\>

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `file` | *string* | 图片缓存文件名 |

**Returns:** *Promise*<[*ImageInfo*](../interfaces/type_file.imageinfo.md)\>

Defined in: Bot/modules/Api.ts:199

___

## 获取登录号信息

▸ **getLoginInfo**(): *Promise*<{ `nickname`: *string* ; `user_id`: *number*  }\>

**Returns:** *Promise*<{ `nickname`: *string* ; `user_id`: *number*  }\>

Defined in: Bot/modules/Api.ts:464

___

## 获取消息

▸ **getMsg**(`message_id`: *number*): *Promise*<[*Msg*](../interfaces/type_message.msg.md)\>

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `message_id` | *number* | 消息 ID |

**Returns:** *Promise*<[*Msg*](../interfaces/type_message.msg.md)\>

Defined in: Bot/modules/Api.ts:138

___

## 获取当前账号在线客户端列表

▸ **getOnlineClients**(`no_cache?`: *boolean*): *Promise*<{ `clients`: [*Device*](../interfaces/type_qq.device.md)[]  }\>

#### Parameters:

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `no_cache` | *boolean* | false | 是否无视缓存 |

**Returns:** *Promise*<{ `clients`: [*Device*](../interfaces/type_qq.device.md)[]  }\>

Defined in: Bot/modules/Api.ts:813

___

## 获取运行状态

▸ **getStatus**(): *Promise*<[*Status*](../interfaces/type_message.status.md)\>

**Returns:** *Promise*<[*Status*](../interfaces/type_message.status.md)\>

Defined in: Bot/modules/Api.ts:757

___

## 获取陌生人信息

▸ **getStrangerInfo**(`user_id`: *number*, `no_cache?`: *boolean*): *Promise*<[*PrivateSender*](../interfaces/type_event.privatesender.md) & { `qid?`: *number*  }\>

#### Parameters:

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `user_id` | *number* | - | QQ 号 |
| `no_cache` | *boolean* | false | 是否不使用缓存（使用缓存可能更新不及时, 但响应更快） |

**Returns:** *Promise*<[*PrivateSender*](../interfaces/type_event.privatesender.md) & { `qid?`: *number*  }\>

Defined in: Bot/modules/Api.ts:501

___

## 获取版本信息

▸ **getVersionInfo**(): *Promise*<[*VersionInfo*](../interfaces/type_message.versioninfo.md)\>

**Returns:** *Promise*<[*VersionInfo*](../interfaces/type_message.versioninfo.md)\>

Defined in: Bot/modules/Api.ts:739

___

## 发送合并转发(群)

▸ **sendGroupForwardMsg**(`group_id`: *number*, `messages`: [*NodeMessage*](../interfaces/type_message.nodemessage.md)[]): *Promise*<number\>

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `group_id` | *number* | 群号 |
| `messages` | [*NodeMessage*](../interfaces/type_message.nodemessage.md)[] | 自定义转发消息 |

**Returns:** *Promise*<number\>

Defined in: Bot/modules/Api.ts:96

___

## 发送群消息

▸ **sendGroupMsg**(`group_id`: *number*, `message`: [*Message*](../modules/type_message.md#message), `auto_escape?`: *boolean*): *Promise*<number\>

#### Parameters:

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `group_id` | *number* | - | 群号 |
| `message` | [*Message*](../modules/type_message.md#message) | - | 要发送的内容，支持纯文本和数组格式 |
| `auto_escape` | *boolean* | false | 消息内容是否作为纯文本发送 ( 即不解析 CQ 码 ) , 只在 message 字段是字符串时有效 |

**Returns:** *Promise*<number\>

成功返回message_id，失败返回retcode(100)

Defined in: Bot/modules/Api.ts:65

___

## 发送私聊消息

▸ **sendPrivateMsg**(`user_id`: *number*, `message`: [*Message*](../modules/type_message.md#message), `auto_escape?`: *boolean*): *Promise*<number\>

#### Parameters:

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `user_id` | *number* | - | 对方 QQ 号 |
| `message` | [*Message*](../modules/type_message.md#message) | - | 要发送的内容，支持纯文本和数组格式 |
| `auto_escape` | *boolean* | false | 消息内容是否作为纯文本发送 ( 即不解析 CQ 码 ) , 只在 message 字段是字符串时有效 |

**Returns:** *Promise*<number\>

成功返回message_id，失败返回retcode(100)

Defined in: Bot/modules/Api.ts:32

___

## 设置精华消息

▸ **setEssenceMsg**(`message_id`: *number*): *void*

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `message_id` | *number* | 消息ID |

**Returns:** *void*

Defined in: Bot/modules/Api.ts:863

___

## 处理加好友请求

▸ **setFriendAddRequest**(`flag`: *string*, `approve`: *boolean*, `remark`: *string*): *void*

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `flag` | *string* | 加好友请求的 flag（需从上报的数据中获得） |
| `approve` | *boolean* | 是否同意请求 |
| `remark` | *string* | 添加后的好友备注（仅在同意时有效） |

**Returns:** *void*

Defined in: Bot/modules/Api.ts:427

___

## 处理加群请求／邀请

▸ **setGroupAddRequest**(`flag`: *string*, `sub_type`: ``"add"`` \| ``"invite"``, `approve?`: *boolean*, `reason`: *string*): *void*

#### Parameters:

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `flag` | *string* | - | 加群请求的 flag（需从上报的数据中获得） |
| `sub_type` | ``"add"`` \| ``"invite"`` | - | add 或 invite，请求类型（需要和上报消息中的 sub_type 字段相符） |
| `approve` | *boolean* | true | 是否同意请求／邀请 |
| `reason` | *string* | - | 拒绝理由（仅在拒绝时有效） |

**Returns:** *void*

Defined in: Bot/modules/Api.ts:447

___

## 群组设置管理员

▸ **setGroupAdmin**(`group_id`: *number*, `user_id`: *number*, `enable?`: *boolean*): *void*

#### Parameters:

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `group_id` | *number* | - | 群号 |
| `user_id` | *number* | - | 要设置管理员的 QQ 号 |
| `enable` | *boolean* | true | true 为设置, false 为取消 |

**Returns:** *void*

Defined in: Bot/modules/Api.ts:315

___

## 群组匿名用户禁言

▸ **setGroupAnonymousBan**(`group_id`: *number*, `anonymous_flag`: *string*, `duration?`: *number*): *void*

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `group_id` | *number* | 群号 |
| `anonymous_flag` | *string* | 要禁言的匿名用户的 flag（需从群消息上报的数据中获得） |
| `duration` | *number* | 禁言时长, 单位秒, 无法取消匿名用户禁言 |

**Returns:** *void*

Defined in: Bot/modules/Api.ts:273

___

## 群组单人禁言

▸ **setGroupBan**(`group_id`: *number*, `user_id`: *number*, `duration?`: *number*): *void*

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `group_id` | *number* | 群号 |
| `user_id` | *number* | 要禁言的 QQ 号 |
| `duration` | *number* | 禁言时长，单位秒，0 表示取消禁言 |

**Returns:** *void*

Defined in: Bot/modules/Api.ts:250

___

## 设置群名片（群备注）

▸ **setGroupCard**(`group_id`: *number*, `user_id`: *number*, `card`: *string*): *void*

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `group_id` | *number* | 群号 |
| `user_id` | *number* | 要设置的 QQ 号 |
| `card` | *string* | 群名片内容，不填或空字符串表示删除群名片 |

**Returns:** *void*

Defined in: Bot/modules/Api.ts:339

___

## 群组踢人

▸ **setGroupKick**(`group_id`: *number*, `user_id`: *number*, `reject_add_request?`: *boolean*): *void*

#### Parameters:

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `group_id` | *number* | - | 群号 |
| `user_id` | *number* | - | 要踢的 QQ 号 |
| `reject_add_request` | *boolean* | false | 拒绝此人的加群请求 |

**Returns:** *void*

Defined in: Bot/modules/Api.ts:227

___

## 退出群组

▸ **setGroupLeave**(`group_id`: *number*, `is_dismiss?`: *boolean*): *void*

#### Parameters:

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `group_id` | *number* | - | 群号 |
| `is_dismiss` | *boolean* | false | 是否解散，如果登录号是群主，则仅在此项为 true 时能够解散 |

**Returns:** *void*

Defined in: Bot/modules/Api.ts:381

___

## 设置群组名

▸ **setGroupName**(`group_id`: *number*, `group_name`: *string*): *void*

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `group_id` | *number* | 群号 |
| `group_name` | *string* | 新群名 |

**Returns:** *void*

Defined in: Bot/modules/Api.ts:361

___

## 设置群组专属头衔

▸ **setGroupSpecialTitle**(`group_id`: *number*, `user_id`: *number*, `special_title`: *string*, `duration?`: *number*): *void*

#### Parameters:

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `group_id` | *number* | - | 群号 |
| `user_id` | *number* | - | 要设置的 QQ 号 |
| `special_title` | *string* | - | 专属头衔，不填或空字符串表示删除专属头衔 |
| `duration` | *number* | -1 | 专属头衔有效期，单位秒，-1 表示永久，不过此项似乎没有效果，可能是只有某些特殊的时间长度有效，有待测试 |

**Returns:** *void*

Defined in: Bot/modules/Api.ts:403

___

## 群组全员禁言

▸ **setGroupWholeBan**(`group_id`: *number*, `enable?`: *boolean*): *void*

#### Parameters:

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `group_id` | *number* | - | 群号 |
| `enable` | *boolean* | true | 是否禁言 |

**Returns:** *void*

Defined in: Bot/modules/Api.ts:294
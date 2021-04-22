# Event

该类有三个属性：

- on： 监听消息
- onSendMessage: 监听消息发送完成

## on

`on`方法用于监听指定类型的消息，如创建群消息监听：

```ts
this.Bot.Event.on('message.group', e => {
    console.log('收到一条群消息')
})
```

::: tip 执行顺序 监听器具会根据创建顺序依次执行，可通过返回`true`拦截消息传递
:::

消息类型和相应如下：

### websocket初始化完成

**type**: `ws.ready`

websocket初次连接成功后触发，该事件用于内部初始化，只会触发一次，请勿使用

### websocket连接成功

**type**: `ws.connect`

websocket连接成功后触发

### websocket连接断开

**type**: `ws.connect`

websocket连接断开后触发

### websocket连接错误

**type**: `ws.error`

**响应**：`Error`

websocket连接发生错误后触发

### 私聊信息

**type**: `message.private`

### 群消息

**type**: `message.group`

### 群文件上传

**type**: `notice.group_upload`

### 群管理员变动

**type**: `notice.group_admin`

### 群成员减少

**type**: `notice.group_decrease`

### 群成员增加

**type**: `notice.group_increase`

### 群禁言

**type**: `notice.group_ban`

### 好友添加

**type**: `notice.friend_add`

### 群消息撤回

**type**: `notice.group_recall`

### 好友消息撤回

**type**: `notice.friend_recall`

### 群内提示事件

**type**: `notice.notify`

龙王等事件

### 群成员名片更新

**type**: `notice.group_card`

### 接收到离线文件

**type**: `notice.offline_file`

### 加好友请求

**type**: `request.friend`

### 加群请求/邀请

**type**: `request.group`

### 其他客户端在线状态变更

**type**: `notice.client_status`

### 精华消息

**type**: `notice.essence`

### 心跳事件

**type**: `meta_event.heartbeat`

### 列表外事件

其它事件可用符合事件格式的字符串

## onSendMessage
`onSendMessage`方法用于监听消息发送完成，如创建群消息发送完成监听：

```ts
this.Bot.Event.onSendMessage('sendGroupMsg', e => {
    console.log('发送了一条群消息')
})
```
类型可为**sendPrivateMsg**或**sendGroupMsg**，分别为**私聊发送完成**和**群聊发送完成**事件

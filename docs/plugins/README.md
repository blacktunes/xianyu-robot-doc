# 插件

> **Bot**仅为框架，几乎没有内置功能，各种功能需要插件实现。

简单功能可使用**函数插件**，例如一个简单的群复读功能：
```ts
app.plugin(bot => {
    bot.Event.on('message.group', e => {
        bot.Api.sendGroupMsg(e.group_id, e.message)
    })
})
```

也可以编写为插件，更方便管理与拓展。
::: tip 注意
插件需要**继承**插件类`BotPlugin`，切调用`super`传递**插件名**和固定参数`bot`

插件有以下属性：
- **name**：插件名
- **Bot**：Bot对象
- **Command**：插件命令
- **init**：初始化方法，会在Bot连接完成后调用
- **debug**：debug方法
:::
```ts
class Fudu extends BotPlugin {
  constructor(bot) {
    super('复读', bot)
  }

  init = () => {
    this.Bot.Event.on('message.group', e => {
      this.Bot.Api.sendGroupMsg(e.group_id, e.message)
    })
  }
}

app.plugin(Fudu)
```

插件类可通过`this.Bot`调用框架的各种功能。

`Bot`拥有以下属性：
- **Data**：Bot的设置和缓存
- **Log**: 日志输出方法
- [**CQCode**](/cqcode)：CQ码
- **Plugin**：插件类
- **Command**：命令类
- **Admin**：管理员类
- **Conn**：WS链接，不推荐直接使用
- **Api**：HTTP API
- [**Event**](/event)：消息事件
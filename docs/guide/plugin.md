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
## plugin

也可以编写为类插件，更方便管理与拓展。
::: tip 注意
插件需要**继承**插件类`BotPlugin`
推荐添加`name`属性以便于查找插件

插件有以下属性：
- 自定义属性
  - **name**：插件名(只读)
  - **config**: 插件设置
  - **init**：初始化方法，会在Bot连接后调用，插件的具体内容可写在此方法内
- 内置属性(请勿随意覆写)
  - **Bot**：Bot对象
  - **Command**：插件命令
  - **setup**: 加载方法，会在实例化完成后调用，用于初始化插件设置和`Command`类
  - **autoSave**: 设置处理方法，会在`init`方法执行后，用于设置修改后的自动保存
:::

```ts
class Fudu extends BotPlugin {
  name = '复读'

  init = () => {
    this.Bot.Event.on('message.group', e => {
      this.Bot.Api.sendGroupMsg(e.group_id, e.message)
    })
  }
}

app.plugin(Fudu)
```

**类插件也可使用指令方式编写功能：**

插件内有两种方法设置指令
- 使用`this.Bot.Command.command`
- 使用`this.Command.command`

功能基本一致，但是后者可以统一的设置**黑/白名单**和多一些管理方法，同时`gorup`会固定为插件的`name`
```ts
class Command extends BotPlugin {
  init = () => {
    this.Bot.Command
      // 指令名称
      .command('指令1')
      // 指令别名，可设置多个
      .alias('Command1')
      // 使用正则匹配方式，使用后指令名称和指令别名将会失效
      .reg(/指令/)
      // 指令描述
      .desc('测试指令1')
      // 指令分组
      .group('测试')
      // 设置白名单
      .white([123456])
       // 设置黑名单，黑名单和白名单不能同时使用，后调用的将会失效
       // 与Bot的黑白名单不同，指令的黑白名单会同时对Q号和群号生效
      .black([123456])
      // 设置触发方法，可设置多个
      .action('group', e => {
        // 群指令
      })
      .action('private', e => {
        // 私聊指令
      })

    // 设置插件统一白名单
    this.Command.white([123456])

    this.Command
      .command('指令1')
      .action('group', e => {})
  }
}

app.plugin(Command)
```

## config
插件的`config`对象，有两个特殊属性
- enable
- auto_save

若`enable`存在且为`false`时，在Bot初始化时不会执行该插件的`init`方法

若`auto_save`存在且为`true`时，在插件执行完`init`方法后会执行`autoSave`方法监听`config`的改变，在`config`改变后自动执行`Bot.Plugin.saveConfig`更新本地保存的设置文件

## Bot
插件类可通过[**this.Bot**]('/bot/')调用框架的各种功能。
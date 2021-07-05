## 简介
**咸鱼Bot**是运行于[Node.js](https://nodejs.org/)，使用[TypeScript](https://www.typescriptlang.org/)编写的自用**HTTP API**框架。

因为并没有人使用所以更新比较随心所欲，经过多次重写，现在已是较为完善(自认为)的Bot框架。

## 快速开始
运行**咸鱼Bot**需要**Node.js**环境，和**HTTP API**客户端，请先安装。

::: warning 注意事项
- **咸鱼Bot**的API与事件根据[go-cqhttp](https://github.com/Mrs4s/go-cqhttp)编写，与其它的**HTTP API**客户端不一定兼容，所以不推荐使用其它**HTTP API**客户端。
- 目前仅支持websocket链接。
:::

### 安装
```sh
npm install xianyu-robot
# yarn add xianyu-robot
```

### 使用
> 推荐使用**TypeScript**开发以获得更好的代码提示
```ts
import App from 'xianyu-robot'

const app = new App()
app.start()
```

## App
除`start`方法外，其它方法可连续调用，如：
```ts
app
  .admin(10001)
  .plugin(PluginA)
  .plugin(PluginB)
  .white[10001]
  .start()
```

### 设置管理员
```ts
app.admin(10001)
```

### 添加不输出事件日志的群
```ts
app.noLog([10001])
```

### 添加禁用内置指令的群
```ts
app.noSysComm([10001])
```

### 添加群黑/白名单
设置后插件和命令将会对列表中的群号无效/有效，黑名单和白名单不能同时使用，后调用的将会失效。
```ts
app.black([10001])
// app.white([10001])
```

### 载入插件
```ts
app.plugin(PluginName, PluginOption)
```

插件可使用**类插件**或者**函数插件**，简单功能可使用**函数插件**
接收参数为`Bot`类，如使用**函数插件**实现复读
```ts
app.plugin(bot => {
    bot.Event.on('message.group', e => {
        bot.Api.sendGroupMsg(e.group_id, e.message)
    })
})
```

### 启动Bot
启动方法，请在最后调用
该方法有3个参数，均为可选属性，分别为：
- WS设置
- 是否开启debug（若为`true`则所有API方法将不会真正调用）
- 是否显示事件日志（若为`false`则不会显示事件日志）
以下为默认属性
```ts
app.start({
  wss: false, // 是否使用wss
  accessToken: '', // API的访问token
  host: '127.0.0.1', // 客户端地址
  port: 6700, // 客服端端口
  reconnection: true, // 是否连线错误时自动重连
  reconnectionAttempts: 1000, // 连续连线失败的次数不超过这个值
  reconnectionDelay: 1000 // 重复连线的延迟时间, 单位: ms
}, false, true)

```
该方法为异步函数，可使用`then`在Bot完全启动后执行某方法
```ts
app.start()
  .then(bot => {
    console.log('Bot已启动')
  })
```

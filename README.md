# wechat-bot
wechat rebot


## 登陆微信并使用ChatGPT

在服务器或者有网络的设备安装依赖`package.json`,配置好了如下命令：

```bash
npm i
npm run dev

```

## .env

把.env.example复制为.env，修改如下内容：

```bash
API="https://XXXX.deno.dev/v1"
OPENAI_API_KEY="sk-XXXXXXXXXXXXXXXXXXX"
MODEL="gpt-3.5-turbo"
CHAT_PRIVATE_TRIGGER_KEYWORD=
TEMPERATURE=0.6
BLOCK_WORDS="VPN"
CHATGPT_BLOCK_WORDS="VPN"
WECHATY_PUPPET= "wechaty-puppet-wechat"
WECHATY_NAME = "WechatEveryDay"

```

## GPT reverse proxy

部署 Deno Deploy

点击这个[链接](https://dash.deno.com/new_from_repo)，选择main.ts，可以快速一键部署到 Deno Deploy 上。
然后在 Settings 选项卡里可以设置自定义二级域名，或者绑定自己的域名。 

## 鸣谢
@alitrack [gpt-proxy](https://github.com/alitrack/gpt-proxy)  
@fuergaosi233 [wechat-chatgpt](https://github.com/fuergaosi233/wechat-chatgpt)

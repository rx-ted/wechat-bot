/*
 * @Author: rx-ted
 * @Date: 2023-05-28 14:15:22
 * @LastEditors: rx-ted
 * @LastEditTime: 2023-05-28 22:10:35
 */
import { WechatyBuilder } from "wechaty";
import qrcodeTerminal from "qrcode-terminal";
import { ChatBot } from "./bot.js";
const Bot = new ChatBot();
import { Message } from "wechaty";
// import config from "./config.js";
// import ChatGPT from "./chatgpt.js";

let bot: any = {};
const startTime = new Date();
let chatGPTClient: any = null;
// chatGPTClient = new ChatGPT();
bot = WechatyBuilder.build({
  name: "WechatEveryDay", // generate xxxx.memory-card.json and save login data for the next login
  puppet: "wechaty-puppet-wechat", // 如果有token，记得更换对应的puppet
  puppetOptions: {
    uos: true,
  },
});



async function onMessage(msg: Message) {
  // 避免重复发送
  if (msg.date() < startTime) {
    return;
  }

  if (msg.self()) {
    return;
  }
  if (msg.text().startsWith("/ping")) {
    await msg.say("pong");
    return;
  }
  /* 添加命令 */
  try {

    await Bot.onMessage(msg);
  } catch (e) {
    console.log(e);

  }
}

/**
 * 微信扫描
 * @param qrcode wechat 二维码
 * @param status wechat 状态
 */
function onScan(qrcode: string, status: number) {
  // 在console端显示二维码 
  qrcodeTerminal.generate(qrcode, { small: true }, function (qr) {
    console.log(`https://api.qrserver.com/v1/create-qr-code/?data=${qrcode}`);
    console.log(qr);
  });
}

async function onLogin(user: string) {
  console.log(`${user} has logged in`);
  const date = new Date();
  console.log(`Current time:${date}`);

}

function onLogout(user: string) {
  console.log(`${user} has logged out`);
}

async function initProject() {
  bot
    .on("scan", onScan)  //扫描
    .on("login", onLogin) //登陆
    .on("logout", onLogout) //登出
    // .on('ready',onReady) //准备
    .on("message", onMessage); //消息
  try {
    bot
      .start(() => console.log("Start to log in wechat..."));
  } catch (e) {
    console.error(`⚠️ Bot start failed, can you log in through wechat on the web?: ${e}`);
    bot.stop();
  }
}



initProject();
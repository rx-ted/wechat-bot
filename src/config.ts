/*
 * @Author: rx-ted
 * @Date: 2023-05-28 17:28:31
 * @LastEditors: rx-ted
 * @LastEditTime: 2023-05-29 11:06:14
 */


import * as dotenv from "dotenv";
dotenv.config();
import { ChatCompletionRequestMessage } from "openai";
import { Type } from "typescript";

export interface IConfig {
  api?: string;
  openai_api_key: string;
  model: string;
  chatTriggerRule: string;
  disableGroupMessage: boolean;
  temperature: number;
  blockWords: string[];
  chatgptBlockWords: string[];
  chatPrivateTriggerKeyword: string;
  wechaty_puppet?        : any ;
  wechaty_name: string;
}


export const config: IConfig = {
  api: process.env.API,
  openai_api_key: process.env.OPENAI_API_KEY || "123456789",
  model: process.env.MODEL || "gpt-3.5-turbo",
  chatPrivateTriggerKeyword: process.env.CHAT_PRIVATE_TRIGGER_KEYWORD || "",
  chatTriggerRule: process.env.CHAT_TRIGGER_RULE || "",
  disableGroupMessage: process.env.DISABLE_GROUP_MESSAGE === "true",
  temperature: process.env.TEMPERATURE ? parseFloat(process.env.TEMPERATURE) : 0.6,
  blockWords: process.env.BLOCK_WORDS?.split(",") || [],
  chatgptBlockWords: process.env.CHATGPT_BLOCK_WORDS?.split(",") || [],
  wechaty_puppet: process.env.WECHATY_PUPPET || "wechaty-puppet-wechat",
  wechaty_name:"WechatEveryDay" || process.env.WECHATY_NAME,
};



export interface User {
  username: string,
  chatMessage: Array<ChatCompletionRequestMessage>,
}
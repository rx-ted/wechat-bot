/*
 * @Author: rx-ted
 * @Date: 2023-06-05 21:17:59
 * @LastEditors: rx-ted
 * @LastEditTime: 2023-06-07 22:26:34
 */
import { serve } from "https://deno.land/std@0.181.0/http/server.ts";
import { exists } from "https://deno.land/std@0.182.0/fs/mod.ts";

const OPENAI_API_HOST = "api.openai.com";

const INDEX_URL = Deno.env.get("INDEX_URL")||"https://raw.githubusercontent.com/rx-ted/wechat-bot/main/index.html"

let index = '';

serve(async (request) => {
    const url = new URL(request.url);
    url.protocol = "https";
    const pathname = url.pathname;
    if (pathname.startsWith('/v1/')|| pathname.startsWith('/dashboard')){
        url.host = OPENAI_API_HOST;
        return await fetch(url, request);
    }
    else{
        if (index == '') {
            const res = await fetch(INDEX_URL);
            index = await res.text();
        }
        return new Response(index, {
            headers: {
                "content-type": "text/html;charset=UTF-8",
            },
        });
    }
});